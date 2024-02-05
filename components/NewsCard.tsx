import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface NewsProp {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  category: any;
  published: string;
}

interface Prop {
  news: NewsProp;
  index: number;
}

export default function NewsCard({ news }: Prop) {
  const published = news.published.split(" ");
  let date = published[0];
  let time = published[1];

  return (
    <Card className="border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50">
      <a href={news.url}>
        <CardHeader>
          <CardTitle>{news.title}</CardTitle>
          <CardDescription>{news.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          {news.category.map((item: string) => (
            <Badge variant={"outline"} className="capitalize" key={item}>
              {item}
            </Badge>
          ))}
          <Badge variant={"outline"}>Author: {news.author}</Badge>
        </CardContent>
        <CardFooter>
          <Badge variant={"secondary"}>{date}</Badge>
          <Badge variant={"secondary"} className="ml-2">
            {time}
          </Badge>
        </CardFooter>
      </a>
    </Card>
  );
}
