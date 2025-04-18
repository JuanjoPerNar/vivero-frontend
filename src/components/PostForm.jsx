import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { uploadImage } from "../services/uploadImage"
import api from "../utils/api"

export default function PostForm({ editData = null, onSuccess }) {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [title, setTitle] = useState(editData?.title || "")
  const [description, setDescription] = useState(editData?.description || "")
  const [imageFile, setImageFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(editData?.image || "")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [showLightbox, setShowLightbox] = useState(false)

  useEffect(() => {
    if (editData?.image) {
      setPreviewUrl(editData.image)
    }
  }, [editData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      let imageUrl = previewUrl

      if (imageFile) {
        imageUrl = await uploadImage(imageFile)
      }

      const postPayload = {
        title,
        description,
        author: `${user.name} ${user.surname}`,
        image: imageUrl,
      }

      if (editData) {
        await api.put(`/posts/${editData._id}`, postPayload)
        setSuccess("Publicación actualizada correctamente")
      } else {
        await api.post("/posts", postPayload)
        setSuccess("Publicación creada correctamente")
      }

      setTitle("")
      setDescription("")
      setImageFile(null)
      setPreviewUrl("")
      setTimeout(() => {
        if (onSuccess) {
          onSuccess()
        } else {
          navigate("/comunidad")
        }
      }, 1500)
    } catch (err) {
      console.error("Error al enviar publicación:", err)
      setError("Hubo un error al procesar la publicación.")
    }
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setPreviewUrl("")
    setError("")
  }

  return (
    <main className="bg-[#F4F9EF] py-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-[#2f3e2e] mb-4 text-center">
          {editData ? "Editar publicación" : "Crear nueva publicación"}
        </h2>

        {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 mb-4 text-sm text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-[#ccc] p-3 rounded"
          />

          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="5"
            className="w-full border border-[#ccc] p-3 rounded"
          ></textarea>

          <div>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0]
                if (file && file.size > 2 * 1024 * 1024) {
                  setError("La imagen debe pesar menos de 2MB.")
                  setImageFile(null)
                  setPreviewUrl("")
                } else {
                  setError("")
                  setImageFile(file)
                  setPreviewUrl(URL.createObjectURL(file))
                }
              }}
              className="hidden"
            />
            <label
              htmlFor="imageInput"
              className="block w-full text-center bg-[#e7efe1] border border-[#ccc] text-[#2f3e2e] py-2 rounded cursor-pointer hover:bg-[#dcebd6] transition"
            >
              {imageFile ? imageFile.name : "Seleccionar imagen"}
            </label>
          </div>

          {previewUrl && (
            <div className="relative text-center mt-4">
              <img
                src={previewUrl}
                alt="Vista previa"
                className="w-full h-64 object-cover rounded cursor-pointer hover:opacity-80 transition"
                onClick={() => setShowLightbox(true)}
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-white text-red-600 font-bold text-lg rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-red-100 cursor-pointer transition"
                aria-label="Eliminar imagen"
              >
                &times;
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#2f3e2e] text-white py-2 rounded hover:bg-[#3f513d] transition cursor-pointer"
          >
            {editData ? "Actualizar publicación" : "Publicar"}
          </button>
        </form>
      </div>

      {showLightbox && previewUrl && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowLightbox(false)}
        >
          <img
            src={previewUrl}
            alt="Vista ampliada"
            className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </main>
  )
}
