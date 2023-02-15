import React, { Component } from "react";
const DashboardLink = ({ icon, link }) => {
  return (
    <>
      <div className="dashLinkContainer">
        <div className="iconLink">{icon}</div>

        <div className="linkDesription">
          <p style={{ color: "#595959", fontWeight: "bold" }}>{link}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default DashboardLink;
