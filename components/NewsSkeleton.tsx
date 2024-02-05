import { Skeleton } from "@/components/ui/skeleton";

function NewsCardSkeleton() {
  return (
    <>
      <div className="rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
        <div className="flex flex-col space-y-1.5 p-6">
          <div>
            <Skeleton className="h-8 w-1/2" />
          </div>
          <div>
            <Skeleton className="md:h-5 h-28 w-full" />
          </div>
        </div>
        <div className="flex gap-2 p-6 pt-0">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex items-center p-6 pt-0 gap-x-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </>
  );
}

export default function NewsSkeleton() {
  const newsCards = Array.from({ length: 4 }).map((_, index) => (
    <NewsCardSkeleton key={index} />
  ));

  return (
    <>
      <div className="mt-2 grid grid-cols-1 gap-2">{newsCards}</div>
      <div className="mt-2">
        <Skeleton className="h-10 w-full" />
      </div>
    </>
  );
}
