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
import { updatePost } from "./updatePost";
import { NavLink } from "react-router-dom";

const ListingCards = ({ image, paragraph, address, views, id }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(paragraph);
  const [province, setUpdatedProvince] = useState("i");
  const [district, setUpdatedDistrict] = useState("j");
  const [street, setUpdatedStreet] = useState("j");
  const [price, setUpdatedPrice] = useState(0);
  const [beds, setUpdatedBeds] = useState(0);
  const [bath, setUpdatedBath] = useState(0);
  const [LotSize, setUpdatedLotSize] = useState("jk");
  const [status, setUpatedStatus] = useState("kkk");
  const [images, setUpdatedImage] = useState(image);

  const data = {
    province,
    District: district,
    street,
    beds,
    bath: bath,
    price,
    images,
    description: updatedText,
    LotSize: LotSize,
    status,
  };

  console.log(data);
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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedText(paragraph);
  };

  const handleSaveClick = () => {
    updatePost(id, data)
      .then(() => {
        setIsEditing(false);
        setUpdatedText(paragraph);
        setUpdatedPrice(899);
        setUpatedStatus("JU");
        setUpdatedBeds(0);
        setUpdatedLotSize("HJ");
        setUpdatedBath(9);
        setUpdatedProvince("io");
        setUpdatedDistrict("nn");
        setUpdatedStreet("jjj");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="listingCardParent">
        {isEditing ? (
          <>
            <input
              type="file"
              onChange={(e) => setUpdatedImage(e.target.files[0])}
            />
          </>
        ) : (
          <div className="listCardImage">
            <img src={image} style={{ height: "140px" }} />
          </div>
        )}

        <div className="listCardDetails">
          <div className="listCardDescription">
            {isEditing ? (
              <>
                <textarea
                  className="editInput"
                  value={updatedText}
                  onChange={(e) => setUpdatedText(e.target.value)}
                />

                <NavLink to="/dashboard/sk">
                  <button className="saveButton" onClick={handleSaveClick}>
                    Save
                  </button>
                </NavLink>

                <button className="cancelButton" onClick={handleCancelClick}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p className="listCardParagraph">{paragraph}</p>
              </>
            )}
          </div>
          <div className="listCardLocation">
            {isEditing ? (
              <>
                <textarea
                  className="editInput"
                  value={province}
                  onChange={(e) => {
                    setUpdatedProvince("j");
                    setUpdatedDistrict("fh");
                    setUpdatedStreet("kk");
                  }}
                />
                <button className="saveButton" onClick={handleSaveClick}>
                  Save
                </button>
                <button className="cancelButton" onClick={handleCancelClick}>
                  Cancel
                </button>
              </>
            ) : (
              <span>
                <MdLocationOn style={{ color: "#437cfc", fontSize: "20px" }} />
                <span className="ListCardSubParagraph">
                  {""} {address}
                </span>
              </span>
            )}
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
              <AiOutlineEdit
                style={{ color: "#487ffc" }}
                onClick={handleEditClick}
              />
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
