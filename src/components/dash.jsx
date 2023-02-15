import React, { Component } from "react";
import DashCards from "./dashcards";
import { BsGraphDown } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import Fade from "react-awesome-reveal";

import { FaRegCommentDots } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";
import DashHeader from "./dashHeader";
import LastActivities from "./lastActivities";
import { BsCheck } from "react-icons/bs";
import { GoComment } from "react-icons/go";

const Dash = () => {
  return (
    <>
      <div className="grid-container">
        <Fade left>
          <DashCards
            active="Active Listings"
            number="124"
            numbers="+356"
            icon={<BsGraphDown className="iconDash" />}
          />
        </Fade>
        <Fade left>
          <DashCards
            active="Listing Views"
            number="1056"
            numbers="+12"
            icon={<GoGraph className="iconDash" />}
          />
        </Fade>
        <Fade left>
          <DashCards
            active=" Your Reviews"
            number="357"
            numbers="+234"
            icon={<FaRegCommentDots className="iconDash" />}
          />
        </Fade>
        <Fade left>
          <DashCards
            active="Times BookMarked"
            number="2329"
            numbers="+14"
            icon={<BsSuitHeart className="iconDash" />}
          />
        </Fade>
      </div>
      <Fade right>
        <DashHeader />
      </Fade>
      <div className="lastActiviesContainer">
        <Fade right>
          <LastActivities icon={<BsCheck />} bold=" Urban Apartment" />
          <LastActivities icon={<GoComment />} bold=" Park Central" />
          <LastActivities icon={<BsSuitHeart />} bold=" Holiday Home" />
        </Fade>
      </div>
    </>
  );
};

export default Dash;
