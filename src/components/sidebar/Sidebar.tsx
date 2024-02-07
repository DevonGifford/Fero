import { useState } from "react";
import { ChevronLast, ChevronFirst } from "lucide-react";

import Logo from "./../../assets/Logo.svg";
import { additionalLinks, mainLinks } from "./Links";
import SidebarItem from "./SidebarItem";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Sidebar() {
  const [expanded, setExpanded] = useState<boolean>(true);
  const [active, setActive] = useState<number>(mainLinks[0].id);

  return (
    <aside className="hidden  inset-x-0 bottom-0 lg:flex flex-col justify-between items-center  w-max px-4 py-6 bg-[hsl(217,38%,11%)]">
      <div className="flex flex-col gap-4 items-center">
        <div
          className={`flex items-center justify-between transition-all -translate-y-12 ${
            expanded ? "w-full" : "w-auto"
          }`}
        >
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all ${
              expanded ? "w-36" : "w-0"
            }`}
          >
            <img src={Logo} alt="Untitled UI" className=" w-44 h-44" />
          </div>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="p-1.5 text-gray-100 rounded-lg bg-accent-light hover:bg-accent-lighter"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="py-3 border-b border-[hsl(217,20%,45%)] border-opacity-30">
          {mainLinks.map((link) => (
            <SidebarItem
              key={link.id}
              link={link}
              expanded={expanded}
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
              expanded={expanded}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
      </div>
      {/* UPGRADE TO PRO */}
      {expanded ? (
        <>
          <div className="relative mt-14 flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 pb-4">
            <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800">
              <Avatar>
                <AvatarImage src="fero_logo.jpeg" alt="@DevonGifford" />
                <AvatarFallback>F</AvatarFallback>
              </Avatar>

            </div>

            <div className="mt-16 flex h-fit flex-col items-center">
              <p className="text-lg font-bold text-white">Upgrade Fero PRO</p>
              <p className="mt-1 px-4 text-center text-sm text-white">
                Improve your development process and start doing more with Fero
                UI PRO!
              </p>

              <button
                className="text-medium mt-7 block rounded-full bg-gradient-to-b from-white/50 to-white/10 px-11 py-[12px] text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
                onClick={() => window.location.reload()}
              >
                Upgrade to PRO
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </aside>
  );
}

export default Sidebar;
