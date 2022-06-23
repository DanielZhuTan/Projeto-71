import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
      apiKey: "AIzaSyBScVEVjarfklNq-uBJi4GhZeV-hTi4psk",
      authDomain: "projeto-71-a0e6a.firebaseapp.com",
      projectId: "projeto-71-a0e6a",
      storageBucket: "projeto-71-a0e6a.appspot.com",
      messagingSenderId: "822717942788",
      appId: "1:822717942788:web:b5c5a428da8f0f31cdb951"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
