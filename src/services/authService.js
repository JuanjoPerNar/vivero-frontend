import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { auth, db } from "../firebase/firebaseConfig"

export const registerUser = async (email, password, name, surname) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  const user = userCredential.user

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    name,
    surname,
    role: "user",
  })

  return user
}

export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user
}

export const logoutUser = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    throw error
  }
}

export const getUserData = async (uid) => {
  const userDoc = await getDoc(doc(db, "users", uid))
  return userDoc.exists() ? userDoc.data() : null
}

export const changeUserEmail = async (currentPassword, newEmail) => {
  const user = auth.currentUser
  if (!user) throw new Error("No hay ningún usuario autenticado.")

  const credential = EmailAuthProvider.credential(user.email, currentPassword)

  await reauthenticateWithCredential(user, credential)
  await updateEmail(user, newEmail)
}

export const changeUserPassword = async (currentPassword, newPassword) => {
  const user = auth.currentUser
  if (!user) throw new Error("No hay ningún usuario autenticado.")

  const credential = EmailAuthProvider.credential(user.email, currentPassword)

  await reauthenticateWithCredential(user, credential)
  await updatePassword(user, newPassword)
}
