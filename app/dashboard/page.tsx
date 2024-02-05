import Breadcrumb from "@/components/ui/breadcrumb";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Latest News at Your Fingertips",
    description:
      "Stay informed with the most recent news articles from around the world. Our curated selection ensures that you receive the most relevant andimportant stories, saving you time and effort.",
  },
  {
    title: "Customized News Filtering",
    description:
      "Tired of irrelevant news cluttering your feed? With Newsman, you cansort news articles based on your preferred regions, categories, and language preferences. Tailor your news feed to suit your specific interests and stay focused on what matters to you.",
  },
  {
    title: "Powerful Search Functionality",
    description:
      "Looking for something specific? Our powerful search feature allows you to find news articles on any topic within seconds. Simply enter your keywords, and Newsman will provide you with a comprehensive list of relevant articles.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "We understand the importance of a seamless user experience. Newsman's clean and intuitive interface ensures that you can navigate through the app effortlessly, making your news consumption a breeze.",
  },
];

const points = [
  "Results may take longer time to load as expected in times of various user scenarios as the API searches through ten millions of articles over 14,000 large and small news sources and blogs before delivering it to you.",
  "In case the API fails to fetch the news based on a particular prompt, it's going to throw an Internal Server Error.",
  "In case the API succeds to fetch the news based on a particular prompt, but returns an empty array, Page Not Found will be shown.",
  "If a result takes way too longer to show, please consider refreshing the page and try again.",
];

export default function page() {
  return (
    <>
      <Breadcrumb main="Dashboard" sub="Introduction" />
      <div className="mx-auto mt-6 max-w-2xl lg:mx-0">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Introduction
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          At Newsman, we understand how overwhelming it can be to navigate
          through numerous websites to find reliable news. That&apos;s why
          we&apos;ve created a powerful web app that puts the latest and most
          relevant news your fingertips, all in one convenient place.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <h2 className="mt-6 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Know before you go
      </h2>
      <p className="leading-7 max-w-2xl [&:not(:first-child)]:mt-6">
        As newsman is an underdevelopment project right now, it might happen
        that you might not be getting your desired results at times. Here are
        some of the things you should know before considering Newsman.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {points.map((item) => (
          <Card key={item}>
            <CardHeader>
              <CardDescription>{item}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <hr className="my-6" />
    </>
  );
}
