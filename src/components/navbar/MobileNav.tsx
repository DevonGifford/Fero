import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { additionalLinks, mainLinks } from "../sidebar/Links";
import SidebarItem from "../sidebar/SidebarItem";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function MobileNav() {
  const [active, setActive] = useState<number>(mainLinks[0].id);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-full max-w-[400px] sm:w-[540px] bg-[hsl(217,38%,11%)] "
      >
        <SheetHeader>
          <img
            src="Logo.svg"
            alt="Untitled UI"
            className=" w-44 h-44 -translate-y-10"
          />
          <ul className="py-3 border-b border-[hsl(217,20%,45%)] border-opacity-30">
            {mainLinks.map((link) => (
              <SidebarItem
                key={link.id}
                link={link}
                expanded={true}
                active={active}
                setActive={setActive}
              />
            ))}
          </ul>

          <ul className={`py-3`}>
            {additionalLinks.map((link) => (
              <SidebarItem
                key={link.id}
                link={link}
                expanded={true}
                active={active}
                setActive={setActive}
              />
            ))}
          </ul>
        </SheetHeader>

        <SheetFooter>
          <SheetClose asChild>
            <div className="relative mt-14 mx-2 sm:mx-8 flex justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 pb-4">
              <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800">
                <Avatar>
                  <AvatarImage src="fero_logo.jpeg" alt="@DevonGifford" />
                  <AvatarFallback>F</AvatarFallback>
                </Avatar>

              </div>

              <div className="mt-16 flex h-fit flex-col items-center px-5">
                <p className="text-lg font-bold text-white">Upgrade Fero PRO</p>
                <p className="mt-1 px-4 text-center text-sm text-white">
                  Improve your development process and start doing more with
                  Fero UI PRO!
                </p>

                <button
                  className="text-medium mt-7 block rounded-full bg-gradient-to-b from-white/50 to-white/10 px-11 py-[12px] text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
                  onClick={() => window.location.reload()}
                >
                  Upgrade to PRO
                </button>
              </div>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
