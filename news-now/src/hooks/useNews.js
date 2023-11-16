import { useEffect, useState } from "react";
import { myLoremIpsum } from "../data";

function useNews(filters) {
  const [data, setData] = useState([]); // our data is an array of articles.

  useEffect(() => {
    const countryToURL = `country=${filters.country}&`;
    const categoryToURL = `category=${filters.category}&`;

    let URL = `https://newsapi.org/v2/top-headlines?${countryToURL}${categoryToURL}apiKey=004bee58487d4810bc3da626634d2b85`;
    console.log(URL);
    fetch(URL)
      .then((apiRes) => apiRes.json())
      .then((resJson) => {
        let articles = resJson.articles;
        for (let article of articles) {
          if (article.content === null) {
            article.content = myLoremIpsum; // no content = assign a simple lorem ipsum to content
          }
          if (article.author === null) {
            article.author = "U.N. Owen"; // U.N. Owen = unknown
          }
          if (article.description === null) {
            article.description = article.content.slice(0, 50); // no description = display first 50 letters of content
          }
          if (article.url === null) {
            article.url = "https://www.bbc.com/"; // no description = let's redirect them to bbc main page
          }
          if (article.urlToImage === null) {
            article.urlToImage = "../unavailable-image.jpg"; // no description = let's redirect them to bbc main page
          }
        }
        setData(articles);
      })
      .catch((err) => console.log(err));
  }, [filters]);
  return data;
}

export default useNews;
