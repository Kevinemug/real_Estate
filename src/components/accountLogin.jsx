import React from "react";
import { useState } from "react";
import { AccountSignUp } from "./accountSignUp";
import { Navigate } from "react-router-dom";

export const AccountLogin = () => {
  const [closePopup, setClosePopup] = useState(false);
  const [loginPopup, setSignInPopup] = useState(false);

  const displaySignUp = () => {
    setSignInPopup(!loginPopup);
  };

  const CloseMe = () => {
    setClosePopup(!closePopup);
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function validatePassword(password) {
    // Add your password validation here
    // For example, you can check if the password is at least 8 characters long
    return password.length >= 4;
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email) && !validatePassword(password)) {
      setError("Incorrect credentials");
    } else {
      setError("");
      // Submit the email address
      setIsLoggedIn(true);
    }

    // Perform login logic here, for example using API calls
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard/ourProperties" />;
  }

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
        <form action="" className="login__popup--form">
          <div className="popup__form--name">
            <label htmlFor="name__input">Email (use: agent)</label>
            <input
              type="text"
              id="name__input"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="popup__form--password">
            <label htmlFor="password__input">Password (use: agent)</label>
            <input
              type="password"
              id="password__input"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button
            className="login__submit--btn"
            style={{ backgroundColor: "#011640" }}
            onClick={handleLogin}
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
