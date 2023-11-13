import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNews } from "./hooks";

function App() {
  let data = [];

  for (let news of useNews("us", "sports", "bbc-news")) {
    data.push(news);
  }

  return (
    <>
      {data.map((news) => (
        <div key={news.title}>
          <a href={news.url}>{news.title}</a>
          <div>{news.author}</div>
          <div>{news.description}</div>
          <div>{news.content}</div> <hr />
        </div>
      ))}
    </>
  );
}

export default App;
