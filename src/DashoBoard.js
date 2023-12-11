import GaugeChart from "react-gauge-chart";
import { Doughnut, Pie } from "react-chartjs-2";
import "./Dashboard.css";
import React from "react";
import { useEffect,useState } from "react";
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

function calculatePercentage(value) {
  return (value / 4) * 100;
}

const inputValues = 2.3;
const percentages = calculatePercentage(inputValues);

export default function DashBoard() {
  const totalQuantitySold = 150;
  const expectedRemainingQuantity = 200;
  const [chartDimensions, setChartDimensions] = useState({ width: 300, height: 180 }); 

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      let newWidth, newHeight;

      if (width >= 576 && width < 768) {
        newWidth = 250;
        newHeight = 150;
      } else if (width >= 768 && width < 992) {
        newWidth = 350;
        newHeight = 190;
      } else {
        newWidth = 300;
        newHeight = 180;
      }

      setChartDimensions({ width: newWidth, height: newHeight });
    };
    window.addEventListener('resize', handleResize);

    
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const completionPercentage =
    (totalQuantitySold / expectedRemainingQuantity) * 100;
  console.log(completionPercentage);
  const data1 = {
    labels: [`Achieved ${inputValues}`, `Remaining 4`],
    datasets: [
      {
        data: [percentages, 100 - percentages],
        backgroundColor: ["#ff6384", "#e5e5e5"],
        hoverBackgroundColor: ["#ff6384", "#e5e5e5"],
      },
    ],
  };
  const data2 = {
    labels: [`Achieved ${40}K`, `Remaining 50K`],
    datasets: [
      {
        data: [40000, 10000],
        backgroundColor: ["rgb(54, 162, 235)", "#E5E5E5"],
        hoverBackgroundColor: ["rgb(54, 162, 235)", "#E5E5E5"],
      },
    ],
  };
  const data3 = {
    labels: [`Achieved ${30}`, `Remaining 50`],
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
          "#ffc107",
          "#03a9f4",
          "#4caf50",
          "#ff5722",
          "#9c27b0",
          "#f44336",
        ],
        hoverBackgroundColor: [
          "#ffc107",
          "#03a9f4",
          "#4caf50",
          "#ff5722",
          "#9c27b0",
          "#f44336",
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
        labels: {
            usePointStyle: true, 
            fontSize: 14,
            boxWidth: 10, 
          },
      },
      tooltip: {
        enabled: true,
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
          textColor="#00cc66"
        />
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Avg Sold Quantity</h1>
        <Doughnut data={data1} options={options} width={chartDimensions.width} height={chartDimensions.height} />
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Avg Spend per Order</h1>
        <Doughnut data={data2} options={options} width={chartDimensions.width} height={chartDimensions.height}/>
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Total Orders Per Day</h1>
        <div className="doughnut-chart">
        <Doughnut data={data3} options={options} width={chartDimensions.width} height={chartDimensions.height}/>
        </div>
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Total-Revenue</h1>
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
        <ResponsiveContainer height={200} >
          <LineChart data={pdata} style={{zIndex: '1'}}>
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
          <BarChart data={data} style={{zIndex: '1'}}>
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
