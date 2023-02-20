import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import DashboardLink from "./dashboardLink";
import { RiDashboard3Line } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import Fade from "react-awesome-reveal";
import AboutBlair from "./communities";

const Dashboard = () => {
  return (
    <>
      <div className="dashboardContainer">
        <div className="dashFixedNav">
          <hr />
          <Fade up>
            {" "}
            <NavLink to="/dashboard/dash">
              <DashboardLink
                icon={<RiDashboard3Line className="iconLink" />}
                link="Dashboard"
              />
            </NavLink>
          </Fade>

          <Fade left>
            <NavLink to="/dashboard/ourProperties">
              <DashboardLink
                icon={<BiBuildingHouse className="iconLink" />}
                link="Our Properties"
              />
            </NavLink>
          </Fade>

          <Fade up>
            <NavLink to="/dashboard/news">
              <DashboardLink
                icon={<FaTelegram className="iconLink" />}
                link="News"
              />
            </NavLink>
          </Fade>

          <Fade up>
            {" "}
            <NavLink to="/dashboard/addBlogs">
              <DashboardLink
                icon={<IoMdAddCircle className="iconLink" />}
                link="Add Estate"
              />
            </NavLink>
          </Fade>

          <Fade up>
            {" "}
            <NavLink to="/dashboard/myListings">
              <DashboardLink
                icon={<BsCardChecklist className="iconLink" />}
                link="My Listings"
              />
            </NavLink>
          </Fade>

          <Fade up>
            {" "}
            <NavLink to="/dashboard/services">
              <DashboardLink
                icon={<MdOutlineDesignServices className="iconLink" />}
                link="Services"
              />
            </NavLink>
          </Fade>
          <Fade up>
            {" "}
            <NavLink to="/dashboard/services">
              <DashboardLink
                icon={<RiDashboard3Line className="iconLink" />}
                link="AboutBlair"
              />
            </NavLink>
          </Fade>
          <Fade up>
            {" "}
            <NavLink to="/dashboard/services">
              <DashboardLink
                icon={<RiDashboard3Line className="iconLink" />}
                link="Mls Search"
              />
            </NavLink>
          </Fade>
          <Fade up>
            {" "}
            <NavLink to="/dashboard/services">
              <DashboardLink
                icon={<RiDashboard3Line className="iconLink" />}
                link="Contact"
              />
            </NavLink>
          </Fade>
          <Fade up>
            {" "}
            <NavLink to="/dashboard/sk">
              <DashboardLink
                icon={
                  <RiDashboard3Line
                    className="iconLink"
                    style={{ color: "#3270fc" }}
                  />
                }
                link="User "
              />
            </NavLink>
          </Fade>
        </div>
        <div
          style={{
            background: "rgba(245,247,251,255)",
            height: "auto",
            overflow: "auto",
            width: "80%",
            marginLeft: "20%",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
