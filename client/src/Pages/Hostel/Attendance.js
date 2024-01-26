// https://js.devexpress.com/React/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/
import React, { useState } from "react";
import "./Attendance.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PieChart, Series } from "devextreme-react/pie-chart";
import { billionaires } from "./AttendanceData";
const findMonthDays = (y, m) => {
  return new Date(y, m + 1, 0).getDate();
};

const findFirstDay = (y, m) => {
  return new Date(y, m, 1).getDay();
};

export default function App() {
  const [sDate, setsDate] = useState(new Date());

  const changeToPrevMonth = () => {
    setsDate((pDate) => {
      const pMonth = pDate.getMonth() - 1;
      const pYear = pDate.getFullYear();
      return new Date(pYear, pMonth);
    });
  };

  const changeToNextMonth = () => {
    setsDate((pDate) => {
      const nMonth = pDate.getMonth() + 1;
      const nYear = pDate.getFullYear();
      return new Date(nYear, nMonth);
    });
  };

  const handleDateClick = (date) => {
    setsDate(date);
  };

  const showCalendar = () => {
    const currDate = new Date();
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);
    const fDay = findFirstDay(y, m);

    const allDays = [];

    for (let p = 0; p < fDay; p++) {
      allDays.push(<div key={`em-${p}`} className="box empty"></div>);
    }

    for (let d = 1; d <= mDays; d++) {
      const date = new Date(y, m, d);
      const isSelected = sDate && date.toDateString() === sDate.toDateString();

      allDays.push(
        <div
          key={`d-${d}`}
          className={`box ${isSelected ? "selected" : ""}`}
          onClick={() => handleDateClick(date)}
        >
          {d}
        </div>
      );
    }

    return allDays;
  };

  return (
    <div className="calender">
      <div className="boxmain">
        <div className="boxheader">
          <GrPrevious onClick={changeToPrevMonth} />
          <h2>
            {sDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <GrNext onClick={changeToNextMonth} />
        </div>
        <div className="boxes">{showCalendar()} </div>
      </div>
      <div className="Pie">
        <PieChart
          title="Your Attendance Record"
          dataSource={billionaires}
          type="doughnut"
        >
          <Series argumentField="country" valueField="amount"></Series>
        </PieChart>
      </div>
    </div>
  );
}
