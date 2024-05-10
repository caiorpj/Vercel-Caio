import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAKuKXfB3RLSBsyFbB0VniTdXI5ipeg9K0",
  authDomain: "autenticar-61d1c.firebaseapp.com",
  projectId: "autenticar-61d1c",
  storageBucket: "autenticar-61d1c.appspot.com",
  messagingSenderId: "1075791935324",
  appId: "1:1075791935324:web:67e4a08fcc4a3cf71c3399",
  measurementId: "G-3P9K0JGHM8"
  databaseURL: "https://autenticar-61d1c-default-rtdb.firebaseio.com/";
};

// Inicialize o Firebase
// Delete o Firebase App existente, se existir
if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
