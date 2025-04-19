import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { uploadImage } from "../services/uploadImage"
import api from "../utils/api"

export default function NuevoProducto({ editData = null, onSuccess }) {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [size, setSize] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (editData) {
      setName(editData.name)
      setDescription(editData.description)
      setPrice(editData.price)
      setCategory(editData.category)
      setSize(editData.size)
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
        imageUrl = await uploadImage(imageFile, "products")
      }

      const newProduct = {
        name,
        description,
        price,
        category,
        size,
        image: imageUrl,
      }

      if (editData) {
        await api.put(`/products/${editData._id}`, newProduct)
      } else {
        await api.post("/products", newProduct)
      }

      if (onSuccess) {
        onSuccess()
      } else {
        navigate("/catalogo")
      }
    } catch (err) {
      console.error("Error al guardar producto:", err)
      setError("Hubo un error al guardar el producto.")
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-2xl font-bold text-[#2f3e2e] mb-4 text-center">
        {editData ? "Editar producto" : "Nuevo producto"}
      </h2>

      {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full border border-[#ccc] p-3 rounded"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full border border-[#ccc] p-3 rounded"
        >
          <option value="">Selecciona una categoría</option>
          <option value="interior">Plantas de interior</option>
          <option value="exterior">Plantas de exterior</option>
          <option value="aromaticas">Plantas aromáticas</option>
          <option value="cactus">Cactus y suculentas</option>
        </select>

        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
          className="w-full border border-[#ccc] p-3 rounded"
        >
          <option value="">Selecciona un tamaño</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
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
          {editData ? "Guardar cambios" : "Crear producto"}
        </button>
      </form>
    </div>
  )
}
