import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { InfoIcon, ZapIcon } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Budget Tracker",
    href: "/",
    description:
      "Tracks users' spending against budgets, highlighting overspending areas.",
  },
  {
    title: "Debt Repayment",
    href: "/",
    description:
      "Visualizes progress in paying off debts, accelerating repayment strategies.",
  },
  {
    title: "Portfolio Performance",
    href: "/",
    description:
      "Displays investment portfolio performance, aiding informed decisions.",
  },
  {
    title: "Savings Goals",
    href: "/",
    description:
      "Tracks savings goals progress, providing motivation for users.",
  },
  {
    title: "Expense Trends",
    href: "/",
    description:
      "Visualizes spending patterns, identifies areas for cost-saving measures.",
  },
  {
    title: "Credit Monitoring",
    href: "/",
    description:
      "Monitors credit scores, offering insights for credit health improvement.",
  },
];

export function MiddleMenue() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <InfoIcon size={16} />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/90 to-muted/70 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Avatar>
                      <AvatarImage src="fero_logo.jpeg" alt="@DevonGifford" />
                      <AvatarFallback>F</AvatarFallback>
                    </Avatar>
                    <div className="mb-2 mt-4 text-lg font-medium">Fero</div>
                    <p className="flex flex-col gap-2 text-sm leading-tight text-muted-foreground">
                      <span>
                        Enabling the personalisation of the checkout experience
                        For every Customer.
                      </span>
                      <span>
                        Fero’s mission is to enable bespoke checkout and payment
                        journeys for each individual customers
                      </span>
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Increase Conversions">
                Tailoring the checkout experience on an individual basis.
              </ListItem>
              <ListItem href="/docs/installation" title="Reduce Fraud">
                FERO delivers a fraud solution that isnt binary
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Payment Optimisation"
              >
                Reducing payment costs whilst maintaining impact on conversion
                rates
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <ZapIcon size={18} />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
