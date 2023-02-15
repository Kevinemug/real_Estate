import React, { Component } from "react";
import ListingCards from "./listingCards";
import UpdateListings from "./updateListings";
import Fade from "react-awesome-reveal";
import axios from "axios";
import { useState, useEffect } from "react";

const MyListings = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs, "blogs");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios({
      method: "GET",
      url: "https://klabapi.onrender.com/api/posts",
    })
      .then((response) => {
        setBlogs(response.data);
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
            image="https://homeradar.kwst.net/images/all/3.jpg"
            paragraph="Family House For Rent"
            address="70 Bright St New York , USA "
            views={645}
          />
        </Fade>
        <Fade left>
          <ListingCards
            image="https://homeradar.kwst.net/images/all/1.jpg"
            paragraph="Kayak Point House"
            address="40 Journal Square , Nj , USA"
            views={56}
          />
        </Fade>
        <Fade left>
          <ListingCards
            image="https://homeradar.kwst.net/images/all/10.jpg"
            paragraph="Luxury Family Home"
            address="44-32 Montgomery St ,  NY , USA"
            views={300}
          />
        </Fade>
        <Fade left>
          <ListingCards
            image="https://homeradar.kwst.net/images/all/6.jpg"
            paragraph="Contemporary Apartment"
            address="75 Prince St ,  NY , USA"
            views={500}
          />
        </Fade>
        <Fade left>
          <ListingCards
            image="https://homeradar.kwst.net/images/all/2.jpg"
            paragraph="Urban House"
            address="70 Bright St , Jersy City , NJ USA"
            views={600}
          />
        </Fade>
        <Fade left>
          <ListingCards
            image="https://homeradar.kwst.net/images/all/9.jpg"
            paragraph="Gorgeous House For Sale"
            address="70 Bright St New York , USA "
            views={120}
          />
        </Fade>
      </div>
    </>
  );
};

export default MyListings;
