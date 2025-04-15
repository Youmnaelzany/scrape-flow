"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Logo from "./Logo";
import { Button, buttonVariants } from "./ui/button";

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

export function MobileSidebar() {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathName.includes(route.href)
    ) || routes[0];
  return (
    <div className="bg-background block border-separate md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] space-y-4 sm:w-[540px]"
            side="left"
          >
            <Logo />
            <div className="flex flex-col gap-1">
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
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <route.icon size={20} />
                    {route.label}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
