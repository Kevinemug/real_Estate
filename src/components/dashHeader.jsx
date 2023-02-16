import React, { Component } from "react";
import { MdOutlineClose } from "react-icons/md";
import dashpic from "./dashpic.PNG";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Bar } from "react-chartjs-2";

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

      <div
        style={{
          width: "50%",
          height: "50%",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          marginLeft: "100px",
          marginTop: "80px",
        }}
      >
        <Bar
          data={{
            labels: [
              "Gatenga",
              "Kimihurura",
              "Kacyiru",
              "Nyamirambo",
              "Mumujyi",
            ],
            datasets: [
              {
                label: "# of visits",
                data: [400, 300, 400, 500, 600],
                backgroundColor: [
                  "#144273",
                  "#c9eaef",
                  "#46b9a2",
                  "#54bcfa",
                  "#3270fc",
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default DashHeader;
