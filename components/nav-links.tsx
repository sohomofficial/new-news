"use client";
import { Globe, Search, Text } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { name: "Introduction", href: "/dashboard", icon: Text },
  { name: "Latest News", href: "/dashboard/latest", icon: Globe },
  {
    name: "Search News",
    href: "/dashboard/search",
    icon: Search,
  },
];

export default function NavLinks() {
  const currentPath = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href} className="w-full">
            <Button
              variant={"secondary"}
              className={cn(
                "w-full gap-x-2",
                currentPath === link.href
                  ? "dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-100/80 bg-slate-800 text-slate-50 hover:bg-slate-800/80"
                  : ""
              )}
            >
              <LinkIcon className="w-6 md:w-4" />
              <p className="hidden md:block">{link.name}</p>
            </Button>
          </Link>
        );
      })}
    </>
  );
}
