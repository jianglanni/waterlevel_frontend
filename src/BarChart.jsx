import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
//import { setDatasets } from "react-chartjs-2/dist/utils";

function Barchart(props){
  const[data, setData] = useState({});
  useEffect(() => {
    setData({
      labels: ["Shasta", "Ororville", "Trinity Lake", "New Melones", "San Luis", "Don Pedro", "Berryessa"],//test
      datasets: [
        {
          data: [123, 123, 142, 132, 143, 42, 200],//test datas!!!
          backgroundColor: "rgb(66, 145, 152)",
        },
        {
          data: [23, 23, 42, 32, 43, 42, 20],//test datas!!!,
          backgroundColor: "rgb(120, 199, 227)",
        }
      ]
    }
    )
  },[]
    
  );

  const options = {
    scales: {
        yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
        xAxes: [
              {
                stacked: true,
              },
        ],
    }
  };
  if (props.show) {
      return(
        <Bar data={data} options={options} />
      )
  } else {
      return (<p>test.</p>);
  }
}

export default Barchart;

