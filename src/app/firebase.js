// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc , getDocs, deleteDoc ,updateDoc, where, query } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default app;






/* MENSAJES */
export async function sendMessage(message) {
    const messagesRef = collection(db, "messages");
    await addDoc(messagesRef, message);
}

export async function getMessages() {
    const messagesRef = collection(db, "messages");
    const messagesSnapshot = await getDocs(messagesRef);
    const messages = messagesSnapshot.docs.map((doc) => doc.data());
    return messages;
}


/*Info visitas */

export async function updateVisit(){
    const k = query(collection(db, "vistas"), where("id", "==", 1));
    const querySnapshot = await getDocs(k);
    querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, {
            visitas: doc.data().visitas + 1
        });
    });
    return true;
}