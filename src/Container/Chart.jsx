import React, { useState, useContext, useLayoutEffect } from "react";
import { nanoid } from "nanoid";
import { DataContext } from "../API/data";

const Chart = (props) => {
  const { data } = useContext(DataContext);
  const [weeklyAverage, setWeeklyAverage] = useState(0);
  const [maxAmount, setMaxAmmount] = useState(0);
  useLayoutEffect(() => {
    const weeklyaverage = props.TotalOfMonth / 4;

    let maxAmount = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < data.length; i++) {
      if (data[i].amount > maxAmount) {
        maxAmount = data[i].amount;
      }
    }
    setMaxAmmount(maxAmount);
    setWeeklyAverage(weeklyaverage);
  }, []);

  return (
    <div className="h-32 flex items-end justify-between">
      {data.map((values) => {
        let percent = values.amount * (weeklyAverage / 100);
        return (
          <Bars
            key={nanoid()}
            maxAmmount={maxAmount}
            values={values}
            percent={percent}
          />
        );
      })}
    </div>
  );
};

const Bars = ({ values, percent, maxAmmount }) => {
  const [hover, setHover] = useState(false);
  const MouseOver = () => {
    setHover((e) => !e);
  };
  return (
    <div className="flex flex-col gap-1 justify-center items-center relative">
      <div
        className={`bg-black text-white font-md px-2 py-0.5 rounded absolute top-0 -translate-y-10 
        ${hover ? "" : "hidden"}`}
      >
        {values.amount}
      </div>
      <div
        className={`w-8 transition  ${
          maxAmmount === values.amount ? `bg-primary_Cyan hover:opacity-60` : `bg-primary_Red hover:opacity-60`
        } rounded-md`}
        style={{ height: percent }}
        onMouseOver={MouseOver}
        onMouseLeave={MouseOver}
      ></div>
      <p>{values.day}</p>
    </div>
  );
};

export default Chart;
