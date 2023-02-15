import React, { Component } from "react";
import { MdOutlineClose } from "react-icons/md";
import dashpic from "./dashpic.PNG";
const DashHeader = () => {
  return (
    <>
      <div className="dashHeaderParent">
        <div>
          <span className="dashSpanHeader">
            Your listing{" "}
            <span style={{ color: "#eef5ff", fontWeight: "bold" }}>
              Family House in Brooklyn{" "}
            </span>{" "}
            has been approved
          </span>
        </div>
        <div>
          <MdOutlineClose style={{ color: "#f4fbff" }} />
        </div>
      </div>
      <img src={dashpic} style={{ marginLeft: "20px", marginTop: "40px" }} />
    </>
  );
};

export default DashHeader;
