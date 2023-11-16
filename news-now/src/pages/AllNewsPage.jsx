import styles from "./AllNewsPage.module.css";
import { useGlobalState } from "../context/GlobalStateContext";
import { useState } from "react";
import Navbar from "../components/Navbar";

import { useNews } from "../hooks";

import Card from "../components/Card";

const AllNewsPage = () => {
  const { isLoggedIn, setIsLoggedIn, isPayed, setIsPayed } = useGlobalState();
  const [filters, setFilters] = useState({ country: "us", category: "sports" });

  let data = [];

  for (let article of useNews(filters)) {
    data.push(article);
  }

  const handleCountryChange = (event) => {
    setFilters((filters) => ({ ...filters, country: event.target.value }));
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
              value="us"
              checked={filters.country === "us"}
              onChange={handleCountryChange}
            />
            United States
          </label>

          <label>
            <input
              type="radio"
              value="be"
              checked={filters.country === "be"}
              onChange={handleCountryChange}
            />
            Belgium
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

          <p>Selected Option: {filters.country}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}
      >
        {data.map((article) => (
          <Card key={article.title} article={article} />
        ))}
      </div>
    </>
  );
};

export default AllNewsPage;
