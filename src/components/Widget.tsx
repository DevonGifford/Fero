import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { BadgeEuro, CalendarDays, RefreshCcw } from "lucide-react";

import {
  Card,
  SparkAreaChart,
  SparkBarChart,
  SparkLineChart,
  Text,
  Title,
} from "@tremor/react";
import { hoverchartData } from "@/constants/charts";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Widget = (props: {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  savings?: string;
  stocks?: string[];
  spend?: string[];
}) => {
  const { icon, title, subtitle, savings, spend, stocks } = props;
  const firstStock = stocks && stocks.length > 0 ? stocks[0] : "interest";
  const secondStock = stocks && stocks.length > 1 ? stocks[1] : "deposits";
  const thirdStock = stocks && stocks.length > 2 ? stocks[2] : "lones";
  const fourthStock = stocks && stocks.length > 0 ? stocks[3] : "interest";
  const fithStock = stocks && stocks.length > 1 ? stocks[4] : "deposits";
  const sixthStock = stocks && stocks.length > 2 ? stocks[5] : "lones";

  const getRandomSrc = () => {
    const options = [
      "spendItems/DS1.png",
      "spendItems/DS2.png",
      "spendItems/DS3.png",
      "spendItems/DS4.png",
      "spendItems/DS5.png",
    ];
    // Generate a random index within the length of the options array
    const randomIndex = Math.floor(Math.random() * options.length);
    // Return the URL at the random index
    return options[randomIndex];
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card
          className="!flex-row flex-grow items-center rounded-[20px] cursor-pointer hover:shadow-xl"
          onClick={() => window.location.reload()}
        >
          {savings && (
            <div className="absolute flex w-full justify-end -translate-x-12 text-green-500 text-sm font-semibold">
              <div className="flex flex-col items-center">
                <span>FERO Savings</span>
                <span>{savings}%</span>
              </div>
            </div>
          )}
          <div className="ml-[18px] flex h-[60px] w-auto flex-row items-center">
            <div className="flex rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
              <span className="flex items-center text-brand-500 dark:text-white">
                {icon}
              </span>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  {title}
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  {subtitle}
                </h4>
              </div>
            </div>
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-90 rounded-xl space-y-2">
        {spend ? (
          <>
            <div className="flex justify-between items-center space-x-4 mr-2 ">
              <div className="flex items-start pt-2">
                <BadgeEuro className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Transactions
                </span>
              </div>
              <div
                className="flex items-center gap-x-1 pt-2 cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => {
                  window.location.reload();
                }}
              >
                <span className="text-xs text-muted-foreground/60">
                  refresh
                </span>
                <RefreshCcw className="mr-2 h-3 w-3 opacity-30" />{" "}
              </div>
            </div>
            {spend.map((item, index) => (
              <Card
                key={index}
                className="max-w-lg flex flex-col items-center mx-auto px-4 py-3.5 gap-2 cursor-pointer transition-transform transform hover:scale-105"
              >
                <div className="flex flex-row justify-evenly gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={getRandomSrc()} />
                    <AvatarFallback>TAX</AvatarFallback>
                  </Avatar>
                  <span className="w-[300px] pr-10">{item}</span>{" "}
                  {/* Text from the spend array */}
                  <span className="flex items-center text-xs text-green-500">
                    {(Math.random() * (5.9 - 0.9) + 0.9).toFixed(1)}%
                  </span>{" "}
                  {/* Random number between 0.9 and 5.9 for saving percentage */}
                  <span className="items-center text-base font-semibold">
                    {Math.floor(Math.random() * (2500 - 112) + 112)}€
                  </span>{" "}
                  {/* Random number ranging between 112 and 2500 for total */}
                </div>
              </Card>
            ))}
            <div className="flex justify-center mt-2">
              <button
                className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => window.location.reload()}
              >
                Show More
              </button>
            </div>
          </>
        ) : stocks ? (
          <>
            <Card className="max-w-lg flex items-center justify-between mx-auto px-4 py-3.5 gap-2 cursor-pointer transition-transform transform hover:scale-105">
              <div className="flex items-center space-x-2.5">
                <Title>{firstStock}</Title>
                <Text className="hidden sm:block">{fourthStock}</Text>
              </div>
              <SparkLineChart
                data={hoverchartData}
                categories={["Performance"]}
                index={"month"}
                colors={["emerald"]}
                className="h-10 w-36"
              />
              <div className="flex items-center space-x-2.5">
                <span className="font-medium rounded text-gray-700">
                  179.26
                </span>
                <span className="px-2 py-1 text-sm font-medium rounded text-white bg-emerald-500">
                  +1.72%
                </span>
              </div>
            </Card>
            <Card className="max-w-lg flex items-center justify-between mx-auto px-4 py-3.5 gap-2 cursor-pointer transition-transform transform hover:scale-105">
              <div className="flex items-center space-x-2.5">
                <Title>{secondStock}</Title>
                <Text className="hidden sm:block">{fithStock}</Text>
              </div>
              <SparkBarChart
                data={hoverchartData}
                categories={["Performance"]}
                index={"month"}
                colors={["emerald"]}
                className="h-10 w-36"
              />
              <div className="flex items-center space-x-2.5">
                <span className="font-medium rounded text-gray-700">
                  179.26
                </span>
                <span className="px-2 py-1 text-sm font-medium rounded text-white bg-emerald-500">
                  +1.72%
                </span>
              </div>
            </Card>
            <Card className="max-w-lg flex items-center justify-between mx-auto px-4 py-3.5 gap-2 cursor-pointer transition-transform transform hover:scale-105">
              <div className="flex items-center space-x-2.5">
                <Title>{thirdStock}</Title>
                <Text className="hidden sm:block">{sixthStock}</Text>
              </div>
              <SparkAreaChart
                data={hoverchartData}
                categories={["Performance"]}
                index={"month"}
                colors={["emerald"]}
                className="h-10 w-36"
              />
              <div className="flex items-center space-x-2.5">
                <span className="font-medium rounded text-gray-700">
                  179.26
                </span>
                <span className="px-2 py-1 text-sm font-medium rounded text-white bg-emerald-500">
                  +1.72%
                </span>
              </div>
            </Card>
            <div className="flex justify-center items-center space-x-4">
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Updated Today
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <Card className="max-w-lg flex items-center justify-between mx-auto px-4 py-3.5 gap-2 cursor-pointer transition-transform transform hover:scale-105">
              <div className="flex items-center space-x-2.5">
                <Title>AAPL</Title>
                <Text className="hidden sm:block">Apple Inc.</Text>
              </div>
              <SparkLineChart
                data={hoverchartData}
                categories={["Performance"]}
                index={"month"}
                colors={["emerald"]}
                className="h-10 w-36"
              />
              <div className="flex items-center space-x-2.5">
                <span className="font-medium rounded text-gray-700">
                  179.26
                </span>
                <span className="px-2 py-1 text-sm font-medium rounded text-white bg-emerald-500">
                  +1.72%
                </span>
              </div>
            </Card>
            <Card className="max-w-lg flex items-center justify-between mx-auto px-4 py-3.5 gap-2 cursor-pointer transition-transform transform hover:scale-105">
              <div className="flex items-center space-x-2.5">
                <Title>ABC</Title>
                <Text className="hidden sm:block">Alphabet</Text>
              </div>
              <SparkBarChart
                data={hoverchartData}
                categories={["Performance"]}
                index={"month"}
                colors={["emerald"]}
                className="h-10 w-36"
              />
              <div className="flex items-center space-x-2.5">
                <span className="font-medium rounded text-gray-700">
                  179.26
                </span>
                <span className="px-2 py-1 text-sm font-medium rounded text-white bg-emerald-500">
                  +1.72%
                </span>
              </div>
            </Card>
            <Card className="max-w-lg flex items-center justify-between mx-auto px-4 py-3.5 gap-2 cursor-pointer transition-transform transform hover:scale-105">
              <div className="flex items-center space-x-2.5">
                <Title>SP500</Title>
                <Text className="hidden sm:flex flex-col items-center text-xs">
                  <span>Standard</span>
                  <span>& Poor</span>
                </Text>
              </div>
              <SparkAreaChart
                data={hoverchartData}
                categories={["Performance"]}
                index={"month"}
                colors={["emerald"]}
                className="h-10 w-36"
              />
              <div className="flex items-center space-x-2.5">
                <span className="font-medium rounded text-gray-700">
                  179.26
                </span>
                <span className="px-2 py-1 text-sm font-medium rounded text-white bg-emerald-500">
                  +1.72%
                </span>
              </div>
            </Card>
            <div className="flex justify-center items-center space-x-4">
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Updated Today
                </span>
              </div>
            </div>
          </>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default Widget;
