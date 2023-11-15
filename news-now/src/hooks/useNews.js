import { useEffect, useState } from "react";
import { myLoremIpsum } from "../data";

function useNews(country='us', category, sources) {
  const [data, setData] = useState([]); // our data is an array of articles.

  useEffect(() => {
    const countryToURL = `country=${country}&`; // at least 1 parameter must be defined. let it be country, us will be default
    const categoryToURL = category ? "" : `category=${category}&`;
    const sourcesToURL = sources ? "" : `sources=${sources}&`;

    let URL = `https://newsapi.org/v2/top-headlines?${countryToURL}${categoryToURL}${sourcesToURL}apiKey=004bee58487d4810bc3da626634d2b85`;
    console.log(URL)
    fetch(URL)
      .then((apiRes) => apiRes.json())
      .then((resJson) => {
        let articles = resJson.articles;
        for (let article of articles) {
          if (article.content === null) {
            article.content = myLoremIpsum; // no content = assign a simple lorem ipsum to content
          }
          if (article.author === null) {
            article.content = "U.N. Owen"; // U.N. Owen = unknown
          }
          if (article.description === null) {
            article.description = article.content.slice(0, 50); // no description = display first 50 letters of content
          }
          if (article.url === null) {
            article.description = 'https://www.bbc.com/'; // no description = let's redirect them to bbc main page
          }
        }
        setData(articles);
      })
      .catch((err) => console.log(err));

  }, []);
  return data;
}

export default useNews;
