import GaugeChart from "react-gauge-chart";
import { Doughnut, Pie } from "react-chartjs-2";
import "./Dashboard.css";
import React from "react";
import { useEffect, useState } from "react";
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

export default function DashBoard() {
  const [revenue, setRevenue] = useState(0);
  const [sales, setSales] = useState(0);
  const [orders, setOrders] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [chartDimensions, setChartDimensions] = useState({
    width: 300,
    height: 180,
  });

  const avgSoldQuantity = (sales / orders).toFixed(2);
  const remainingSoldQuantity = (4 - sales / orders).toFixed(2);
  const avgSpendPerOrder = (revenue / orders).toFixed(2);
  const remainingSpendPerOrder = ((50000 - revenue / orders) / 1000).toFixed(2);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      let newWidth, newHeight;

      if (width < 768) {
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
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const apiCalls = async () => {
      await fetch("https://localhost:7234/api/Orders/total-revenue")
        .then((response) => response.json())
        .then((data) => setRevenue(data));

      await fetch("https://localhost:7234/api/Orders/total-orders")
        .then((response) => response.json())
        .then((data) => setOrders(data));

      await fetch("https://localhost:7234/api/Orders/total-sales")
        .then((response) => response.json())
        .then((data) => setSales(data));

      await fetch("https://localhost:7234/api/Customers/total-customers")
        .then((response) => response.json())
        .then((data) => setCustomers(data));
    };
    apiCalls();
  }, []);
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
        <h1 className="graph-heading">Total Customers</h1>
        <img
          src="https://res.cloudinary.com/dbatijrbu/image/upload/v1701689454/service_9119160_luxciw.png"
          alt="Total Customers"
          className="revenue-img"
        />
        <p className="revenue">{customers}</p>
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Total Sales</h1>
        <img
          src="https://res.cloudinary.com/dbatijrbu/image/upload/v1701689454/sale_5661388_zjowna.png"
          alt="Total Sales"
          className="revenue-img"
        />
        <p className="revenue">{sales}</p>
      </div>

      <div className="each-graph-container">
        <h1 className="graph-heading">Avg Sold Quantity</h1>
        <img
          src="https://res.cloudinary.com/dy2gsniki/image/upload/v1702286813/sold-out_2037835_yaxcif.png"
          alt="Avg Sold Quantity"
          className="revenue-img"
        />
        <p className="revenue">{avgSoldQuantity} Units</p>
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Avg Spend per Order</h1>
        <img
          src="https://res.cloudinary.com/dy2gsniki/image/upload/v1702287666/charity_5292590_qfgfov.png"
          alt="Avg Spend per Order"
          className="revenue-img"
        />
        <p className="revenue">&#8377; {avgSpendPerOrder}</p>
      </div>
      <div className="each-graph-container revenue-container">
        <h1 className="graph-heading">Total-Revenue</h1>
        <img
          src="https://res.cloudinary.com/dy2gsniki/image/upload/v1701933913/earnings_10013195_slk4eg.png"
          alt="Total-Revenue"
          className="revenue-img"
        />
        <p className="revenue">&#8377; {revenue}</p>
      </div>
      <div className="each-graph-container months-container">
        <h1 className="graph-heading">Orders Per Month</h1>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} style={{ zIndex: "1" }}>
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
          cornerRadius={0}
          animDelay={1500}
          textColor="#00cc66"
          hideText={true}
        />
        <p className="revenue">10%</p>
      </div>
      <div className="each-graph-container width-container">
        <h1 className="graph-heading">Today's Total Orders</h1>
        <div className="doughnut-chart">
          <Doughnut
            data={data3}
            options={options}
            width={chartDimensions.width}
            height={chartDimensions.height}
          />
        </div>
      </div>
      <div className="each-graph-container width-container revenue-container">
        <h1 className="graph-heading">Sales Per Brand</h1>
        <Pie
          data={data4}
          options={options}
          width={chartDimensions.width}
          height={chartDimensions.height}
        />
      </div>
      <div className="each-graph-container days-container">
        <h1 className="graph-heading">Sales Per Week</h1>
        <ResponsiveContainer height={160}>
          <LineChart data={pdata} style={{ zIndex: "1" }}>
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
    </div>
  );
}
