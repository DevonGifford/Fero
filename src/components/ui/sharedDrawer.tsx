import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Bitcoin, DollarSign, Euro, PoundSterling } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const SharedDrawer = ({ heading }: { heading: string }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="flex justify-start text-base lg:text-base font-bold text-navy-700 dark:text-white">
          {heading}
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex w-full flex-col justify-center text-center">
            <DrawerTitle>Set your currency preference</DrawerTitle>
            <DrawerDescription>
              This is still a work in progress.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 ">
            <ToggleGroup type="single" className=" gap-5">
              <ToggleGroupItem
                value="EUR"
                aria-label="Toggle eur"
                className="p-5 py-8 border-2"
              >
                <Euro className="h-9 w-9" />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="USD"
                aria-label="Toggle usd"
                className="p-5 py-8 border-2"
              >
                <DollarSign className="h-9 w-9" />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="GBP"
                aria-label="Toggle gbp"
                className="p-5 py-8 border-2"
              >
                <PoundSterling className="h-9 w-9" />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="COIN"
                aria-label="Toggle coin"
                className="p-5 py-8 border-2"
              >
                <Bitcoin className="h-9 w-9" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <DrawerFooter>
            <Button onClick={() => window.location.reload()}>Submit</Button>
            <DrawerClose asChild>
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
