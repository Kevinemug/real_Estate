import React, { Component } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AccountLogin } from "./accountLogin";
import { useState } from "react";

const Navigation = () => {
  const [loginPopup, setLoginPopup] = useState(false);

  const DisplayLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

  return (
    <div className="navContainer">
      <div>
        <img
          className="navimg"
          src="https://elementor1.contempothemes.com/wp-content/uploads/2020/10/blair-owens-logo@2x-1.png"
          alt=""
        />
      </div>

      <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a class="nav-link " href="/ourProperties">
                  Our properties <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/mlsSearch">
                  MLS Search
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/communities">
                  Communities
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/news">
                  News
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/aboutBlair">
                  About Blair
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="accountIcon">
        <RiAccountCircleLine onClick={DisplayLoginPopup} />
      </div>
      {loginPopup ? <AccountLogin /> : null}
    </div>
  );
};

export default Navigation;
