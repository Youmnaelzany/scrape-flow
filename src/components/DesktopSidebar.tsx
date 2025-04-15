"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from "lucide-react";

import Logo from "./Logo";
import { buttonVariants } from "./ui/button";

const routes = [
  { label: "Home", href: "", icon: HomeIcon },
  { label: "Workflows", href: "workflows", icon: Layers2Icon },
  { label: "Credentials", href: "credentials", icon: ShieldCheckIcon },
  { label: "Billing", href: "billing", icon: CoinsIcon },
];

export default function DesktopSidebar() {
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathName.includes(route.href)
    ) || routes[0];
  return (
    <div className="bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground relative hidden h-screen w-full max-w-[280px] min-w-[280px] border-separate overflow-hidden border-r-2 md:block">
      <div className="flex border-separate items-center justify-center gap-2 border-b-1 p-4">
        <Logo />
      </div>
      <div className="p-2">TODO CREDITS</div>
      <div className="flex flex-col p-2">
        {routes.map((route) => {
          return (
            <Link
              href={route.href}
              key={route.label}
              className={buttonVariants({
                variant:
                  activeRoute.href === route.href
                    ? "sidebarItemActive"
                    : "sidebarItem",
              })}
            >
              <route.icon size={20} />
              {route.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
