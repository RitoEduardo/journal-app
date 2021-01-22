import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBWDj7IG68X1d3VBSd-FyJhckNE7zAd2ak",
    authDomain: "reactjournalapp-ab975.firebaseapp.com",
    projectId: "reactjournalapp-ab975",
    storageBucket: "reactjournalapp-ab975.appspot.com",
    messagingSenderId: "745464265179",
    appId: "1:745464265179:web:5593ecfe57701c26ea8ffe"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider;

export {
    db,
    googleAuthProvider,
    firebase
}