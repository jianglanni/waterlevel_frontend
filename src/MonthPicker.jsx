import React, {useState} from 'react';
// an third-party component from NPM
import MonthYearPicker from 'react-month-year-picker';

function MonthPicker(props) {
    let date = props.date;
    
    const [visible,updateVisible] = useState(false);
    
    function showFun () {
      updateVisible(true);
    }
    
    function pickedYear (year) {
      props.yearFun(year);
    }
    
    function pickedMonth (month) {
      updateVisible(false);
      props.monthFun(month);
    }
    
    if (visible) {
        return (
          <div>
            <MonthYearPicker
              caption=""
              selectedMonth={date.month}
              selectedYear={date.year}
              minYear={2000}
              maxYear={2022}
              onChangeYear = {pickedYear}
              onChangeMonth = {pickedMonth}
            />
          </div> );
    } else {
        return (
          <button id= "MonthPicker" onClick={showFun}>{date.month+"/"+date.year}</button>
        )
    }
}

export default MonthPicker;