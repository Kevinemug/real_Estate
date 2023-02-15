import React, { Component } from "react";

const CardImage = ({ image }) => {
  return (
    <div class="card text-white">
      <div
        className="card-image"
        style={{
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "370px",
          width:"440px"
        }}
      >
        
      </div>
      <div class="card-img-overlay">
        <h5 class="ct">Card title</h5>
        <p class="card-text cp">
         sprawling estrates
        </p>
      </div>
    </div>
  );
};

export default CardImage;
