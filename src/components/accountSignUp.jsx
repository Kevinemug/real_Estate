import React from "react";
import { useState } from "react";

export const AccountSignUp = () => {
  const [closePopup, setClosePopup] = useState(false);

  const CloseMe = () => {
    setClosePopup(!closePopup);
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
        <form action="" className="login__popup--form">
          <div className="popup__form--name">
            <label htmlFor="name__input">Username </label>
            <input type="text" id="name__input" />
          </div>
          <div className="popup__form--password">
            <label htmlFor="password__input">Email</label>
            <input type="text" id="password__input" />
          </div>
          <div className="popup__form--password">
            <label htmlFor="password__input">Password</label>
            <input type="password" id="password__input" />
          </div>
          <div className="popup__form--password">
            <label htmlFor="password__input">Password Again</label>
            <input type="password" id="password__input" />
          </div>
          <button className="login__submit--btn">Register</button>
        </form>
      </div>
    </div>
  );
};
