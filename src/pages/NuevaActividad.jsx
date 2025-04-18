import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { uploadImage } from "../services/uploadImage"
import api from "../utils/api"

export default function NuevaActividad() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [type, setType] = useState("")
  const [location, setLocation] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!imageFile) {
      setError("Por favor, selecciona una imagen (máximo 2MB).")
      return
    }

    try {
      const imageUrl = await uploadImage(imageFile, "activities")

      const newActivity = {
        title,
        description,
        date,
        location,
        image: imageUrl
      }

      await api.post("/activities", newActivity)

      setSuccess("Actividad creada correctamente")
      setTimeout(() => navigate("/admin/dashboard"), 1500)
    } catch (err) {
      console.error("Error al crear la actividad:", err)
      setError("Hubo un error al crear la actividad.")
    }
  }

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
    setError("")
  }

  return (
    <main className="min-h-screen bg-[#F4F9EF] py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-[#2f3e2e] mb-4 text-center">Crear nueva actividad</h2>

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
            rows="4"
            className="w-full border border-[#ccc] p-3 rounded"
          ></textarea>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full border border-[#ccc] p-3 rounded"
          />

          <select 
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="w-full p-3 border border-[#ccc] rounded bg-white"
          >
            <option value="">Selecciona el tipo de actividad</option>
            <option value="curso">Curso</option>
            <option value="taller">Taller</option>
            <option value="exposición">Exposición</option>
            <option value="otro">Otro</option>
          </select>

          <input
            type="text"
            placeholder="Ubicación (opcional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-[#ccc] p-3 rounded"
          />

          <div>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
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

          {previewUrl && (
            <div className="relative text-center mt-4">
              <img
                src={previewUrl}
                alt="Vista previa"
                className="w-full h-64 object-cover rounded cursor-pointer hover:opacity-80 transition"
                onClick={handleRemoveImage}
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
            Crear actividad
          </button>
        </form>
      </div>
    </main>
  )
}
