import { MobileNav } from "./MobileNav";
import { MiddleMenue } from "./MiddleMenu";
import { SearchCommand } from "./SearchCommand";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-1 pt-2">
      {/* HEADING */}
      <div className="hidden lg:flex flex-row gap-2 items-baseline">
        <span className="text-lg tracking-widest font-semibold">mock</span>/
        <span className="text-2xl tracking-widest font-semibold">
          Dashboard
        </span>
        <MiddleMenue />
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
      {/* MOBILE SHEET */}
      <div className="flex flex-row gap-4 items-center">
        <SearchCommand />
        {/* PERSONAL */}
        <UserDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
