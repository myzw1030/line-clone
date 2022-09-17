import React from "react";
import './App.css';
import { SignIn } from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import { Line } from "./components/Line";

export const App = () => {
  // ユーザー情報を変数に入れる
  const [user] = useAuthState(auth);

  // ユーザーがいるかどうか
  return (
    <>
      {user ? <Line /> : <SignIn />}
    </>
  );
}
