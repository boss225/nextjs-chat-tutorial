import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";

const Auth = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context);
  const route = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-key": "0f91b7cb-9235-4ed9-882e-c29ef82b04d9" } }
      )
      .then((e) => route.push("/chats"));
  };

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJs Chat</div>
          <div className="input-container">
            <input
              placeholder="Email"
              type="email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Password"
              type="password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
