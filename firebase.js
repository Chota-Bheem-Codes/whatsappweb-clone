import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA9SoqcgnpT9wzaUv0x0eKLw-J-Nmpv4Uk",
    authDomain: "whatsapp-clone-3f9f3.firebaseapp.com",
    projectId: "whatsapp-clone-3f9f3",
    storageBucket: "whatsapp-clone-3f9f3.appspot.com",
    messagingSenderId: "670321687288",
    appId: "1:670321687288:web:ee364dc48cfb1819f4590d"
  };

const app = !firebase.apps.length? firebase.initializeApp(firebaseConfig): firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }