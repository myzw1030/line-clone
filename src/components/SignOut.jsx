import React from 'react'
import { Button } from '@mui/material';
import { auth } from "../firebase.js";
import CallIcon from '@mui/icons-material/Call';

export const SignOut = () => {
  return (
    <>
      <div className='header'>
        <Button style={{ color: "white", fontSize: "15px" }} onClick={() => auth.signOut()}>
          サインアウト
        </Button>
        <h3>{auth.currentUser.displayName}</h3>
        <CallIcon />
      </div>
    </>
  )
}
