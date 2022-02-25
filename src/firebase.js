import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDK--NVh3PSRtCPFNF1dror1fJAzUuQOfs",
    authDomain: "netflix-clone-787d1.firebaseapp.com",
    projectId: "netflix-clone-787d1",
    storageBucket: "netflix-clone-787d1.appspot.com",
    messagingSenderId: "279050939195",
    appId: "1:279050939195:web:3983fa35c2a6f5840f251e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db