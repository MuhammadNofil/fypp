import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
const ChartEditor = ({ ChartData }) => {
  return <Bar data={ChartData} />;
};

export default ChartEditor;
