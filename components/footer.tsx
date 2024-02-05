import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <div className="flex gap-4 font-medium items-center md:justify-start justify-center">
        <Image
          width={40}
          height={40}
          src="/pfp.png"
          className="rounded-full"
          alt="Sohom Mondal"
        />
      </div>
      <p className="text-sm font-medium leading-none sm:pl-4 sm:py-2 sm:mt-0 mt-4">
        Created by{" "}
        <a
          href="https://github.com/sohomofficial"
          className="font-bold hover:underline underline-offset-4"
        >
          Sohom Mondal
        </a>
      </p>
      <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-4 items-center justify-center sm:justify-start">
        <span className="text-sm font-medium leading-none">
          Give it a ⭐ on
        </span>
        <a href="https://github.com/sohomofficial/newsman">
          <Button size={"icon"}>
            <Github className="h-6 w-6" />
          </Button>
        </a>
      </span>
    </footer>
  );
}
