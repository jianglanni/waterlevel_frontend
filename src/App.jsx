import React, { useState } from 'react';
import './App.css';
import MonthPicker from './MonthPicker';
import Barchart from'./BarChart';

function App() {
  const [button_text, setText] = useState("See more");
  const [hidden_class, setHidden] = useState("hide_part");
  const [show_form, setShow] = useState(false);

  const [date, setDate] = useState({month: 4, year: 2022 });
  function yearChange(newYear) {
      let m = date.month;
      setDate({year: newYear, month: m });
  }

  function monthChange(newMonth){
      let y = date.year;
      setDate({month: newMonth, year: y});
  }
  return (
    <main>
        <div id="head_title">
            Water storage in California reserviors
        </div>
        <div id="page_body">
            <div id="text_body">
                <div id="bodhi">
                    <p className="regular_text">
                          California's reservoirs are part of a <a href="https://www.ppic.org/wp-content/uploads/californias-water-storing-water-november-2018.pdf">complex water storage system</a>.  The State has very variable weather, both seasonally and from year-to-year, so storage and water management is essential.  Natural features - the Sierra snowpack and vast underground aquifers - provide more storage capacity,  but reservoirs are the part of the system that people control on a day-to-day basis.  Managing the flow of surface water through rivers and aqueducts, mostly from North to South, reduces flooding and attempts to provide a steady flow of water to cities and farms, and to maintain natural riparian habitats.  Ideally, it also transfers some water from the seasonal snowpack into long-term underground storage.  Finally, hydro-power from the many dams provides carbon-free electricity. 
                    </p>
                    <p className="regular_text">
                        California's water managers monitor the reservoirs carefully, and the state publishes daily data on reservoir storage.
                    </p>
                    <p className="regular_text">
                        Here's a quick look at some of the data on reservoirs from the <a href="https://cdec.water.ca.gov/index.html">California Data Exchange Center</a>, which consolidates climate and water data from multiple federal and state government agencies, and  electric utilities.  Select a month and year to see storage levels in the eleven largest in-state reservoirs.
                    </p>
                </div>
                <div id="img_block">
                    <img id="given_img" src="https://cdn.theatlantic.com/thumbor/HYdYHLTb9lHl5ds-IB0URvpSut0=/900x583/media/img/photo/2014/09/dramatic-photos-of-californias-historic-drought/c01_53834006/original.jpg"/>
                    <p className="img_caption">
                        Lake Oroville in the 2012-2014 drought. Image credit Justin Sullivan, from The Atlatic article Dramatic Photos of California's Historic Drought.
                    </p>
                </div>
            </div>
            <button onClick={function() {
                if (button_text == "See more") {
                    setText("See less");
                    setHidden("showed_part");
                    setShow(true);
                } else {
                    setText("See more");
                    setHidden("hide_part");
                    setShow(false);
                }
            }}>{button_text}</button>
            <div className={hidden_class}>
                <div id="text_and_picker">
                    <div></div>
                    <p className="regular_text">
                        Here's a quick look at some of the data on reservoirs from the California Data Exchange Center, which consolidates climate and water data from multiple federal and state government agencies, and electric utilities. Select a month and year to see storage levels in the eleven largest in-state reservoirs. 
                    </p>
                    <div id="mp">
                      <p className="mpCaption">Change month: </p>
                      <MonthPicker date = {date} yearFun = {yearChange} monthFun = {monthChange}/>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div id="chartdiv">
                  <Barchart show={show_form} date={date}/>
                </div>
            </div>
        </div>
    </main>
  );
}

export default App;