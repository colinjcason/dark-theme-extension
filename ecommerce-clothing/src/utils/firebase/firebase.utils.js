import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
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

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  // if user does not exist, set user doc in database
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log(error)
    }
  }

  // is user already exists, just return the user reference
  return userDocRef
}