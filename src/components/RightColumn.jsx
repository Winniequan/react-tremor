import React from "react";
import SalesItem from "./SalesItem";
import WebAnalytics from "./WebAnalytics";
import ScoreList from "./ScoreList";
import GrowthRate from "./GrowthRate";

const RightColumn = () => {
  return (
    <div className="w-full p-2">
      <SalesItem />
      <WebAnalytics />
      <ScoreList />
      <GrowthRate/>
    </div>
  );
};

export default RightColumn;
