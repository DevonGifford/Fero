import Widget from "./Widget";

import { MdBarChart, MdDashboard } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { BiSolidMessageSquareError } from "react-icons/bi";

function Header() {
  return (
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-6">
      <Widget
        icon={<MdBarChart className="h-7 w-7" />}
        title={"Spend today"}
        subtitle={"€940.50"}
        savings="2.3"
        spend={[
          "Cloud Service Charges",
          "Website Hosting Expenses",
          "Data Storage Costs",
        ]}
      />
      <Widget
        icon={<MdBarChart className="h-7 w-7" />}
        title={"Spend this month"}
        subtitle={"€59 074"}
        savings="2.9"
        spend={[
          "Developer Tools Expenses",
          "Virtual Machine Rentals",
          "Disaster Recovery Service Payments",
          "Website Hosting Expenses",
          "Domain Registration Fees",
        ]}
      />
      <Widget
        icon={<BiSolidMessageSquareError className="h-7 w-7" />}
        title={"Cart Abandonment"}
        subtitle={"€2  642"}
        cost="3.3"
      />
      <Widget
        icon={<IoMdHome className="h-6 w-6" />}
        title={"Investment Portfolio"}
        subtitle={"€2 433"}
        stocks={["AMZN", "MSFT", "TSLA", "Amazon", "Microsoft", "Tesla"]}
        down={"1.2"}
      />
      <Widget
        icon={<MdDashboard className="h-6 w-6" />}
        title={"Expense Trends Analysis"}
        subtitle={"€1 ,000"}
        stocks={["BTC", "ETH", "USDT", "BitCoin", "Ethereum", "Tether"]}
      />
      <Widget
        icon={<IoDocuments className="h-7 w-7" />}
        title={"Fero Activities"}
        subtitle={"145"}
      />
    </div>
  );
}

export default Header;
