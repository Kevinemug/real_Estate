import React, { Component } from "react";
import Details from "./details";
const PropertyDetails = () => {
  return (
    <>
      <div className="detailsContainer">
        <Details left="Price Pero Sq Ft" right="$890.56" />
        <Details left="Parking" right="Driveway" />
        <Details left="Year Built" right="2009" />
        <Details left="Community" right="The Grand Estates" />
        <Details left="Lot Size #" right="1.0 Acres" />
        <Details left="MLS  #" right="220013253" />
        <Details left="beds" right="9" />
        <Details left="bath" right="3" />
        <Details left="province" right="Kigali" />
        <Details left="district" right="Gasabo" />
      </div>
    </>
  );
};

export default PropertyDetails;
