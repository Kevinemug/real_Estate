import React, { Component } from "react";
const Details = ({ left, right }) => {
  return (
    <>
      <div className="detailsGrid">
        <div>
          <p className="detailsStyles">{left}</p>
        </div>
        <div>
          <p className="detailsStyles">{right}</p>
        </div>
      </div>
      <hr style={{ marginTop: "-12px" }} />
    </>
  );
};

export default Details;
