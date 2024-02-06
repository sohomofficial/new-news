"use client";

import { useCallback, useEffect, useState } from "react";
import { latestNews } from "@/lib/action";
import NewsCard, { NewsProp } from "@/components/NewsCard";
import Breadcrumb from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { languages, regions, categories } from "@/lib/options";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import NewsSkeleton from "@/components/NewsSkeleton";
import { PageNotFound, ServerError } from "@/components/Error";

export default function LatestNews() {
  const [status, setStatus] = useState();
  const [data, setData] = useState<NewsProp[]>([]);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("");
  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const result = await latestNews(page, language, region, category);
      setData(result.news);
      setStatus(result.status);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [page, language, region, category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setPage(1);
  }, [language, region, category]);

  return (
    <main>
      <Breadcrumb main="Dashboard" sub="Latest News" />
      <div className="mx-auto mt-6 max-w-2xl lg:mx-0">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Latest News
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Stay informed with the most recent news articles from around the
          world. Our curated selection ensures that you receive the most
          relevant andimportant stories, saving you time and effort.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 justify-between gap-2">
        <Select onValueChange={(value) => setLanguage(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((item) => (
              <SelectItem key={item.name} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setRegion(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((item) => (
              <SelectItem key={item.name} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-full col-span-3 md:col-span-1 capitalize">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((item) => (
              <SelectItem key={item} value={item} className="capitalize">
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {loading ? (
        <NewsSkeleton />
      ) : status === undefined ? null : status !== "ok" ? (
        <div className="mt-2 flex items-center justify-center">
          <ServerError />
        </div>
      ) : data.length == 0 ? (
        <div className="mt-2 flex items-center justify-center">
          <PageNotFound />
        </div>
      ) : (
        <>
          <div className="mt-2 grid grid-cols-1 gap-2">
            {data.map((item: NewsProp, index: number) => (
              <NewsCard key={item.id} news={item} index={index} />
            ))}
          </div>
          <div className="mt-2 flex justify-between gap-x-2">
            {page > 1 && (
              <Button
                onClick={() => setPage(page - 1)}
                variant={"outline"}
                className="w-full"
              >
                <ChevronLeft className="h-4 w-4 mr-2" /> Previous
              </Button>
            )}
            {page > 1 && (
              <Button variant={"ghost"} disabled className="w-full">
                <MoreHorizontal />
              </Button>
            )}
            <Button
              onClick={() => setPage(page + 1)}
              variant={"outline"}
              className="w-full"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </>
      )}
    </main>
  );
}
