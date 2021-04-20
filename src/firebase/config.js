import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBtDBrcNIHWkCnM6sqPzfQ4l5tXWa-429U",
    authDomain: "smalawad-photogram-2eae5.firebaseapp.com",
    projectId: "smalawad-photogram-2eae5",
    storageBucket: "smalawad-photogram-2eae5.appspot.com",
    messagingSenderId: "68240943087",
    appId: "1:68240943087:web:5c1b8e37e3fb182676781a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const  projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};