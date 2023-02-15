import React, { Component } from "react";
const DashCards = ({ active, number, numbers, icon }) => {
  return (
    <>
      <div className="dashParent">
        <div className="dashCardParagraphs">
          <div>
            <p className="dashActive">{active}</p>
          </div>
          <div>
            <div className="flexx">
              <p className="dashNumber">{number}</p>
              <span className="dashCardSubPragraph">
                {"("}
                <span className="threeSixtyFive">
                  {numbers}
                  {"   "}
                </span>
                this week{")"}
              </span>
            </div>
          </div>
        </div>
        <div className="dashCardIcon">{icon}</div>
      </div>
    </>
  );
};

export default DashCards;
