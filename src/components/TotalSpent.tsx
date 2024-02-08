import { MdArrowDropUp } from "react-icons/md";

import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "./../constants/charts";

import LineChart from "./charts/LineChart";
import { Card } from "@tremor/react";
import { SharedDialog } from "./ui/sharedDialog";
import { SharedNavigation } from "./ui/sharedNavigation";
import { SharedDrawer } from "./ui/sharedDrawer";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { SharedInfo } from "./ui/sharedInfo";

const TotalSpent = () => {
  return (
    <Card className="flex flex-col bg-white w-full rounded-3xl py-6 px-5 text-center">
      {/* HEADER */}
      <div className="flex justify-between">
        {/* TITLE */}
        <div className="flex flex-row justify-start gap-2 items-center cursor-pointer">
          <SharedDrawer heading="Predictive Analytics" />
          <SharedNavigation />
        </div>
        {/* BUTTON */}
        <SharedDialog />
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <div className="flex flex-col cursor-pointer">
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
          </DrawerTrigger>
          <DrawerContent>
            <SharedInfo />
          </DrawerContent>
        </Drawer>

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
