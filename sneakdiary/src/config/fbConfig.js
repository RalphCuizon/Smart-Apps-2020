import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyDHWDD1W4qq4b6lLJVSeVB38UYqN5gBdSs",
    authDomain: "sneakdiary.firebaseapp.com",
    projectId: "sneakdiary",
    storageBucket: "sneakdiary.appspot.com",
    messagingSenderId: "796706963848",
    appId: "1:796706963848:web:cd7a12b98f54fd0fc5ba3d",
    measurementId: "G-RKGBVTLV4B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  firebase.firestore().enablePersistence()
  .catch(function(err) {
    if (err.code === 'failed-precondition') {
      console.log('persistance failed');
    } else if (err.code === 'unimplemented') {
      console.log('persistance not available');
    }
  });

  export default firebase;