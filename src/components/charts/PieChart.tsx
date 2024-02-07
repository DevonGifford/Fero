import Chart from "react-apexcharts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LineChart = (props: any) => {
  const { chartData, chartOptions } = props;

  return (
    <Chart
      options={chartOptions}
      type="pie"
      width="100%"
      height="100%"
      series={chartData}
    />
  );
};

export default LineChart;
