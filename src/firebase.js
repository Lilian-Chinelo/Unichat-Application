import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCuFsDUFaNNRcSDRmt8eCZTMOIQKvDSphU",
    authDomain: "unichat-4ae20.firebaseapp.com",
    projectId: "unichat-4ae20",
    storageBucket: "unichat-4ae20.appspot.com",
    messagingSenderId: "443815408151",
    appId: "1:443815408151:web:deac478181b173047e2252"
  }).auth();

  export default auth;