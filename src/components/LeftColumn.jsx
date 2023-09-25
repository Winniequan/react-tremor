import React from "react";
import AreaChartComponent from "./AreaChartComponent";
import TableComponent from "./TableComponent";
import Sales from "./Sales";
import Cost from "./Cost";
import Benefits from "./Benefits";
import SpeciesBarChart from "./SpeciesBarChart";

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <Sales />
        <Cost />
        <Benefits />
        
      </div>
      <div className="flex-auto w-full">
        <AreaChartComponent />
        <SpeciesBarChart />
        <TableComponent />
      </div>
    </div>
  );
};

export default LeftColumn;
