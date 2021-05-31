import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCXNyLAH554Iw8pOvbF_7xIl8CL_nZKhaw",
    authDomain: "my-chat-app-mdh.firebaseapp.com",
    projectId: "my-chat-app-mdh",
    storageBucket: "my-chat-app-mdh.appspot.com",
    messagingSenderId: "196952096109",
    appId: "1:196952096109:web:28c7d271c4301ed4a4ae64",
  })
  .auth();
