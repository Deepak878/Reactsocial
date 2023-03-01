import React from "react";
import "./register.css";
import axios from "axios";

import { useContext, useRef } from "react";
import { useHistory } from "react-router";
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const HandleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Password don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("http://localhost:8800/api/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
    // await loginCall(
    //   { email: email.current.value, password: password.current.value },
    //   dispatch
    // );
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={HandleClick}>
            <input
              required
              placeholder="Username"
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              type="email"
              required
              ref={email}
              className="loginInput"
            />

            <input
              required
              placeholder="Password"
              type="password"
              minLength="6"
              ref={password}
              className="loginInput"
            />
            <input
              required
              placeholder="Password Again"
              type="password"
              ref={passwordAgain}
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
