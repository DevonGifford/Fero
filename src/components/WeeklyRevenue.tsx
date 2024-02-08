import BarChart from "./charts/BarChart";
import {
  barChartDataWeeklyRevenue,
  barChartOptionsWeeklyRevenue,
} from "./../constants/charts";
import { Card } from "@tremor/react";
import { SharedDialog } from "./ui/sharedDialog";
import { SharedNavigation } from "./ui/sharedNavigation";
import { SharedDrawer } from "./ui/sharedDrawer";

const WeeklyRevenue = () => {
  return (
    <Card className="flex flex-col bg-white w-full rounded-3xl py-6 px-5 text-center">
      {/* HEADER */}
      <div className="x-10 flex justify-between z-10">
        {/* TITLE */}
        <div className="flex flex-row justify-start gap-2 items-center cursor-pointer">
          <SharedDrawer heading="Predictive Financial Modeling" />

          <SharedNavigation />
        </div>
        {/* BUTTON */}
        <SharedDialog />
      </div>

      <div className="-translate-y-16">
        <div className="h-[200px] w-full xl:h-[350px]">
          <BarChart
            chartData={barChartDataWeeklyRevenue}
            chartOptions={barChartOptionsWeeklyRevenue}
          />
        </div>
      </div>
    </Card>
  );
};

export default WeeklyRevenue;
