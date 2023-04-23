import React from "react";
import ReactApexChart from "react-apexcharts";
import data from "../../../../../assets/shared/data.json";
let filterdata = [20, 20, 20, 20, 20];
// data.inventory.pieChart.forEach((i) => {
//   filterdata.push(i.stock);
// });

const labels = ["Product 1", "Product 2", "Product 3", "Product 4"];
const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560"];

const options = {
  chart: {
    width: "100%",
    height: "auto",
    type: "pie",
    toolbar: {
      show: false,
    },
  },
  labels: labels,
  colors: colors,
  legend: {
    show: true,
    position: "bottom",
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      return opts.w.config.series[opts.seriesIndex] + "%";
    },
  },
};

const series = filterdata;

const CircularChart = () => {
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width="100%"
      />
    </div>
  );
};

export default CircularChart;
