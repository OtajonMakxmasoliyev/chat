import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDzeX248fTHBykuLaNoI92yrC-xXF3vdoo",
  authDomain: "chattime-a6541.firebaseapp.com",
  projectId: "chattime-a6541",
  storageBucket: "chattime-a6541.appspot.com",
  messagingSenderId: "1048234455245",
  appId: "1:1048234455245:web:5f11a6c2108a5f7fbcf984",
  measurementId: "G-TR8HQGQRVL"
}
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const Context = createContext(null)
const auth = firebase.auth();
const firestore = firebase.firestore;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{firebase, firestore, auth}}>
    <App />
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
