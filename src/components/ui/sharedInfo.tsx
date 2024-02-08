import { useState } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts"; // Importing Recharts components
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./drawer";
import { Button } from "./button";
import { Minus, Plus } from "lucide-react";

const data = [
  {
    goal: 4000,
  },
  {
    goal: 3000,
  },
  {
    goal: 2000,
  },
  {
    goal: 3000,
  },
  {
    goal: 2000,
  },
  {
    goal: 2780,
  },
  {
    goal: 1890,
  },
  {
    goal: 2390,
  },
  {
    goal: 3000,
  },
  {
    goal: 2000,
  },
  {
    goal: 2780,
  },
  {
    goal: 1890,
  },
  {
    goal: 3490,
  },
];

export const SharedInfo = () => {
  const [goal, setGoal] = useState(2000);

  const onClick = (adjustment: number) => {
    setGoal((prevGoal) => Math.max(2000, Math.min(4000, prevGoal + adjustment)));
  };
  
  return (
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Daily Threshold</DrawerTitle>
        <DrawerDescription>Set your daily thresholds.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={() => onClick(-100)}
            disabled={goal <= 2000}
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <div className="flex-1 text-center">
            <div className="text-7xl font-bold tracking-tighter">{goal}</div>
            <div className="text-[0.70rem] uppercase text-muted-foreground">
              Euro's per day
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={() => onClick(100)}
            disabled={goal >= 5000}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
        <div className="mt-3 h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Bar
                dataKey="goal"
                style={
                  {
                    fill: "hsl(var(--foreground))",
                    opacity: 0.9,
                  } as React.CSSProperties
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <DrawerFooter>
        <Button onClick={() => window.location.reload()}>Submit</Button>
        <DrawerClose asChild>
          <Button onClick={() => window.location.reload()} variant="outline">
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  );
};
