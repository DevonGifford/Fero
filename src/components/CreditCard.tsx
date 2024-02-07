import { useState } from "react";
import { Card } from "@tremor/react";
import {
  Cloud,
  CreditCard,
  LifeBuoy,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Settings2Icon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function CreditCards() {
  const [position, setPosition] = useState("top");

  return (
    <Card className="rounded-[20px] p-6">
      <div className="bg-white flex flex-col justify-center items-center">
        <div className="flex flex-row w-full justify-between pb-2">
          <h2 className="font-semibold text-xl tracking-wider">Active Cards</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <h2 className="font-semibold text-base tracking-wider transition-transform transform hover:scale-125 cursor-pointer">
                <Settings2Icon />{" "}
              </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 -translate-x-14">
              <DropdownMenuLabel>Your Card Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Your Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing History</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Card Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Active Users</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Add users</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Message</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        <span>More...</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>New Team</span>
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Cloud className="mr-2 h-4 w-4" />
                <span>API</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="space-y-8">
          {/* CARD 1 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="w-80 h-52 m-auto bg-red-100 rounded-xl  text-white shadow-2xl transition-transform transform hover:scale-110 cursor-pointer">
                <img
                  className=" object-cover w-full h-full rounded-xl"
                  src="https://i.imgur.com/kGkSg1v.png"
                />

                <div className="w-full px-8 absolute top-6">
                  <div className="flex justify-between">
                    <div className="">
                      <p className="font-light">Name</p>
                      <p className="font-medium tracking-widest">
                        Devon Gifford
                      </p>
                    </div>
                    <img
                      className="w-14 h-14"
                      src="https://i.imgur.com/bbPHJVe.png"
                    />
                  </div>
                  <div className="pt-1">
                    <p className="font-light">Card Number</p>
                    <p className="font-medium tracking-more-wider">
                      **** **** **** 7632
                    </p>
                  </div>
                  <div className="pt-6 pr-6">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-light text-xs">Valid</p>
                        <p className="font-medium tracking-wider text-sm">
                          11/15
                        </p>
                      </div>
                      <div className="">
                        <p className="font-light text-xs">Expiry</p>
                        <p className="font-medium tracking-wider text-sm">
                          03/25
                        </p>
                      </div>

                      <div className="">
                        <p className="font-light text-xs">CVV</p>
                        <p className="font-bold tracking-more-wider text-sm">
                          ···
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Current Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">
                  Active
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  On Hold
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* ADD CARD */}
          <div
            className="flex flex-col justify-center items-center pt-3 transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => {
              window.location.reload();
            }}
          >
            <PlusCircle />
            <p className="text-base font-semibold tracking-widest py-3">
              Add Card
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CreditCards;

{
  /* CARD 2 */
}
{
  /* <div className=" w-80 h-52 m-auto bg-red-100 rounded-xl  text-white shadow-2xl transition-transform transform hover:scale-110">
            <img
              className=" object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/Zi6v09P.png"
            />

            <div className="w-full px-8 absolute top-6">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light">Name</p>
                  <p className="font-medium tracking-widest">Devon Gifford</p>
                </div>
                <img
                  className="w-14 h-14"
                  src="https://i.imgur.com/bbPHJVe.png"
                />
              </div>
              <div className="pt-1">
                <p className="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">
                  4642 3489 9867 7632
                </p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light text-xs">Valid</p>
                    <p className="font-medium tracking-wider text-sm">11/15</p>
                  </div>
                  <div className="">
                    <p className="font-light text-xs">Expiry</p>
                    <p className="font-medium tracking-wider text-sm">03/25</p>
                  </div>

                  <div className="">
                    <p className="font-light text-xs">CVV</p>

                    <p className="font-bold tracking-more-wider text-sm">···</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */
}
