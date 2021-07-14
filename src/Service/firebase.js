import firebase from "firebase";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyB2jnnxmfkWee9GUYXgwO-A3e5qnkywPLg",
  authDomain: "casalimpa-e1fca.firebaseapp.com",
  projectId: "casalimpa-e1fca",
  storageBucket: "casalimpa-e1fca.appspot.com",
  messagingSenderId: "1090198646474",
  appId: "1:1090198646474:web:07d0366c6d4461a3a30e33",
  
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
