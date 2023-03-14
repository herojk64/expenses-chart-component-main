import React from "react";
import Chart from "./Chart";

const Body = (props) => {
  return (
    <div className={`${props.className} text-neutral_Mbrown`} htmlFor="Card">
      <h1 className="font-bold m-4 text-2xl text-neutral_Dbrown">
        Spending - Last 7 Days
      </h1>
      <Chart TotalOfMonth={props.TotalOfMonth}/>
      <hr className="h-0.5 my-6 rounded-lg bg-primary_bgRed"/>
      <div htmlFor="Card_Footer" className="flex">
        <div htmlFor="Total_of_Month">
          <h2 className="text-xs">Total this month</h2>
          <p className="text-neutral_Dbrown text-4xl font-bold">${props.TotalOfMonth}</p>
        </div>
        <div htmlFor="Last_Month" className="ml-auto mt-4">
          <p className="text-neutral_Dbrown text-md font-bold">{`+2.4%`}</p>
          <h3 className="text-xs">from last month</h3>
        </div>
      </div>
    </div>
  );
};

export default Body;
