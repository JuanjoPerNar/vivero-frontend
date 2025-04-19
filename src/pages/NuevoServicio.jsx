import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { uploadImage } from "../services/uploadImage"
import api from "../utils/api"

export default function NuevoServicio({ editData = null, onSuccess }) {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (editData) {
      setTitle(editData.title)
      setDescription(editData.description)
      setType(editData.type)
      setPreviewUrl(editData.image)
    }
  }, [editData])

  const handleImageChange = (e) => {
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
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setPreviewUrl("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      let imageUrl = previewUrl

      if (imageFile) {
        imageUrl = await uploadImage(imageFile, "services")
      }

      const newService = {
        title,
        description,
        type,
        image: imageUrl,
      }

      if (editData) {
        await api.put(`/services/${editData._id}`, newService)
      } else {
        await api.post("/services", newService)
      }

      if (onSuccess) {
        onSuccess()
      } else {
        navigate("/servicios")
      }
    } catch (err) {
      console.error("Error al guardar servicio:", err)
      setError("Hubo un error al guardar el servicio.")
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-2xl font-bold text-[#2f3e2e] mb-4 text-center">
        {editData ? "Editar servicio" : "Nuevo servicio"}
      </h2>

      {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}

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
          <option value="">Selecciona un tipo de servicio</option>
          <option value="jardines">Diseño de jardines</option>
          <option value="verticales">Jardines verticales</option>
          <option value="mantenimiento">Mantenimiento</option>
          <option value="riego">Sistemas de riego</option>
          <option value="asesoramiento">Asesoramiento</option>
          <option value="alquiler">Alquiler de plantas</option>
          <option value="reciclaje">Reciclaje de macetas</option>
          <option value="rescate">Rescate de plantas</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="imageInput"
        />
        <label
          htmlFor="imageInput"
          className="block w-full text-center bg-[#e7efe1] border border-[#ccc] text-[#2f3e2e] py-2 rounded cursor-pointer hover:bg-[#dcebd6] transition"
        >
          {imageFile ? imageFile.name : previewUrl ? "Imagen cargada" : "Seleccionar imagen"}
        </label>

        {previewUrl && (
          <div className="relative text-center">
            <img
              src={previewUrl}
              alt="Vista previa"
              className="w-full h-48 object-cover rounded mt-2"
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
          {editData ? "Guardar cambios" : "Crear servicio"}
        </button>
      </form>
    </div>
  )
}
