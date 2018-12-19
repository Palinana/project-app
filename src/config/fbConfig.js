import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAtmEgvo_6C7K_LSdgUUydp2zLVJpoD7jY",
    authDomain: "project-app-74cae.firebaseapp.com",
    databaseURL: "https://project-app-74cae.firebaseio.com",
    projectId: "project-app-74cae",
    storageBucket: "",
    messagingSenderId: "489514955630"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase ;