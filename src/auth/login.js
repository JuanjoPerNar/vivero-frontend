import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../firebase/firebaseConfig"

const auth = getAuth(app)

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    throw error
  }
}
