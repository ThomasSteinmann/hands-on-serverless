import firebase from "firebase";

// Web app Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0AQ2jwnGr9dqPdCaLDHbLFNs-_rhbnN8",
    authDomain: "hands-on-firebase-tse.firebaseapp.com",
    databaseURL: "https://hands-on-firebase-tse.firebaseio.com",
    projectId: "hands-on-firebase-tse",
    storageBucket: "hands-on-firebase-tse.appspot.com",
    messagingSenderId: "933724379771",
    appId: "1:933724379771:web:5db0d544db564ab03c20de"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// Import firebase using the following line:
// import firebase from "./firebaseConfig.js"