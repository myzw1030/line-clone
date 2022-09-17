import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

export const SignIn = () => {
  const signInWithGoogle = () => {
    // Google認証プロバイダー
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <Button onClick={signInWithGoogle}>
        Googleでログインする
      </Button>
    </div>
  )
}
