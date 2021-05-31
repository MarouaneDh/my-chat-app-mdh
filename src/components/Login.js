import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <img className="logo" alt="logo" src="logo.jpg" />
      <div id="login-card">
        <h2 style={{ padding: "0 100px 40px 100px", lineHeight: "40px" }}>
          Hello and welcome to your chat app
        </h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br />
        <br />
        {/* <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined /> Sign in with Facebook
        </div> */}
      </div>
    </div>
  );
};

export default Login;
