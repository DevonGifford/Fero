import { ReceiptEuro, Settings, ShieldPlus, UserRoundCog } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LuPanelLeftOpen } from "react-icons/lu";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-row items-center gap-2">
          <p className="cursor-pointer font-semibold">Devon Gifford</p>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/118319299?v=4"
                alt="@DevonGifford"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-80 mt-2" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1 py-2 pl-1 tracking-widest">
            <p className="text-xl font-medium leading-none">@DevonGifford</p>
            <p className="text-sm leading-none text-muted-foreground ml-5">
              devongifford@outlook.com
            </p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserRoundCog size={16} className="text-gray-600 mr-2" />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ReceiptEuro size={16} className="text-gray-600 mr-2" />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings size={16} className="text-gray-600 mr-2" />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <a href="https://devongifford.vercel.app/" target="_blank">
          <DropdownMenuItem>
            <LuPanelLeftOpen size={16} className="text-gray-600 mr-2" />
            Devon's Portfolio
          </DropdownMenuItem>
        </a>

        <a href="https://github.com/DevonGifford" target="_blank">
          <DropdownMenuItem>
            <FaLinkedin size={16} className="text-gray-600 mr-2" />
            Devon's LinkedIn
          </DropdownMenuItem>
        </a>

        <a href="https://www.linkedin.com/in/dbgifford/" target="_blank">
          <DropdownMenuItem>
            <FaGithub size={16} className="text-gray-600 mr-2" />
            Devon's GitHub
          </DropdownMenuItem>
        </a>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <ShieldPlus size={16} className="text-gray-600 mr-2" />
          Fero Pro
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdown;
