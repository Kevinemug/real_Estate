import React, { Component } from 'react';
import { CardImage } from "./cardImage";
import Navigation from "./navigation";
import { HomeFeaturesCards } from "./hoverCards";
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
          <div className="intro__bottom">
            <h1>We offer Highest Level of Expertise, Service and Integrity</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae fugiat esse animi magnam iusto explicabo dolor
              consectetur, Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Odit numquam excepturi a veritatis, consequuntur quasi hic
              dolorem quia tempora? Recusandae cum eaque corrupti architecto!
              Quod corporis esse nemo tempora molestias. delectus deleniti, id
              voluptate exercitationem dolores magni nemo ratione facere rem
              reprehenderit. Sint.
            </h2>
          </div>

          <div className="cardContainer">
            <CardImage
              Title={"45 Years Of Experience"}
              Paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
              }
            />
            <CardImage
              Title={"$125 Billion In Sales"}
              Paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
              }
            />
            <CardImage
              Title={"Tailormade End-To-End Service"}
              Paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
              }
            />
          </div>
        </div>
        <div className="features__body--cards">
          <HomeFeaturesCards
            FeatureImage="https://homeradar.kwst.net/images/all/4.jpg"
            Title={"Rasheco Sante Fe"}
            SubTitle={"Sprawling Estates"}
          />
          <HomeFeaturesCards
            FeatureImage="https://homeradar.kwst.net/images/all/9.jpg"
            Title={"Rasheco Sante Fe"}
            SubTitle={"Sprawling Estates"}
          />
          <HomeFeaturesCards
            FeatureImage="https://homeradar.kwst.net/images/all/5.jpg"
            Title={"Rasheco Sante Fe"}
            SubTitle={"Sprawling Estates"}
          />
          <HomeFeaturesCards
            FeatureImage="https://homeradar.kwst.net/images/all/8.jpg"
            Title={"Rasheco Sante Fe"}
            SubTitle={"Sprawling Estates"}
          />
          <HomeFeaturesCards
            FeatureImage="https://homeradar.kwst.net/images/all/6.jpg"
            Title={"Rasheco Sante Fe"}
            SubTitle={"Sprawling Estates"}
          />
          <HomeFeaturesCards
            FeatureImage="https://homeradar.kwst.net/images/all/1.jpg"
            Title={"Rasheco Sante Fe"}
            SubTitle={"Sprawling Estates"}
          />
        </div>
      </div>
    </div>
  );
};
 
export default Landing;