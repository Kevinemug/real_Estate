import React, { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Input = () => {
  return (
    <>
      <form className="form">
        <div>
          <input type={"text"} placeholder="Email" className="input" />
        </div>
        <div>
          <label for="cars"></label>
          <select name="status" className="boxes">
            <option value="volvo">All stutus</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label for="cars"></label>
          <select name="status" className="boxes">
            <option value="volvo">All Cities</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label for="cars"></label>
          <select name="status" className="boxes">
            <option value="volvo">All Zipcodes</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <button className="boxe1">Search</button>
        </div>
        <div>
          <button className="boxe2">More</button>
        </div>
      </form>
    </>
  );
};

export default Input;
