import React, { useContext } from 'react'
import { Context } from "../index"

import firebase from 'firebase/compat/app';

export default function Login() {
    const {auth} = useContext(Context)
    const loginCheck = async ()=>{
      const provider =new firebase.auth.GoogleAuthProvider();
      const {user}= await auth.signInWithPopup(provider)
      console.log(user._delegate.displayName);
    }
    // console.log(auth);
    return (
    <div>
      <button onClick={loginCheck}>Login</button>
    </div>
  )
}
