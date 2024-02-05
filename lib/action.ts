"use server";

const url = "https://api.currentsapi.services/v1";
const endpoints = {
  latestnews: "/latest-news",
  searchnews: "/search",
};

const pageSize = 4;

export const latestNews = async (
  page: number,
  language: string,
  region: string,
  category: string
) => {
  let req = `${url + endpoints.latestnews}?language=${language}&apiKey=${
    process.env.API_TOKEN
  }&page_number=${page}&page_size=${pageSize}`;
  region ? (req += `&country=${region}`) : req;
  category ? (req += `&category=${category}`) : req;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(req);
  const data = await response.json();
  return data;
};

export const searchNews = async (
  page: number,
  language: string,
  keywords: string
) => {
  var req = `${
    url + endpoints.searchnews
  }?language=${language}&keywords=${keywords}&apiKey=${
    process.env.API_TOKEN
  }&page_number=${page}&page_size=${pageSize}`;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(req);
  const data = await response.json();
  return data;
};
