import React, { Component } from 'react';
import CardImage from './cardImage'
import Navigation from "./navigation";

const Landing = () => {
  return (
    <div>
      <Navigation />

      <div className="landing">
        <div className="container">
          <div className="row">
            <div className="col" style={{ height: "500px" }}>
              <p style={{ color: "gray", background: "transparent" }}>
                Luxury Real Estate
              </p>
              <p
                style={{
                  fontSize: "50px",
                  color: "rgba(2,2,51)",
                  lineHeight: "1.5",
                  fontFamily: ' "Montserrat", Sans-serif;',
                }}
              >
                IT'S TIME TO FIND YOUR LUXURY HOME
              </p>
              <p style={{ color: "gray", background: "transparent" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo iusto tenetur commodi pariatur magnam molestiae
                consequatur doloribus blanditiis fuga perspiciatis.
              </p>
            </div>
            <div
              className="col colimg"
              style={{
                background: `url("https://elementor1.contempothemes.com/wp-content/uploads/2020/12/2-1.jpg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "500px",
              }}
            ></div>
          </div>
        </div>

        <div className="cont">
          <div class="container">
            <div
              class="row"
              style={{ background: "rgb(20, 20, 90)", height: "150px" }}
            >
              <div class="col">
                <p style={{ fontSize: "30px", color: "white" }}>
                  We Offer The Highest Level Of Expertise, Service, And
                  Integrity.
                </p>
              </div>
              <div class="col">
                <p style={{ fontSize: "10px", color: "white" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  necessitatibus?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Enim, necessitatibus?
                </p>
              </div>
            </div>
          </div>

          <div className="cardContainer">
            <CardImage image="https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/6.jpg" />
            <CardImage image="https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/30.jpg" />
            <CardImage image="https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/3.jpg" />
          </div>
          <div className="cardContainer">
            <CardImage image="https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/9.jpg" />
            <CardImage image="https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/10.jpg" />
            <CardImage image="https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/12.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Landing;