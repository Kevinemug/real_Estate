import React from "react";
import { useState } from "react";
import { AccountSignUp } from "./accountSignUp";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OurProperties from "./ourProperties";
import axios from "axios";

export const AccountLogin = () => {
  const [closePopup, setClosePopup] = useState(false);
  const [loginPopup, setSignInPopup] = useState(false);

  const displaySignUp = () => {
    setSignInPopup(!loginPopup);
  };

  const CloseMe = () => {
    setClosePopup(!closePopup);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("https://brandapi.onrender.com/api/auth/login", {
        username,
        password,
      })
      .then((response) => {
        // handle successful login
        console.log(response.data);
        const user = response.data;
        console.log(user);
        if (user.role === "Admin") {
          alert("you have successfully logged in as admin");
          navigate("/dashboard/dash");
        } else {
          alert("you have successfully logged in as a client");

          navigate("/contact");
        }
      })
      .catch((error) => {
        // handle login error
        console.error(error);
      });
  };

  return (
    <div
      className={`login__popup--container ${
        closePopup ? "login__popup--remove" : ""
      }`}
    >
      <div className="login__popup--overlay"></div>
      <div className="login__popup--content">
        <div className="login__popup--button">
          <button onClick={CloseMe} type="button" className="cancel--button">
            X
          </button>
        </div>
        <div className="login__popup--header">
          <h1>Login</h1>
          <p>
            Don't have an account?{" "}
            <span onClick={displaySignUp}>
              <a href="#">Create your account</a>
            </span>
            , it takes less than a minute.
          </p>
        </div>
        <form action="" className="login__popup--form" onSubmit={handleLogin}>
          <div className="popup__form--name">
            <label htmlFor="name__input">Username (use: agent)</label>
            <input
              type="text"
              id="name__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )} */}
          <div className="popup__form--password">
            <label htmlFor="password__input">Password (use: agent)</label>
            <input
              type="password"
              id="password__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )} */}
          <button
            className="login__submit--btn"
            style={{ backgroundColor: "#011640" }}
          >
            Login
          </button>
          <hr />
          <div className="login__options">
            <button
              className="facebook__login"
              style={{ backgroundColor: "#1877F2" }}
            >
              <p>LOGIN WITH FACEBOOK</p>
            </button>
            <button
              className="google__login"
              style={{ backgroundColor: "#C63D2D" }}
            >
              <p>LOGIN WITH GOOGLE</p>
            </button>
            <button className="lostPassword--btn">Lost your password?</button>
          </div>
        </form>
      </div>
      {loginPopup ? <AccountSignUp /> : null}
    </div>
  );
};
