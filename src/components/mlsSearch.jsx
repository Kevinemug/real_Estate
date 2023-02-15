import React, { Component } from "react";
import Navigation from "./navigation";
import Card from "./card";
import DropDown from "./dropDown";
import Button from "./button";
import Input from "./input";

const MlsSearch = () => {
  return (
    <div class="containerr">
      <div className="drops">
        <Input />
      </div>

      <div class="row">
        <div class="col">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="702"
                height="654"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=k&z=9&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              />
              <a href="https://fmovies-online.net">fmovies</a>
              <br />
              <style>
                {`.mapouter{position:relative;text-align:right;height:654px;width:702px;}`}
              </style>
              <a href="https://www.embedgooglemap.net"></a>
              <style>
                {`.gmap_canvas {overflow:hidden;background:none!important;height:654px;width:702px;}`}
              </style>
            </div>
          </div>
        </div>
        <div class="col">
          <p className="paramap">
            <strong>Searching</strong> For Sale, Cardiff, Carlsbad, Del Mar, La
            Jolla, North Park San Diego, Ramona, Rancho Santa Fe
          </p>
          <Card
            label="$7,800,000"
            bed="6"
            bath="13"
            sq="9,125"
            calendar="1 YEAR AGO"
            image="https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/0.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default MlsSearch;
