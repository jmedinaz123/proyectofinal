import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABFu-Z4CHl30Qfo68kpQoUWriQp0i7ZrU",
    authDomain: "pachaqtec-final.firebaseapp.com",
    databaseURL: "https://pachaqtec-final.firebaseio.com",
    projectId: "pachaqtec-final",
    storageBucket: "pachaqtec-final.appspot.com",
    messagingSenderId: "334076427634",
    appId: "1:334076427634:web:37df3557a8ec82285fb1eb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Firebase
const db = firebase.firestore();

export { db }
