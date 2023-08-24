import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDvcRHY4fUxCEz5qf7nTKsExsd5tCKF8tA",
    authDomain: "alarme-457b7.firebaseapp.com",
    databaseURL: "https://alarme-457b7-default-rtdb.firebaseio.com",
    projectId: "alarme-457b7",
    storageBucket: "alarme-457b7.appspot.com",
    messagingSenderId: "95198509674",
    appId: "1:95198509674:web:d46273f1f0a5b38b77e813",
    measurementId: "G-J2JD0TKY14"
  };

  firebase.initializeApp (
    firebaseConfig
  )

  export default firebase.database ()