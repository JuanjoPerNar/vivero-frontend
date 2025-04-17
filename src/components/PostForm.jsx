import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { uploadImage } from "../services/uploadImage"
import api from "../utils/api"

export default function PostForm() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!imageFile) {
      setError("Por favor, selecciona una imagen.")
      return
    }

    try {
      const imageUrl = await uploadImage(imageFile)

      const newPost = {
        title,
        description,
        author: `${user.name} ${user.surname}`,
        image: imageUrl,
      }

      await api.post("/posts", newPost)

      setSuccess("Publicación creada correctamente")
      setTitle("")
      setDescription("")
      setImageFile(null)
      setTimeout(() => navigate("/comunidad"), 1500)
    } catch (err) {
      console.error("Error al crear publicación:", err)
      setError("Hubo un error al crear la publicación.")
    }
  }

  return (
    <main className="min-h-screen bg-[#F4F9EF] py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-[#2f3e2e] mb-4 text-center">Crear nueva publicación</h2>

        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}
        {success && <p className="text-green-600 mb-4 text-sm">{success}</p>}

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

          {/* Input de imagen oculto */}
          <div>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              required
              className="hidden"
            />
            <label
              htmlFor="imageInput"
              className="block w-full text-center bg-[#e7efe1] border border-[#ccc] text-[#2f3e2e] py-2 rounded cursor-pointer hover:bg-[#dcebd6] transition"
            >
              {imageFile ? imageFile.name : "Seleccionar imagen"}
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2f3e2e] text-white py-2 rounded hover:bg-[#3f513d] transition cursor-pointer"
          >
            Publicar
          </button>
        </form>
      </div>
    </main>
  )
}
