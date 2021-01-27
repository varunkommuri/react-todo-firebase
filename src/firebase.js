import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyClrmUfeE8qme3JxrWGU7pWpqv7dslxnh4",
    authDomain: "todo-app-13d57.firebaseapp.com",
    databaseURL: "https://todo-app-13d57.firebaseio.com",
    projectId: "todo-app-13d57",
    storageBucket: "todo-app-13d57.appspot.com",
    messagingSenderId: "355687828600",
    appId: "1:355687828600:web:55a9b8f5910e55d15b718d",
    measurementId: "G-N2ZM5S6SVJ"
  })

  const db = firebaseApp.firestore();
  export default db;