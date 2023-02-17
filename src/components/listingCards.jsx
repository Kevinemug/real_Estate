import React, { Component, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { BiStar } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { deletePost } from "./deletePost";
import { useNavigate } from "react-router-dom";
import OurProperties from "./ourProperties";

const ListingCards = ({ image, paragraph, address, views, id }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleDeleteClick = () => {
    alert("are you sure you want to delete this post?");
    setIsDeleting(true);
    deletePost(id)
      .then(() => {
        console.log("Delete");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <>
      <div className="listingCardParent">
        <div className="listCardImage">
          <img src={image} style={{ height: "140px" }} />
        </div>
        <div className="listCardDetails">
          <div className="listCardDescription">
            <p className="listCardParagraph">{paragraph}</p>
          </div>
          <div className="listCardLocation">
            <span>
              <MdLocationOn style={{ color: "#437cfc", fontSize: "20px" }} />
              <span className="ListCardSubParagraph">
                {""} {address}
              </span>
            </span>
          </div>

          <div className="listCardRatings">
            <span>
              <AiFillStar style={{ color: "#f7cd46" }} />
              <AiFillStar style={{ color: "#f7cd46" }} />
              <AiFillStar style={{ color: "#f7cd46" }} />
              <AiOutlineStar style={{ color: "grey" }} />
            </span>
          </div>
          {/* <hr style={{ marginTop: "5px" }} /> */}
          <div className="listingCardActions">
            <div className="listingCardButton">
              <AiFillEye style={{ color: "#487ffc" }} />{" "}
              <span
                style={{
                  fontSize: "13px",
                  color: "#9499a8",
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                viewed - {views}
              </span>
            </div>
            <div className="listingCardButton">
              <AiOutlineEdit style={{ color: "#487ffc" }} />
            </div>
            <div className="listingCardButton">
              <GiNetworkBars style={{ color: "#487ffc" }} />
            </div>
            <div className="listingCardButton">
              {isDeleting ? (
                "Deleting..."
              ) : (
                <RiDeleteBinLine
                  style={{ color: "#487ffc" }}
                  onClick={handleDeleteClick}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingCards;
