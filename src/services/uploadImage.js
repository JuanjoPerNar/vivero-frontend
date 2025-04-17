import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { app } from "../firebase/firebaseConfig"

const storage = getStorage(app)

export const uploadImage = async (file, folder = "posts") => {
  if (!file) throw new Error("No se ha seleccionado ningún archivo")

  const storageRef = ref(storage, `${folder}/${Date.now()}-${file.name}`)

  try {
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
  } catch (error) {
    console.error("Error al subir imagen a Firebase:", error)
    throw error
  }
}
