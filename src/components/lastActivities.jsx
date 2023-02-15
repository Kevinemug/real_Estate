import React, { Component } from "react";
import { IoIosClose } from "react-icons/io";
const LastActivities = ({ icon, paragraph, bold }) => {
  return (
    <>
      <div className="lastActivityAparent">
        <div className="firstGrid">
          <div className="stIcon">{icon}</div>
          <div>
            <p className="hove">
              Your listing
              <span className="hovei">
                {" "}
                {""}
                {bold}{" "}
              </span>{" "}
              has been approved
            </p>
          </div>
        </div>

        <div className="secondGrid">
          <div>
            <p className="hove">28 may 2020</p>
          </div>
          <div className="ndIcon">
            <IoIosClose style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LastActivities;
