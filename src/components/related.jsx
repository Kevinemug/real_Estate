import React, { Component } from "react";
const Related = ({ image, paragraph }) => {
  return (
    <>
      <div>
        <img src={image} alt="" style={{ height: "180px", width: "220px" }} />
        <p style={{ marginTop: "5px", color: "grey" }}>{paragraph}</p>
        <p style={{ marginTop: "10px", fontSize: "10px", color: "grey" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
          repudiandae.
        </p>
      </div>
    </>
  );
};

export default Related;
