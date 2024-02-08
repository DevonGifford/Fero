import BarChart from "./charts/BarChart";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "./../constants/charts";
import { MdArrowDropUp } from "react-icons/md";
import { Card } from "@tremor/react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { SharedInfo } from "./ui/sharedInfo";

const DailyTraffic = () => {
  return (
    <Card className="rounded-[20px] p-6">
      <Drawer>
        <DrawerTrigger asChild>
          <div className="flex flex-row justify-between cursor-pointer">
            <div className="ml-1 pt-2">
              <p className="text-sm font-medium leading-4 text-gray-600">
                AI Projections
              </p>
              <p className="text-[34px] font-bold text-navy-700 dark:text-white">
                2 579 €{" "}
                <span className="text-sm font-medium leading-6 text-gray-600/50">
                  estimate
                </span>
              </p>
            </div>
            <div className="mt-2 flex items-start">
              <div className="flex flex-col items-center text-sm text-green-500">
                <p className="font-bold"> Fero AI </p>
                <div className="flex ">
                  <p className="font-bold"> +2.45% </p>
                  <MdArrowDropUp className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <SharedInfo />
        </DrawerContent>
      </Drawer>

      <div className="h-[280px] w-full pb-10">
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </div>
    </Card>
  );
};

export default DailyTraffic;
