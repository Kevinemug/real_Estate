import React from "react";
import { useState } from "react";

export const CardImage = ({ Title, Paragraph }) => {
  const [hoverShadow, setHoverShadow] = useState(false);

  const ShadowDisplay = () => {
    setHoverShadow(!hoverShadow);
  };
  return (
    <div
      className={`HomeExprereinceCards__container ${
        hoverShadow ? "hoverShadow__display" : ""
      }`}
      onMouseEnter={ShadowDisplay}
      onMouseLeave={ShadowDisplay}
    >
      <h1>{Title}</h1>
      <p>{Paragraph}</p>
    </div>
  );
};
