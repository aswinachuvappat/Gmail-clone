import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAaiAX_8ufM7PrUBfVg5jLRqqNRz6ONUew",
    authDomain: "clone-c01ab.firebaseapp.com",
    projectId: "clone-c01ab",
    storageBucket: "clone-c01ab.appspot.com",
    messagingSenderId: "288228885562",
    appId: "1:288228885562:web:9d454727e44acc700ee103"
  };



  

  const firebaseApp = firebase.initiallizeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export {db} 



