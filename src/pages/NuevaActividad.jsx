import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { uploadImage } from "../services/uploadImage"
import api from "../utils/api"

export default function NuevoActividad({ editData = null, onSuccess }) {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (editData) {
      setTitle(editData.title)
      setDescription(editData.description)
      setDate(editData.date?.split("T")[0]) // Para input type="date"
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      let imageUrl = previewUrl

      if (imageFile) {
        imageUrl = await uploadImage(imageFile, "activities")
      }

      const newActivity = {
        title,
        description,
        date,
        image: imageUrl,
      }

      if (editData) {
        await api.put(`/activities/${editData._id}`, newActivity)
      } else {
        await api.post("/activities", newActivity)
      }

      if (onSuccess) {
        onSuccess()
      } else {
        navigate("/talleres")
      }
    } catch (err) {
      console.error("Error al guardar actividad:", err)
      setError("Hubo un error al guardar la actividad.")
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-2xl font-bold text-[#2f3e2e] mb-4 text-center">
        {editData ? "Editar actividad" : "Nueva actividad"}
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

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full border border-[#ccc] p-3 rounded"
        />

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
          <img
            src={previewUrl}
            alt="Vista previa"
            className="w-full h-48 object-cover rounded mt-2"
          />
        )}

        <button
          type="submit"
          className="w-full bg-[#2f3e2e] text-white py-2 rounded hover:bg-[#3f513d] transition cursor-pointer"
        >
          {editData ? "Guardar cambios" : "Crear actividad"}
        </button>
      </form>
    </div>
  )
}
