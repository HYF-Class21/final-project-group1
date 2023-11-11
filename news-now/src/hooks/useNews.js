import { useEffect, useState } from "react";

function useNews() {
  const [data, setData] = useState([]); // our data is an array of articles.
  useEffect(() => {
    let URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=004bee58487d4810bc3da626634d2b85'; 
    fetch(URL)
      .then((apiRes) => apiRes.json())
      .then((resJson) => setData(resJson.articles)) // modify the json we've got if there's metadata to be removed. remove this line otherwise.
      .catch((err) => console.log(err));
  }, []);
  return data;
}

export default useNews;
