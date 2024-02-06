import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-3 py-4 md:px-2">
      <div className="flex flex-col gap-2 h-32 p-6 rounded-lg text-center items-center justify-center border md:h-40 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
        Newsman
        <span className="text-sm md:text-base font-medium leading-none">
          The news aggregator that brings the world to your fingertips.
        </span>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg border px-6 py-10 md:w-2/5 md:px-20">
          <Badge className="w-fit">
            <div className="flex items-center gap-x-2">
              <PartyPopper className="h-4 w-4" />
              New updated UI
            </div>
          </Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Welcome to Newsman
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Tired of hopping from website to website, sifting through endless
            clickbait, and drowning in information overload? Newsman cuts
            through the noise, delivering a streamlined, personalized news
            experience that keeps you informed without wasting your time.
          </p>
          <Link href="/dashboard">
            <Button className="w-full">Go to Dashboard &rarr;</Button>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/preview.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Preview"
          />
          <Image
            src="/preview.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Preview"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
