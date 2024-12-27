import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWozh8jsLVkatxcj3IGN40AZVU3qupVUY",
  authDomain: "agendador-efe30.firebaseapp.com",
  projectId: "agendador-efe30",
  storageBucket: "agendador-efe30.firebasestorage.app",
  messagingSenderId: "1078399735931",
  appId: "1:1078399735931:web:a885f233a8ddbba6682ade",
  measurementId: "G-RZGCGGQD5F",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Configura persistência e inicializa o Auth
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Erro ao configurar persistência: ", error);
});

// Configura o provedor de autenticação do Google
const provider = new GoogleAuthProvider();

// Inicializa o Firestore
const db = getFirestore(app);

export { auth, provider, db };
