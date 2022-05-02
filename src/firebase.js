import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDisEy-D_1Mstv0_grbIhapgjlwuOcKXwE",
  authDomain: "clone-b9ee1.firebaseapp.com",
  projectId: "clone-b9ee1",
  storageBucket: "clone-b9ee1.appspot.com",
  messagingSenderId: "900386564514",
  appId: "1:900386564514:web:4ff17765d6460f9b7deafb",
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
