import GaugeChart from "react-gauge-chart";
import { Doughnut } from "react-chartjs-2";
import "./Dashboard.css"
import React from "react";
import { ArcElement } from "chart.js";
import { Chart as ChartJS,} from 'chart.js';
import 'chart.js/auto'
ChartJS.register(ArcElement);


export default function DashBoard() {
    const totalQuantitySold = 150; 
    const totalOrders = 50; 
    const expectedTargetQuantity = 200; 

    
    const completionPercentage = (totalQuantitySold / expectedTargetQuantity) * 100;
    console.log(completionPercentage)

    const data = {
        labels: ['Avg Sold Quantity'],
        datasets: [
            {
                data: [completionPercentage,100-completionPercentage],
                backgroundColor: ['#36A2EB', '#E5E5E5'], 
                hoverBackgroundColor: ['#36A2EB', '#E5E5E5'],
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: `Avg Sold Quantity: ${14}`,
                fontSize: 20,
            },
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

      
    return(
        <div className="DashboardContainer">
            <div className="each-graph-container">
                <h1 className="graph-heading">Avg Return Rate</h1>
            <GaugeChart id="gauge-chart5"
                nrOfLevels={5}
                percent={0.9}
                arcPadding={0.008}
                needleColor="#000000"
                hideText={true}
                needleBaseColor="#0000000"
                animate= {true}
                style={{width:"80%"}}
                cornerRadius={0}
                animDelay={1500}
            />
            <h2 className="graph-percent">90%</h2>
            </div>
            <div className="each-graph-container">
            <h1 className="graph-heading">Avg Sold Quantity</h1>
            <Doughnut data={data} options={options} />
            
            </div>
        </div>
    )
}