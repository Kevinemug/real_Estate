import React, { Component } from "react";
import PropertyDetails from "./propertyDetails";
const PropertyDescription = () => {
  return (
    <>
      <div className="parent">
        <div className="propertyHeader">
          <div className="leftHeader">
            <p className="leftParagraphUp">5528 La Crescenta</p>
            <p className="leftParagraphDown">Rancho Santa Fe, CA 92067</p>
          </div>
          <div className="rightHeader">
            <button type="button" className="btn btn-dark btn-sm">
              {" "}
              For sale
            </button>
            <p className="rightParagraphUp">$7,800,000</p>
            <p className="rightParagraphDown">Est. Payment $44,583/mo</p>
          </div>
        </div>
        <div className="propertyImage">
          <img
            className="propertyCover"
            src="https://elementor1.contempothemes.com/wp-content/uploads/2017/05/2.jpg"
            alt=""
          />
          <div>
            <div className="sideImages">
              <div>
                <img
                  className="sideUp"
                  src="https://elementor1.contempothemes.com/wp-content/uploads/2017/05/3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="sideDown"
                  src="https://elementor1.contempothemes.com/wp-content/uploads/2017/05/4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PropertyDetails />
    </>
  );
};

export default PropertyDescription;
