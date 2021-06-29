import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3o6wdQJ94bGxVdUVFy9wCX5IDmy2fTCA",
    authDomain: "base-aa20a.firebaseapp.com",
    projectId: "base-aa20a",
    storageBucket: "base-aa20a.appspot.com",
    messagingSenderId: "564697486227",
    appId: "1:564697486227:web:463c06daaa7f09b6ff8e66",
    measurementId: "G-D0RGPYF6SD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};
  