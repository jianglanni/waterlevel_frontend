import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
//import { setDatasets } from "react-chartjs-2/dist/utils";

function Barchart(props){
  const[data, setData] = useState({});
  
  let ImportedData = {};
  let StackedPart = {};
  ImportedData.data = [0, 0, 0, 0, 0, 0, 0];
  StackedPart.data = [4552000,3537577,2447650,2400000,2041000,2030000,1602000];
  ImportedData.backgroundColor = "rgb(66, 145, 152)";
  StackedPart.backgroundColor = "rgb(120, 199, 227)";
  //start here
  useEffect(() => {
    console.log("data processing");
    sendPostRequest("/query/getData", props.date).then((res)=>{
        for (let i=0; i<7; ++i) {
            ImportedData.data[i] = res[i].storage;
            StackedPart.data[i] = res[i].capacity;
        }
        setData({
          labels: ["Shasta", "Oroville", "Trinity Lake", "New Melones", "San Luis", "Don Pedro", "Berryessa"],
          datasets: [
            ImportedData, StackedPart
          ]
        }
        );
  }).catch((err)=>{console.log(err)});
  },[props.date]
    
  );


  
const options = {
    plugins:{
      legend:{ display: false },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
             x: {
                stacked: true,
                grid: {
                    display: false
                }
              },
             y: {
                grid: {
                    display: false
                },
                ticks: {
                  beginAtZero: true,
                },
              },
        
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

async function sendPostRequest(url,data) {
  let params = {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data) };
  
  /*console.log("about to send POST request");
  console.log(params);*/

  let response = await fetch(url,params);
  if (response.ok) {
    let data = await response.json();
    return data;
  } else {
    throw Error(response.status);
  }
}

export default Barchart;

