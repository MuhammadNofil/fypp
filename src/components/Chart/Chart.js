import React, { useState } from "react";
import Barchart from "./ChartEditor";
import { UserData } from "../../ChartData";
const Chart = () => {
  const [Data, setData] = useState({
    labels: UserData.map((item) => item.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((item) => item.userGain),
      },
    ],
  });
  return <Barchart ChartData={Data} />;
};

export default Chart;
