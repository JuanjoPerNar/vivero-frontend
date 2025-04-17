import { createContext, useContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"
import { app } from "../firebase/firebaseConfig"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined)
  const auth = getAuth(app)
  const db = getFirestore(app)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collection(db, "users"), where("uid", "==", user.uid))
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0].data()
          setUser({
            uid: user.uid,
            email: user.email,
            name: userDoc.name,
            surname: userDoc.surname,
            role: userDoc.role
          })
        } else {
          setUser({
            uid: user.uid,
            email: user.email,
            name: userDoc.name,
            surname: userDoc.surname,
            role: "user"
          })
        }
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}
