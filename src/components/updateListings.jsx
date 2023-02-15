import React, { Component, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Navigate } from "react-router-dom";
const UpdateListings = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // Perform login logic here, for example using API calls
    setIsClicked(true);
  };

  if (isClicked) {
    return <Navigate to="/dashboard/addBlogs" />;
  }
  return (
    <>
      <div className="updateListingParent">
        <div className="leftUpdate">
          <input type="text" placeholder="Search" className="inputdashbox" />
          <div>
            <BsSearch
              style={{
                color: "#6291fd",
                fontWeight: "bold",
                marginTop: "3px",
                marginLeft: "-40px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className="rightUpdate">
          <div className="sortUpdate">
            <p className="sortUpdt">Sort by:</p>
          </div>
          <div className="selectUpdate">
            <select id="fruits" name="fruits" className="selectupdt">
              <option value="apple">Name: {""} A-z</option>
              <option value="banana">Orders</option>
              <option value="orange">Latest</option>
              <option value="pear">Most Searched</option>
            </select>
          </div>
          <div className="addUpdate">
            <button className="btn btn-primary addbtn" onClick={handleClick}>
              Add New {""} {"+"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateListings;
