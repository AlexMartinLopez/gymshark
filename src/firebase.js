// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDskBI3Xy8YH6P6u205OndpeY-h5aPjgWE",
  authDomain: "gymbase-f8a8f.firebaseapp.com",
  projectId: "gymbase-f8a8f",
  storageBucket: "gymbase-f8a8f.appspot.com",
  messagingSenderId: "1046677553431",
  appId: "1:1046677553431:web:678fac30e602cce0e57752",
  measurementId: "G-J02SBP7BM0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const obtenerCursos = async () => {
  try {
    const cursosCollection = collection(db, "cursos");
    const cursosSnapshot = await getDocs(cursosCollection);

    if (cursosSnapshot.empty) {
      console.log("No se encontraron cursos en Firestore.");
      return [];
    }

    const cursosList = cursosSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        nombre: data.Nombre || "Nombre no disponible",
        horario: data.Horario || "Horario no disponible",
        entrenador: data.Entrenador || "Entrenador no disponible",
        especializacion: data.Especialización || "Especialización no disponible"
      };
    });

    return cursosList;
  } catch (e) {
    console.error("Error obteniendo cursos:", e);
    throw e;
  }
};
