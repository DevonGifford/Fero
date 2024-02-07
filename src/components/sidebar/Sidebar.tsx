import { useState } from "react";
import { ChevronLast, ChevronFirst } from "lucide-react";

import Logo from "./../../assets/Logo.svg";
import { additionalLinks, mainLinks } from "./Links";
import SidebarItem from "./SidebarItem";

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
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0923 27.3033H30.8176V36.3143H10.0923V27.3033Z"
                  fill="white"
                />
                <path
                  d="M31.5385 29.1956C31.5385 26.2322 30.3707 23.3901 28.2922 21.2947C26.2136 19.1992 23.3945 18.022 20.4549 18.022C17.5154 18.022 14.6963 19.1992 12.6177 21.2947C10.5392 23.3901 9.37143 26.2322 9.37143 29.1956L20.4549 29.1956H31.5385Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5 31.989C26.8452 31.989 31.989 26.8452 31.989 20.5C31.989 14.1548 26.8452 9.01099 20.5 9.01099C14.1548 9.01099 9.01099 14.1548 9.01099 20.5C9.01099 26.8452 14.1548 31.989 20.5 31.989ZM20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
                  fill="white"
                />
              </svg>
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
