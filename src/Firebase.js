import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBWYF-MhxCXUDbXKTBUI2fvhTk8Oe8iOg",
    authDomain: "todo-app-1b5a1.firebaseapp.com",
    projectId: "todo-app-1b5a1",
    storageBucket: "todo-app-1b5a1.appspot.com",
    messagingSenderId: "412630001705",
    appId: "1:412630001705:web:1e8037c24fefb516045438",
    measurementId: "G-0BCHQDTL2Q"
  });

const db = firebaseApp.firestore();
export default db;