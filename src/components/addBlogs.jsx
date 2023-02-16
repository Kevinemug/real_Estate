import React, { useState } from "react";
import axios from "axios";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import { BsCloudUpload } from "react-icons/bs";
import Fade from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

export const AddBlogs = () => {
  //   const { token } = useSelector((state) => state.auth);
  const [province, setProvince] = useState("");
  const [district, setdistrict] = useState("");
  const [street, setstreet] = useState("");
  const [price, setprice] = useState(0);
  const [beds, setbeds] = useState(0);
  const [description, setdescription] = useState("");
  const [bath, setbath] = useState(0);
  const [LotSize, setLotSize] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleAddBlog = (e) => {
    e.preventDefault();
    alert(
      "The post is going to be visible by clients of this website,are you sure you want to post?"
    );
    const data = {
      province,
      district,
      street,
      beds,
      bath: bath,
      price,
      images: image,
      description,
      LotSize: LotSize,
      status,
    };
    onSendPost(data);
  };
  function onSendPost(data) {
    let formData = new FormData();
    Object.keys(data).forEach(function (key) {
      formData.append(key, data[key]);
    });

    fetch("https://servapi-2191.onrender.com/api/estates", {
      method: "POST",
      body: formData,
    })
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        navigate("/dashboard/myListings");
      });
  }

  return (
    <div>
      <ul
        class="nav nav-pills mb-3 "
        id="pills-tab"
        role="tablist"
        style={{
          marginLeft: "500px",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <li class="nav-item">
          <a
            class="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#location"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Location
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Estate Details
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            id="pills-contact-tab"
            data-toggle="pill"
            href="#estateMedia"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Media
          </a>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          ...
        </div>
      </div>

      <Fade right>
        <form className="addblogsForm" onSubmit={handleAddBlog}>
          <div className="locationSection">
            <h3 className="basicInfo">
              {" "}
              <AiOutlineInfoCircle /> <br />
              <br />
              Location Information
            </h3>
            <hr />
            <Fade left>
              <section className="estateLocation" id="location">
                <div className="province">
                  <label>Province</label>
                  <input
                    type={"text"}
                    onChange={(e) => setProvince(e.target.value)}
                  />
                </div>
                <div className="district">
                  <label>District</label>
                  <input
                    type={"text"}
                    onChange={(e) => setdistrict(e.target.value)}
                  />
                </div>
                <div className="street">
                  <label>Street</label>
                  <input
                    type={"text"}
                    onChange={(e) => setstreet(e.target.value)}
                  />
                </div>
              </section>
            </Fade>
          </div>
          <div className="locationSection details">
            <h3 className="basicInfo">
              {" "}
              <MdOutlineRealEstateAgent /> <br />
              <br />
              Estate Details
            </h3>
            <hr />
            <Fade left>
              <section className="estateDetails" id="details">
                <div>
                  <label>Price</label>
                  <input
                    type={"text"}
                    onChange={(e) => setprice(e.target.value)}
                  />
                </div>
                <div>
                  <label>Beds</label>
                  <input
                    type={"text"}
                    onChange={(e) => setbeds(e.target.value)}
                  />
                </div>
                <div>
                  <label>description</label>
                  <input
                    type={"text"}
                    onChange={(e) => setdescription(e.target.value)}
                  />
                </div>
                <div>
                  <label>bath</label>
                  <input
                    type={"text"}
                    onChange={(e) => setbath(e.target.value)}
                  />
                </div>
                <div>
                  <label>lotSize</label>
                  <input
                    type={"text"}
                    onChange={(e) => setLotSize(e.target.value)}
                  />
                </div>
                <div>
                  <label>status</label>
                  <input
                    type={"text"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
              </section>
            </Fade>
          </div>
          <div className="locationSection">
            <h3 className="basicInfo">
              {" "}
              <BsUpload /> <br />
              <br />
              Upload Estate Image
            </h3>
            <hr />
            <Fade left>
              <section id="estateMedia">
                <label htmlFor="">
                  <BsCloudUpload className="cloudUp" />
                </label>
                <input
                  className="fileEstate"
                  type={"file"}
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </section>
            </Fade>
          </div>
          <Fade left>
            <button
              className=" btn btn-primary btn-lg"
              style={{ marginLeft: "10px" }}
              onClick={(e) => handleAddBlog(e)}
            >
              Add Estate
            </button>
          </Fade>
        </form>
      </Fade>
    </div>
  );
};
