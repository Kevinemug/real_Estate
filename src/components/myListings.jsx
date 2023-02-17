import React, { Component } from "react";
import ListingCards from "./listingCards";
import UpdateListings from "./updateListings";
import Fade from "react-awesome-reveal";
import axios from "axios";
import { useState, useEffect } from "react";

const MyListings = () => {
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
        {listings.map((item) => {
          return (
            <Fade left>
              <ListingCards
                image={item.images}
                paragraph={item.description}
                address={
                  item.location.province +
                  " " +
                  item.location.district +
                  " " +
                  item.location.street
                }
                views={0}
                id={item._id}
              />
            </Fade>
          );
        })}

      </div>
    </>
  );
};

export default MyListings;
