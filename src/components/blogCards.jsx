import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
const BlogCrads = ({ headerImage, paragraph, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // Perform login logic here, for example using API calls
    setIsClicked(true);
  };

  if (isClicked) {
    return <Navigate to="/dashboard/background" />;
  }
  return (
    <>
      <div className="blogContainer">
        <div className="co">
          <img src={headerImage} alt="" className="blogeimgeheader" />
        </div>

        <div className="blogBody">
          <div>
            <div className="blogcontent">
              <img
                src="https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg
                    "
                alt=""
                className="bodyImage"
              />
              <p>{paragraph}</p>
            </div>
            <p className="blogdesc">BY RILEY HARPER IN OUR BLOG</p>
          </div>
          <p className="paradesc">{description}</p>
        </div>
        <button className="readmore" onClick={handleClick}>
          READ MORE
        </button>
      </div>
    </>
  );
};

export default BlogCrads;
