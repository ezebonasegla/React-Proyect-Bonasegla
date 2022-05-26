// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy5SvIY3xinMie2xAoFUJbi1PGHQJ0Czs",
    authDomain: "bonadrinks.firebaseapp.com",
    projectId: "bonadrinks",
    storageBucket: "bonadrinks.appspot.com",
    messagingSenderId: "488460615989",
    appId: "1:488460615989:web:4323c2c9b377cfff8d8c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}