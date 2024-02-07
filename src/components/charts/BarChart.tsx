"use client";
import Chart from "react-apexcharts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BarChart = (props: any) => {
  const { chartData, chartOptions } = props;

  return (
    <Chart
      options={chartOptions}
      type="bar"
      width="100%"
      height="120%"
      series={chartData}
    />
  );
};

export default BarChart;
