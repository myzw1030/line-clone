import React, { useState } from 'react'
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const SendMessage = () => {
  const [message, setMessages] = useState("");
  function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessages("");
  }

  return (
    <>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <Input style={{
            width: "78%",
            fontSize: "15px",
            fontWeight: "550",
            marginLeft: "5px",
            marginBottom: "-3px",
          }} placeholder='メッセージを入力してください' type="text" onChange={(e) => setMessages(e.target.value)} value={message} />
          <SendIcon />
        </div>
      </form>
    </>
  )
}
