import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { uploadImage } from "../services/uploadImage"
import api from "../utils/api"
import { useAuth } from "../context/authContext"

export default function ProductForm() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [size, setSize] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!imageFile) {
      setError("Por favor, selecciona una imagen válida (menos de 2MB).")
      return
    }

    try {
      const imageUrl = await uploadImage(imageFile)

      const newProduct = {
        name,
        description,
        price: parseFloat(price),
        category,
        size: size || null,
        image: imageUrl
      }

      await api.post("/products", newProduct)

      setSuccess("Producto creado correctamente")
      setTimeout(() => navigate("/catalogo"), 1500)
    } catch (err) {
      console.error("Error al crear producto:", err)
      setError("Hubo un error al crear el producto.")
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

  return (
    <main className="min-h-screen bg-[#F4F9EF] py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-[#2f3e2e] mb-4 text-center">Añadir nuevo producto</h2>

        {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 mb-4 text-sm text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre del producto"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={300}
            required
            className="w-full border p-3 rounded"
            rows={4}
          />

          <input
            type="number"
            step="0.01"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full border p-3 rounded"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full border p-3 rounded"
          >
            <option value="">Selecciona una categoría</option>
            <option value="planta">Planta</option>
            <option value="maceta">Maceta</option>
            <option value="herramienta">Herramienta</option>
            <option value="fertilizante">Fertilizante</option>
            <option value="kit">Kit</option>
          </select>

          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full border p-3 rounded"
          >
            <option value="">Tamaño (opcional)</option>
            <option value="pequeña">Pequeña</option>
            <option value="mediana">Mediana</option>
            <option value="grande">Grande</option>
          </select>

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

          {previewUrl && (
            <img
              src={previewUrl}
              alt="Vista previa"
              className="w-full h-64 object-cover rounded mt-4"
            />
          )}

          <button
            type="submit"
            className="w-full bg-[#2f3e2e] text-white py-2 rounded hover:bg-[#3f513d] transition"
          >
            Guardar producto
          </button>
        </form>
      </div>
    </main>
  )
}
