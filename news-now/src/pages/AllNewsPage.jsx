import styles from "./AllNewsPage.module.css";
import { useGlobalState } from "../context/GlobalStateContext";
import { useState } from "react";
import Navbar from "../components/Navbar";

import { useNews } from "../hooks";
import { articles } from "../data";

import Card from "../components/Card";

const AllNewsPage = () => {
  const { isLoggedIn, setIsLoggedIn, isPayed, setIsPayed } = useGlobalState();
  const [filters, setFilters] = useState({ country: "tw", category: "sports" });

  let data = [];

  // for (let article of useNews(filters)) { // api call
  for (let article of articles) {
    if (
      article.category === filters.category &&
      article.country === filters.country
    ) {
      data.push(article);
    }
  }

  const handleCountryChange = (event) => {
    setFilters((filters) => ({ ...filters, country: event.target.value }));
  };
  const handleCategoryChange = (event) => {
    setFilters((filters) => ({ ...filters, category: event.target.value }));
  };

  return (
    <>
      <div>
        <Navbar />
        AllNewsPage
      </div>
      <div>
        <div>
          <label>
            <input
              type="radio"
              value="ua"
              checked={filters.country === "ua"}
              onChange={handleCountryChange}
            />
            Ukraine
          </label>

          <label>
            <input
              type="radio"
              value="pt"
              checked={filters.country === "pt"}
              onChange={handleCountryChange}
            />
            Portugal
          </label>

          <label>
            <input
              type="radio"
              value="tw"
              checked={filters.country === "tw"}
              onChange={handleCountryChange}
            />
            Taiwan
          </label>

          <p>Selected Option: {filters.country}</p>
        </div>
      </div>

      <div>
        <div>
          <label>
            <input
              type="radio"
              value="health"
              checked={filters.category === "health"}
              onChange={handleCategoryChange}
            />
            health
          </label>

          <label>
            <input
              type="radio"
              value="sports"
              checked={filters.category === "sports"}
              onChange={handleCategoryChange}
            />
            sports
          </label>

          <label>
            <input
              type="radio"
              value="technology"
              checked={filters.category === "technology"}
              onChange={handleCategoryChange}
            />
            technology
          </label>

          <p>Selected Option: {filters.category}</p>
        </div>
      </div>

      <div className={styles.articlesContainer}>
        {data.slice(0, 8).map((article, index) => {
          return <Card key={article.title} article={article} index={index}/>;
        })}
      </div>
    </>
  );
};

export default AllNewsPage;
