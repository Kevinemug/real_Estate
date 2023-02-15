import React, { Component } from "react";
import Card from "./card";
import Grid from "./grid";
import DropDown from "./dropDown";
import Button from "./button";
import Fade from "react-awesome-reveal";

import Input from "./input";
import PropertyGrid from "./propertyGrid";
const OurProperties = () => {
  return (
    <div className="ourProperties">
      <div className="drops">{/* <Input /> */}</div>
      <PropertyGrid />
      <div className="cards">
        <div className="cardContainer">
          <Fade left>
            <Card
              label="$7,800,000"
              bed="6"
              bath="13"
              sq="9,125"
              calendar="1 YEAR AGO"
              image="https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/0.jpg"
            />
          </Fade>
          <Fade right>
            <Card
              label="$4,980,000"
              bed="6"
              bath="8"
              sq="7,380"
              calendar="6 MONTHS AGO"
              image="https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/6.jpg"
            />
          </Fade>
          <Fade left>
            <Card
              label="$2,900,000"
              bed="5"
              bath="4"
              sq="4,406"
              calendar="9 MONTHS AGO"
              image="https://d37ukvrrv3in12.cloudfront.net/listings/67e261f0-e00a-4b44-a981-73e1901e42a9/xl/1.jpg"
            />
          </Fade>
        </div>
        <div className="cardContainer">
          <Fade right>
            <Card
              label="$3,320,000"
              bed="5"
              bath="5"
              sq="3,990"
              calendar="3 MONTHS AGO"
              image="https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/1.jpg"
            />
            <Card
              label="$3,320,000"
              bed="5"
              bath="5"
              sq="3,990"
              calendar="2 YEARS AGO"
              image="https://d37ukvrrv3in12.cloudfront.net/listings/7ad6d1b4-b42b-4f37-a34b-21dfb0837faf/xl/7.jpg"
            />
          </Fade>
          <Fade left>
            <Card
              label="$3,320,000"
              bed="5"
              bath="5"
              sq="3,990"
              calendar="2 DAYS AGO"
              image="https://d37ukvrrv3in12.cloudfront.net/listings/ade198b0-743a-4386-bc48-6fb1142903ea/xl/2.jpg"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default OurProperties;
