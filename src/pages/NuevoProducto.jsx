import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../utils/api"
import { uploadImage } from "../services/uploadImage"

export default function NuevoProducto({ editData, onSuccess }) {
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

  const isEditing = !!editData

  useEffect(() => {
    if (isEditing) {
      setName(editData.name || "")
      setDescription(editData.description || "")
      setPrice(editData.price || "")
      setCategory(editData.category || "")
      setSize(editData.size || "")
      setPreviewUrl(editData.image || "")
    }
  }, [editData, isEditing])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      let imageUrl = previewUrl

      if (imageFile) {
        imageUrl = await uploadImage(imageFile)
      }

      const productData = {
        name,
        description,
        price,
        category,
        size,
        image: imageUrl,
      }

      if (isEditing) {
        await api.put(`/products/${editData._id}`, productData)
        setSuccess("Producto actualizado correctamente")
      } else {
        await api.post("/products", productData)
        setSuccess("Producto creado correctamente")
      }

      setTimeout(() => {
        if (onSuccess) {
          onSuccess()
        } else {
          navigate("/catalogo")
        }
      }, 1500)
    } catch (err) {
      console.error("Error al guardar el producto:", err)
      setError("Hubo un error al guardar el producto.")
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && file.size > 2 * 1024 * 1024) {
      setError("La imagen debe pesar menos de 2MB.")
      setImageFile(null)
      setPreviewUrl("")
    } else {
      setImageFile(file)
      setPreviewUrl(URL.createObjectURL(file))
      setError("")
    }
  }

  return (
    <main className="min-h-screen bg-[#F4F9EF] py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-[#2f3e2e] mb-4 text-center">
          {isEditing ? "Editar producto" : "Nuevo producto"}
        </h2>

        {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 mb-4 text-sm text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="5"
            className="w-full border p-3 rounded"
          ></textarea>

          <input
            type="number"
            step="0.01"
            placeholder="Precio (€)"
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
            <option value="">Selecciona categoría</option>
            <option value="planta">Planta</option>
            <option value="maceta">Maceta</option>
            <option value="herramienta">Herramienta</option>
            <option value="fertilizante">Fertilizante</option>
            <option value="kit">Kit</option>
          </select>

          <input
            type="text"
            placeholder="Tamaño (ej. S, M, L)"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
            className="w-full border p-3 rounded"
          />

          <div>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
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
            <div className="text-center mt-4">
              <img
                src={previewUrl}
                alt="Vista previa"
                className="w-full h-64 object-cover rounded"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#2f3e2e] text-white py-2 rounded hover:bg-[#3f513d] transition cursor-pointer"
          >
            {isEditing ? "Actualizar" : "Crear"}
          </button>
        </form>
      </div>
    </main>
  )
}
