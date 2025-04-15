import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { app } from "../firebase/firebaseConfig"

const auth = getAuth(app)

export const registerUser = async (email, password, displayName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        if (displayName) {
            await updateProfile(userCredential.user, { displayName })
        }
        return userCredential.user
    } catch (error) {
        throw error
    }
}