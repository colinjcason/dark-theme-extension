import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQHJriKE7j1_HxesozsXTu3_sGkbrJEKU",
  authDomain: "ecommerce-clothing-42f3c.firebaseapp.com",
  projectId: "ecommerce-clothing-42f3c",
  storageBucket: "ecommerce-clothing-42f3c.appspot.com",
  messagingSenderId: "590226576628",
  appId: "1:590226576628:web:bd723174af882dc8defaa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithGoogleRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  // if user does not exist, set user doc in database
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log(error)
    }
  }

  // is user already exists, just return the user reference
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await SignInAuthUserWithEmailAndPassword(auth, email, password)
}