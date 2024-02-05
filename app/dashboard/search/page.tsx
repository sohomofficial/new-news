"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  inputSearch: z.string().min(2).max(50),
});
import Breadcrumb from "@/components/ui/breadcrumb";
import { useCallback, useEffect, useState } from "react";
import NewsCard, { NewsProp } from "@/components/NewsCard";
import { searchNews } from "@/lib/action";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import NewsSkeleton from "@/components/NewsSkeleton";
import { languages } from "@/lib/options";
import { PageNotFound, ServerError } from "@/components/Error";

export default function SearchNews() {
  const [status, setStatus] = useState();
  const [data, setData] = useState<NewsProp[]>([]);
  const [page, setPage] = useState(1);
  const [keywords, setKeywords] = useState("");
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputSearch: "",
    },
  });

  const fetchData = useCallback(async () => {
    try {
      if (keywords) {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const result = await searchNews(page, language, keywords);
        console.log(result);
        setData(result.news);
        setStatus(result.status);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [keywords, language, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setKeywords(values.inputSearch);
    setPage(1);
    setData([]);
    fetchData();
    console.log(values);
  }
  return (
    <main>
      <Breadcrumb main="Dashboard" sub="Search News" />
      <div className="mx-auto mt-6 max-w-2xl lg:mx-0">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Search News
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Looking for something specific? Our powerful search feature allows you
          to find news articles on any topic within seconds. Simply enter your
          keywords, and Newsman will provide you with a comprehensive list of
          relevant articles.
        </p>
      </div>
      <div className="mt-10 flex justify-between gap-x-2">
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
      </div>
      <div className="mt-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="inputSearch"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="search" placeholder="Search" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
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
