import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { uploadImage } from "../services/uploadImage"
import api from "../utils/api"

export default function NuevoServicio({ editData = null, onSuccess }) {
  const navigate = useNavigate()
  const isEditing = Boolean(editData)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    if (editData) {
      setTitle(editData.title)
      setDescription(editData.description)
      setType(editData.type)
      setImagePreview(editData.image)
    }
  }, [editData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      let imageUrl = imagePreview

      if (imageFile) {
        imageUrl = await uploadImage(imageFile, "services")
      }

      const newData = { title, description, type, image: imageUrl }

      if (isEditing) {
        await api.put(`/services/${editData._id}`, newData)
        setSuccess("Servicio actualizado correctamente")
      } else {
        await api.post("/services", newData)
        setSuccess("Servicio creado correctamente")
      }

      setTimeout(() => {
        if (onSuccess) {
          onSuccess()
        } else {
          navigate("/servicios")
        }
      }, 1500)
    } catch (err) {
      console.error("Error al guardar el servicio:", err)
      setError("Hubo un error al guardar el servicio.")
    }
  }

  return (
    <main className="min-h-screen bg-[#F4F9EF] py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-[#2f3e2e] mb-4 text-center">
          {isEditing ? "Editar servicio" : "Crear nuevo servicio"}
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

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="w-full border border-[#ccc] p-3 rounded"
          >
            <option value="">Selecciona el tipo de servicio</option>
            <option value="jardines">Jardines</option>
            <option value="verticales">Verticales</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="riego">Riego</option>
            <option value="asesoramiento">Asesoramiento</option>
            <option value="alquiler">Alquiler</option>
            <option value="reciclaje">Reciclaje</option>
            <option value="rescate">Rescate</option>
          </select>

          <div>
            <label htmlFor="imageInput" className="block text-sm font-medium text-[#2f3e2e] mb-1">
              Imagen (máximo 2MB)
            </label>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0]
                if (file && file.size > 2 * 1024 * 1024) {
                  setError("La imagen debe pesar menos de 2MB.")
                  setImageFile(null)
                  setImagePreview("")
                } else {
                  setError("")
                  setImageFile(file)
                  setImagePreview(URL.createObjectURL(file))
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

          {imagePreview && (
            <div className="mt-4 text-center">
              <img
                src={imagePreview}
                alt="Vista previa"
                className="w-full h-56 object-cover rounded shadow"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#2f3e2e] text-white py-2 rounded hover:bg-[#3f513d] transition cursor-pointer"
          >
            {isEditing ? "Actualizar servicio" : "Crear servicio"}
          </button>
        </form>
      </div>
    </main>
  )
}
