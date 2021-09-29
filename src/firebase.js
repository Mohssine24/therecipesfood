import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB9FBudD7btvrZ7f6vK0yimYt8yEV1OxX4",
  authDomain: "the-recipes-food.firebaseapp.com",
  projectId: "the-recipes-food",
  storageBucket: "the-recipes-food.appspot.com",
  messagingSenderId: "597011240134",
  appId: "1:597011240134:web:45e2ce1e7c3bb446b433c7",
  measurementId: "G-P7XTQ07TCF"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.storage();

export { provider, auth, firestore };
export default db;