import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAKY1Qt2FRnUYtXLAI5FnMTTdDTbu0jvsE",
    authDomain: "ace-login-p3.firebaseapp.com",
    databaseURL: "https://ace-login-p3.firebaseio.com",
    projectId: "ace-login-p3",
    storageBucket: "ace-login-p3.appspot.com",
    messagingSenderId: "179884534038",
    appId: "1:179884534038:web:aa73f58444958c0f990837",
    measurementId: "G-3W8WGZYKHK"
});

export default app;