import Image from "next/image";

export function ServerError() {
  return (
    <div className="p-6 md:w-3/5 md:px-28 md:py-12">
      <h3 className="scroll-m-20 text-center text-2xl font-semibold tracking-tight">
        500 Internal Server Error
      </h3>
      <Image
        src="/server-error.svg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Server Error"
      />
      <Image
        src="/server-error.svg"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Server Error"
      />
    </div>
  );
}

export function PageNotFound() {
  return (
    <div className="p-6 md:w-3/5 md:px-28 md:py-12">
      <h3 className="scroll-m-20 text-center text-2xl font-semibold tracking-tight">
        Page not Found
      </h3>
      <Image
        src="/not-found.svg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Page not found"
      />
      <Image
        src="/not-found.svg"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Page not found"
      />
    </div>
  );
}
