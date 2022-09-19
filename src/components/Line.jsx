import React, { useEffect, useState } from 'react';
import { SignOut } from './SignOut';
import { SendMessage } from "./SendMessage";
import { db, auth } from "../firebase.js";

export const Line = () => {
  // firebaseで作成したmessageの変数を格納する
  const [messages, setMessages] = useState([]);
  // 第二引数に[]を入れると初回のレンダリング時にした時1回のみ
  useEffect(() => {
    // データベースにアクセスしてメッセージを受け取る
    db.collection("messages")
      // 最新の作成順に並び替える
      .orderBy("createdAt")
      // 最大限に表示したい数
      .limit(50)
      // いろんなデータを取得
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <>
      <SignOut />
      <div className='msgs'>
        {messages.map(({ id, text, photoURL, uid, }) => (
          <div>
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </>
  )
}
