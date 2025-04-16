import { createContext, useContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { app } from "../firebase/firebaseConfig"

const auth = getAuth(app)
const db = getFirestore(app)

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const docRef = doc(db, "users", firebaseUser.uid)
          const docSnap = await getDoc(docRef)

          if (docSnap.exists()) {
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              role: docSnap.data().role || "user",
            })
          } else {
            // Si no hay documento, rol por defecto
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              role: "user",
            })
          }
        } catch (error) {
          console.error("Error al obtener el rol:", error)
        }
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}
