import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccountLogin } from "./accountLogin";
import axios from "axios";

export const AccountSignUp = () => {
  const [closePopup, setClosePopup] = useState(false);

  const CloseMe = () => {
    setClosePopup(!closePopup);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    axios
      .post("https://brandapi.onrender.com/api/auth/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        // handle successful registration
        console.log(response.data);
        alert(
          "You have successfully Registered to Blair owens,you can Know Login"
        );
      })
      .catch((error) => {
        // handle registration error
        console.error(error);
      });
  };
  const handleSign = () => {
    navigate("/contact");
  };
  return (
    <div
      className={`login__popup--container ${
        closePopup ? "login__popup--remove" : ""
      }`}
    >
      <div className="login__popup--overlay"></div>
      <div className="login__popup--content sign">
        <div className="login__popup--button">
          <button onClick={CloseMe} type="button" className="cancel--button">
            X
          </button>
        </div>
        <div className="login__popup--header">
          <h1>Sign Up</h1>
          <p>
            It takes less than a minute. If you already have an account{" "}
            <span>
              <a href="#">login</a>
            </span>
          </p>
        </div>
        <form
          action=""
          className="login__popup--form"
          onSubmit={handleRegister}
        >
          <div className="popup__form--name">
            <label htmlFor="name__input">Username </label>
            <input
              type="text"
              id="name__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="popup__form--password">
            <label htmlFor="password__input">Email</label>
            <input
              type="text"
              id="password__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="popup__form--password">
            <label htmlFor="password__input">Password</label>
            <input
              type="password"
              id="password__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="popup__form--password">
            <label htmlFor="password__input">Password Again</label>
            <input
              type="password"
              id="password__input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="login__submit--btn"
            onClick={handleSign}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
