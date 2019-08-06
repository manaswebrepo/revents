import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2R5OJkMbENQRgHfspA_ZMThmzGP2lEcY",
  authDomain: "revents-248603.firebaseapp.com",
  databaseURL: "https://revents-248603.firebaseio.com",
  projectId: "revents-248603",
  storageBucket: "revents-248603.appspot.com",
  messagingSenderId: "499488110759",
  appId: "1:499488110759:web:c2a6c8b6508170cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
