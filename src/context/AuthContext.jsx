import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth, db } from '../config/firebaseConfig';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false)

  async function handleAddToCart(...item) {
    try {
      const userId = auth.currentUser.uid
    const cartRef = doc(collection(db, "userInfo", userId))

    await setDoc(cartRef, {...item})
    } catch (error) {
      console.error(error.message)
    }
    
  }
 
  const createUser = async (email, password, firstName, lastName, institution, phoneNumber) => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user

       await updateProfile(user, {
         displayName: `${firstName} ${lastName}`,
         phoneNumber: `${phoneNumber}`,
       });
      
      await setDoc(doc(db, 'userInfo', user.uid), {
        email,
        phoneNumber,
        firstName,
        lastName,
        institution,
        id: user.uid
      });

      setCurrentUser(user)
    } catch (error) {
      console.error(error.message)
    }
  };

  const signIn = async (email, password) => {
     try {
       const userCred = await signInWithEmailAndPassword(auth, email, password)
       setCurrentUser(userCred.user)
     } catch (error) {
      console.error(error.message)
     }
    
   }
  const logout = async () => {
    try {
      await signOut(auth)
    setCurrentUser(null)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
          setLoading(true)
            setCurrentUser(user)
            const newData = await getDoc(doc(db, "userInfo", user.uid))
            if (newData.exists()) {
              setUserData(newData.data())
            } 
      } else {
        setCurrentUser(null);
        setUserData(null);
        setLoading(false)
      }
    })

   return () => unsubscribe()
  }, [userData])
          

  const value = {createUser, signIn, currentUser, userData, loading, logout, handleAddToCart }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext)
}