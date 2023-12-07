import GaugeChart from "react-gauge-chart";
import { Doughnut } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import "./Dashboard.css";
import React, { useEffect, useRef, useState } from "react";
import { ArcElement } from "chart.js";
import { Chart as ChartJS } from "chart.js";
import "chart.js/auto";
import {
  LineChart,
  BarChart,
  ResponsiveContainer,
  Bar,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
const pdata = [
  {
    name: "MongoDb",
    student: 11,
  },
  {
    name: "Javascript",
    student: 15,
  },
  {
    name: "PHP",
    student: 5,
  },
  {
    name: "Java",
    student: 10,
  },
  {
    name: "C#",
    student: 9,
  },
  {
    name: "C++",
    student: 10,
  },
  {
    name: "C++",
    student: 10,
  },
];
const data = [
  { month: "January", value: 100 },
  { month: "February", value: 200 },
  { month: "March", value: 150 },
  { month: "April", value: 250 },
  { month: "May", value: 180 },
  { month: "June", value: 210 },
  { month: "July", value: 300 },
  { month: "August", value: 270 },
  { month: "September", value: 220 },
  { month: "October", value: 190 },
  { month: "November", value: 280 },
  { month: "December", value: 320 },
];

ChartJS.register(ArcElement);
function calculatePercentage(value) {
  return (value / 4) * 100;
}

const inputValues = 2.3;
const percentages = calculatePercentage(inputValues);

export default function DashBoard() {
  const totalQuantitySold = 150;
  const expectedTargetQuantity = 200;

  const completionPercentage =
    (totalQuantitySold / expectedTargetQuantity) * 100;
  console.log(completionPercentage);
  const data1 = {
    labels: [`Achieved ${inputValues}`, `Target 4`],
    datasets: [
      {
        data: [percentages, 100 - percentages],
        backgroundColor: ["rgb(255, 99, 132)", "#E5E5E5"],
        hoverBackgroundColor: ["rgb(255, 99, 132)", "#E5E5E5"],
      },
    ],
  };
  const data2 = {
    labels: [`Achieved ${40000}`, `Target 50000`],
    datasets: [
      {
        data: [40000, 10000],
        backgroundColor: ["rgb(54, 162, 235)", "#E5E5E5"],
        hoverBackgroundColor: ["rgb(54, 162, 235)", "#E5E5E5"],
      },
    ],
  };
  const data3 = {
    labels: [`Achieved ${30}`, `Target 50`],
    datasets: [
      {
        data: [30, 20],
        backgroundColor: ["rgb(255, 205, 86)", "#E5E5E5"],
        hoverBackgroundColor: ["rgb(255, 205, 86)", "#E5E5E5"],
      },
    ],
  };
  const data4 = {
    labels: ["Samsung", "Redmi", "Apple", "Oppo", "Oneplus", "Vivo"],
    datasets: [
      {
        data: [30, 20, 15, 30, 25, 13],
        backgroundColor: [
          "rgb(255, 205, 86)",
          "#E5E5E5",
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          "#ff8f00",
          "rgb(75, 192, 192)",
        ],
        hoverBackgroundColor: [
          "rgb(255, 205, 86)",
          "#E5E5E5",
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          "#ff8f00",
          "rgb(75, 192, 192)",
        ],
        borderColor: "transparent",
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      title: {
        display: false,
        text: `Avg Sold Quantity: ${14}`,
        fontSize: 20,
      },
      legend: {
        display: true,
        position: "right",
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="DashboardContainer">
      <div className="each-graph-container">
        <h1 className="graph-heading">Avg Return Rate</h1>
        <GaugeChart
          id="gauge-chart5"
          nrOfLevels={6}
          percent={0.1}
          arcPadding={0.008}
          needleColor="#000000"
          needleBaseColor="#0000000"
          animate={true}
          style={{ width: "100%", height: "100%" }}
          cornerRadius={0}
          animDelay={1500}
          textColor="red"
        />
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Avg Sold Quantity</h1>
        <Doughnut data={data1} options={options} />
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Avg Spend per Order</h1>
        <Doughnut data={data2} options={options} />
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Total Orders Per Day</h1>
        <Doughnut data={data3} options={options} />
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Total Orders Per Day</h1>
        <img
          src="https://res.cloudinary.com/dy2gsniki/image/upload/v1701933913/earnings_10013195_slk4eg.png"
          alt="Total-Revenue"
          className="revenue-img"
        />
        <p className="revenue">&#8377; 100000</p>
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Sales Per Brand</h1>
        <Pie data={data4} options={options} />
      </div>
      <div className="each-graph-container days-container">
        <h1 className="graph-heading">Sales Per Week</h1>
        <ResponsiveContainer height={200}>
          <LineChart data={pdata}>
            <CartesianGrid strokeDasharray="5" />
            <XAxis
              axisLine={{ stroke: "blue" }}
              dataKey="name"
              interval={"preserveStartEnd"}
              tickLine={{ stroke: "red" }}
              tick={{ fill: "green" }}
            />
            <YAxis
              axisLine={{ stroke: "blue" }}
              tickLine={{ stroke: "red" }}
              tick={{ fill: "green" }}
            />
            <Legend />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="student"
              stroke="rgb(54, 162, 235)"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="each-graph-container months-container">
        <h1 className="graph-heading">Orders Per Month</h1>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              axisLine={{ stroke: "rgb(54, 162, 235)" }}
              tick={{ fill: "rgb(54, 162, 235)" }}
              tickLine={{ stroke: "rgb(54, 162, 235)" }}
            />
            <YAxis
              axisLine={{ stroke: "rgb(54, 162, 235)" }}
              tick={{ fill: "rgb(54, 162, 235)" }}
              tickLine={{ stroke: "rgb(54, 162, 235)" }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="rgb(75, 192, 192)" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
