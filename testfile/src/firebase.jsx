// import *as firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//     apiKey: "AIzaSyBZOSX-PfwKDuT2ZrtVhLDI48XuTUNDXKg",
//     authDomain: "test-file-f8053.firebaseapp.com",
//     projectId: "test-file-f8053",
//     storageBucket: "test-file-f8053.appspot.com",
//     messagingSenderId: "998610097671",
//     appId: "1:998610097671:web:69e6a9befa87d6dee07ca2",
//     measurementId: "G-5VE32T2236"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   var auth = firebase.auth();
//   export {auth , firebase};


import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZOSX-PfwKDuT2ZrtVhLDI48XuTUNDXKg",
    authDomain: "test-file-f8053.firebaseapp.com",
    projectId: "test-file-f8053",
    storageBucket: "test-file-f8053.appspot.com",
    messagingSenderId: "998610097671",
    appId: "1:998610097671:web:69e6a9befa87d6dee07ca2",
    measurementId: "G-5VE32T2236"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};
