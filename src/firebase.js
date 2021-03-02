import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDx_bJP-7B4pyiEOac03ZoVl-yJdeR1Zb0",
    authDomain: "slack-kraig.firebaseapp.com",
    projectId: "slack-kraig",
    storageBucket: "slack-kraig.appspot.com",
    messagingSenderId: "26087505519",
    appId: "1:26087505519:web:7fc3782b8b2112f48ad79a"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
 export const db= firebaseApp.firestore()
  const auth=firebase.auth;


