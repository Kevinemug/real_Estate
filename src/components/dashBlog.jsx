import React, { Component } from "react";
import BlogCards from "./blogCards";
import DropDown from "./dropDown";
import Input from "./input";
import Button from "./button";
import BlogBack from "./blogBack";
import axios from "axios";
import { useState, useEffect } from "react";
import Background from "./background";
const News = () => {
  const [email, setEmail] = useState("");
  const [blogs, setBlogs] = useState([]);
  console.log(blogs, "blogs");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios({
      method: "GET",
      url: "https://brandapi.onrender.com/api/posts/getAll",
    })
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="drops"></div>
      <BlogBack />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "20px",
          gap: "10px",
          marginTop: "10px",
          placeItems: "center stretch",
          marginLeft: "30px",
        }}
      >
        {blogs.map((item) => {
          return (
            <BlogCards
              headerImage={item.image}
              paragraph={item.title}
              description={item.desc}
            />
          );
        })}
      </div>

      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default News;
