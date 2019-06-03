import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAgAdQ6NYIfQXKc_M0odEbB2luL1Zda9GY",
  authDomain: "todo-ninja-1b95b.firebaseapp.com",
  databaseURL: "https://todo-ninja-1b95b.firebaseio.com",
  projectId: "todo-ninja-1b95b",
  storageBucket: "todo-ninja-1b95b.appspot.com",
  messagingSenderId: "890984164614",
  appId: "1:890984164614:web:378d2a3c8b7cda12"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true })

export default db