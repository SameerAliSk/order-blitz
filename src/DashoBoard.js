import "./Dashboard.css";
import GaugeChart from "react-gauge-chart";
import React, { useEffect, useState } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
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

export default function DashBoard() {
  const [revenue, setRevenue] = useState(0);
  const [sales, setSales] = useState(0);
  const [orders, setOrders] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [returnRate, SetReturnRate] = useState(0);
  const [todayOrders, setTodayOrders] = useState(0);
  const [sevenDaySales, SetSevenDaysSale] = useState([]);
  const [twelveMonthSales, setTwelveMonthSales] = useState([]);
  const [brandsCount, setBrandsCount] = useState([]);
  const [chartDimensions, setChartDimensions] = useState({
    width: 300,
    height: 180,
  });

  const avgSoldQuantity = (sales / orders).toFixed(2);
  const avgSpendPerOrder = (revenue / orders).toFixed(2);
  const avgReturnRate = parseFloat((returnRate / 100).toFixed(2));
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      let newWidth, newHeight;

      if (width < 768) {
        newWidth = 300;
        newHeight = 180;
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

  const fetchData = async (url, setter) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data with ${url}`);
      }
      const data = await response.json();
      setter(data);
    } catch (error) {
      console.error(`Error fetching data with ${url}`, error);
    }
  };

  useEffect(() => {
    const apiCalls = async () => {
      await Promise.all([
        fetchData("https://localhost:7234/api/Orders/total-revenue", setRevenue),
        fetchData("https://localhost:7234/api/Orders/total-orders", setOrders),
        fetchData("https://localhost:7234/api/Orders/total-sales", setSales),
        fetchData("https://localhost:7234/api/Customers/total-customers", setCustomers),
        fetchData("https://localhost:7234/api/Orders/average-return-rate", SetReturnRate),
        fetchData("https://localhost:7234/api/Orders/orders-count-last-seven-days", SetSevenDaysSale),
        fetchData("https://localhost:7234/api/Orders/orders-count-last-12-months", setTwelveMonthSales),
        fetchData("https://localhost:7234/api/Orders/product-counts-by-brand", setBrandsCount),
        fetchData("https://localhost:7234/api/Orders/total-orders-today", setTodayOrders),
      ]);
    };
    apiCalls();
  }, []);
  
  const data3 = {
    labels: [`Achieved ${todayOrders}`, `Remaining ${10 - todayOrders}`],
    datasets: [
      {
        data: [todayOrders, 10 - todayOrders],
        backgroundColor: ["rgb(255, 205, 86)", "#E5E5E5"],
        hoverBackgroundColor: ["rgb(255, 205, 86)", "#E5E5E5"],
      },
    ],
  };
  const data4 = {
    labels: brandsCount.map((eachBrand) => eachBrand.brandName),
    datasets: [
      {
        data: brandsCount.map((eachBrand) => eachBrand.productCount),
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
console.log(twelveMonthSales)
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
          <BarChart data={twelveMonthSales} style={{ zIndex: "1" }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="monthName"
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
            <Bar dataKey="count" fill="rgb(75, 192, 192)" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="each-graph-container">
        <h1 className="graph-heading">Avg Return Rate</h1>
        <GaugeChart
          id="gauge-chart5"
          nrOfLevels={6}
          percent={avgReturnRate}
          arcPadding={0.008}
          needleColor="#000000"
          needleBaseColor="#0000000"
          animate={true}
          cornerRadius={0}
          animDelay={1500}
          textColor="#00cc66"
          hideText={true}
        />
        <p className="revenue">{returnRate.toFixed(2)}%</p>
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
        <h1 className="graph-heading">Orders Per Week</h1>
        <ResponsiveContainer height={160}>
          <LineChart data={sevenDaySales} style={{ zIndex: "1" }}>
            <CartesianGrid strokeDasharray="5" />
            <XAxis
              axisLine={{ stroke: "blue" }}
              dataKey="dayName"
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
              dataKey="count"
              stroke="rgb(54, 162, 235)"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
