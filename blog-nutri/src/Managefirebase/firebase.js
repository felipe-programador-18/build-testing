import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqKH2MCUA7XYwjOLzvXrtP77SAqY-e3aQ",
  authDomain: "blog-saude-7f9c0.firebaseapp.com",
  projectId: "blog-saude-7f9c0",
  storageBucket: "blog-saude-7f9c0.appspot.com",
  messagingSenderId: "695106280901",
  appId: "1:695106280901:web:2b08b5782eb8babd8dffac"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export {db}