import React, { Component } from "react";
import ListingCards from "./listingCards";
import UpdateListings from "./updateListings";
import Fade from "react-awesome-reveal";
import axios from "axios";
import { useState, useEffect } from "react";
const Sk = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios({
      method: "GET",
      url: "https://servapi-2191.onrender.com/api/estates/getAll",
    })
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Fade right>
        <UpdateListings />
      </Fade>
      <div className="listingCardsContainer">
        <Fade left>
          <ListingCards
            image="https://homeradar.kwst.net/images/all/4.jpg"
            paragraph="apartment"
            address={"Kigali,Kacyiru KN 456"}
            views={0}
            // id={item._id}
          />
        </Fade>
        <Fade left>
          <ListingCards
            image="https://homeradar.kwst.net/images/all/6.jpg"
            paragraph="apartment in Rurindo"
            address={"Kigali,Kacyiru KN 456"}
            views={0}
            // id={item._id}
          />
        </Fade>
        <Fade left>
          <ListingCards
            image="https://homeradar.kwst.net/images/all/10.jpg"
            paragraph="apartment in Kigali"
            address={"Kigali,Kacyiru KN 456"}
            views={0}
            // id={item._id}
          />
        </Fade>
      </div>
    </>
  );
};

export default Sk;
