import GaugeChart from "react-gauge-chart";
import { Doughnut } from "react-chartjs-2";
import "./Dashboard.css"

const data = {
    labels:["Sold quantity"],
    datasets: [
        {
          label: 'Avg Sold Quantity',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgb(255, 99, 132)',
          data: [65,]
        }
      ]
}

export default function DashBoard() {
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
            <Doughnut
            data={data}
            options={{
                title:{
                  display:true,
                  text:'Avg Sold Quantity',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
            </div>
        </div>
    )
}