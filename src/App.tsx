import Sidebar from "./components/sidebar/Sidebar";

import "./App.css";
import Navbar from "./components/Navbar";
import TotalSpent from "./components/TotalSpent";
import WeeklyRevenue from "./components/WeeklyRevenue";
import DailyTraffic from "./components/DailyTraffic";
import PieChartCard from "./components/PieChartCard";
import CreditCards from "./components/CreditCard";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <main className="flex flex-row justify-between h-full min-h-screen">
        <Sidebar />

        <div className="w-full px-6">
          <Navbar />
          {/* <p className="flex w-full text-3xl font-semibold tracking-widest items-start pb-2">
            User Overview
          </p> */}

          <Header />

          <div className="mt-5 grid grid-cols-1 gap-5 2xl:grid-cols-2">
            {/* Check Table */}
            <div>
              {/* <CheckTable tableData={tableDataCheck} /> */}
              <CreditCards />
            </div>

            {/* Traffic chart & Pie Chart */}

            <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2 ">
              <DailyTraffic />
              <PieChartCard />
              {/* <CreditCards /> */}
            </div>

            {/* Complex Table , Task & Calendar */}

            {/* <ComplexTable tableData={tableDataComplex} /> */}

            {/* Task chart & Calendar */}

            {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
          <MiniCalendar />
          </div>
        </div> */}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <TotalSpent />
            <WeeklyRevenue />
          </div>

          {/* <Example /> */}
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
