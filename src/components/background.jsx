import React, { Component } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import Related from "./related";
import "./news";
const Background = () => {
  return (
    <>
      <div
        className="background"
        style={{
          background: `url("https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-9-1.jpg")`,
          filter: "brightness(90%)",

          objectFit: "cover",
        }}
      >
        <div>
          <img
            src="https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg
                    "
            alt=""
            className="bodyImage"
            style={{
              margin: "300px",
              marginLeft: "600px",
              marginTop: "200px",
            }}
          />
          <p className="newDevp">
            New Development: The Crosby Estates At Rancho Sante Fe
          </p>
        </div>
        <div className="readmoredsc">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            quam dicta quasi sit impedit quae nihil blanditiis eveniet eos
            distinctio.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            aperiam dicta cumque libero doloribus id optio eaque enim eum
            aliquid dolore deserunt quo modi repellat temporibus minus debitis
            sit impedit quae adipisci odio, nisi unde. Iure dolores reiciendis
            ipsa doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            labore veritatis ipsam modi, sint ad. Voluptas quas nisi doloremque
            laudantium atque asperiores numquam minus sapiente dolore nostrum
            cupiditate incidunt ducimus, esse possimus quo voluptatem
            voluptatum, magnam molestiae animi? Consequuntur, repellendus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            quaerat rerum commodi dolor cum molestias soluta officia quia optio
            eius assumenda earum, similique debitis reiciendis nobis tempora
            illum quo, consectetur, voluptas mollitia error iusto vel atque
            beatae. Deleniti, eos voluptas?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
            reprehenderit qui sint, voluptatibus, optio et voluptas nihil fugiat
            magnam earum enim porro eaque facere atque eligendi sunt aliquid
            quos rerum, corporis molestiae vel culpa quaerat itaque. Dolor,
            quasi distinctio?
          </p>
        </div>

        <p
          style={{
            color: "grey",
            marginLeft: "300px",
            fontSize: "10px",
            marginTop: "20px",
          }}
        >
          share this
        </p>
        <div className="blogIcons">
          <div className="bicon">
            <FaFacebookF />
          </div>
          <div className="bicon">
            <FaTwitter />
          </div>
          <div className="bicon">
            <TfiLinkedin />
          </div>
        </div>
        <p style={{ color: "gray", fontWeight: "bolder", marginLeft: "400px" }}>
          _______________________________________________________________________________
        </p>
        <p
          style={{
            color: "grey",
            marginLeft: "300px",
            fontSize: "10px",
            marginTop: "20px",
          }}
        >
          Related posts
        </p>

        <div className="rels">
          <Related
            image="	https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-8-1-1536x967.jpg
"
            paragraph="Highrise Penthouse Living In Downtown San Diego"
          />
          <Related
            image="	https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-7-1-1536x967.jpg"
            paragraph="New Development: The Bluffs At La Jolla Shores"
          />
          <Related
            image="https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-6-1-1536x967.jpg
"
            paragraph="Why You Should Overlook Cosmetic Issues When House Hunting"
          />
        </div>
      </div>
    </>
  );
};

export default Background;
