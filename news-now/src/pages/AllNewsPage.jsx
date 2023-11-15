import styles from "./AllNewsPage.module.css";
import { useGlobalState } from '../context/GlobalStateContext';

import Navbar from "../components/Navbar";

import { useNews } from "../hooks";

const AllNewsPage = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    isPayed,
    setIsPayed
  } = useGlobalState();


  let data = [];

  for (let news of useNews("us", "sports", "bbc-news")) {
    data.push(news);
  }

  return (
    <>
      <div>
        <Navbar />
        AllNewsPage
      </div>
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
};

export default AllNewsPage;
