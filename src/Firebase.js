import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHMjFNiAEhrAD-WhV1sw05ZuaNKeb21G4",
    authDomain: "onlinepay-1b119.firebaseapp.com",
    databaseURL: "https://onlinepay-1b119-default-rtdb.firebaseio.com",
    projectId: "onlinepay-1b119",
    storageBucket: "onlinepay-1b119.appspot.com",
    messagingSenderId: "116753649803",
    appId: "1:116753649803:web:c172f794fe2a1a84bf848e"
});

var db = firebaseApp.firestore();

export { db };