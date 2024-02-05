import { Globe, Search, Text } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

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
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href} className="w-full">
            <Button variant={"secondary"} className="w-full gap-x-2">
              <LinkIcon className="w-6 md:w-4" />
              <p className="hidden md:block">{link.name}</p>
            </Button>
          </Link>
        );
      })}
    </>
  );
}
