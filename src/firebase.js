import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB5tLGV2Lk5YdzciSZwuT_N6_zRSJTyoM4",
    authDomain: "aflem-6e85d.firebaseapp.com",
    projectId: "aflem-6e85d",
    storageBucket: "aflem-6e85d.appspot.com",
    messagingSenderId: "966949469432",
    appId: "1:966949469432:web:747d13a3fd93ea06a2cf0d",
    measurementId: "G-YV2FQ2PTWF"
  };
   firebase.initializeApp (firebaseConfig);
  export default firebase;