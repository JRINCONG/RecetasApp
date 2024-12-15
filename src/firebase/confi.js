// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { v4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOu9HKAWu1fjDVvQdMP-7aGIZTzyf7VNw",
  authDomain: "fotos-user.firebaseapp.com",
  projectId: "fotos-user",
  storageBucket: "fotos-user.appspot.com",
  messagingSenderId: "95412474303",
  appId: "1:95412474303:web:37248c23b960d5f0d3110a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const subida = getStorage(app)

export const Upload = async (file) =>{
  
    const storageRef = ref(subida,v4())
    await uploadBytes(storageRef, file);
    let ruta = await getDownloadURL(storageRef)
    return ruta;

}