import { MdArrowDropUp } from "react-icons/md";

import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "./../constants/charts";

import LineChart from "./charts/LineChart";
import { Card } from "@tremor/react";
import { SharedDialog } from "./ui/sharedDialog";
import { SharedNavigation } from "./ui/sharedNavigation";

const TotalSpent = () => {
  return (
    <Card className="flex flex-col bg-white w-full rounded-3xl py-6 px-5 text-center">
      {/* HEADER */}
      <div className="flex justify-between">
        {/* TITLE */}
        <div className="flex flex-row justify-start gap-2 items-center cursor-pointer">
          <h2 className="flex justify-start text-base lg:text-base font-bold text-navy-700 dark:text-white">
            Predictive Analytics
          </h2>
          <SharedNavigation />
        </div>
        {/* BUTTON */}
        <SharedDialog />
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
            €37.5K
          </p>
          <div className="flex flex-col items-start">
            <p className="mt-2 text-sm text-gray-600">Total Spent</p>
            <div className="flex flex-row items-center justify-center">
              <MdArrowDropUp className="font-medium text-green-500" />
              <p className="text-sm font-bold text-green-500"> +2.45% </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <LineChart
            chartOptions={lineChartOptionsTotalSpent}
            chartData={lineChartDataTotalSpent}
          />
        </div>
      </div>
    </Card>
  );
};

export default TotalSpent;
