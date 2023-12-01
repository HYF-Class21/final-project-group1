import styles from "./AllNewsPage.module.css";
import { useGlobalState } from "../context/GlobalStateContext";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import { useNews } from "../hooks";
import { articles } from "../data";

import Card from "../components/Card";
import FilterNav from '../components/FilterNav';

const AllNewsPage = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    isPayed,
    setIsPayed,
    counter,
    setCounter,
    globData,
    setGlobData,
  } = useGlobalState();

  const [filters, setFilters] = useState({ country: "us", category: "sports" });

  const getGlobData = () => {
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
    setGlobData(data);
  };

  useEffect(() => {
    getGlobData();
  }, [filters]);

  const handleCountryChange = (event) => {
    setFilters((filters) => ({ ...filters, country: event.target.value }));
  };

  const handleCategoryChange = (event) => {
    setFilters((filters) => ({ ...filters, category: event.target.value }));
  };

  const handleCounter = () => {
    setCounter(counter - 1);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <div className={styles.newsContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <div>
          {isLoggedIn && !isPayed ? (
            <div className={styles.counter}>{counter} free articles</div>
          ) : (
            ""
          )}
          <div className={styles.filterContainer}>
            {/* CATEGORIES */}
            <div className={styles.categories}>
              <FilterNav
                value="health"
                name="Health"
                handleFilterChange={handleFilterChange}
                activeFilter={filters.category}
                filterType="category"
              />
              <FilterNav
                value="entertainment"
                name="Entertainment"
                handleFilterChange={handleFilterChange}
                activeFilter={filters.category}
                filterType="category"
              />
              <FilterNav
                value="general"
                name="General"
                handleFilterChange={handleFilterChange}
                activeFilter={filters.category}
                filterType="category"
              />
              <FilterNav
                value="science"
                name="Science"
                handleFilterChange={handleFilterChange}
                activeFilter={filters.category}
                filterType="category"
              />
              <FilterNav
                value="sports"
                name="Sports"
                handleFilterChange={handleFilterChange}
                activeFilter={filters.category}
                filterType="category"
              />
              <FilterNav
                value="technology"
                name="Technology"
                handleFilterChange={handleFilterChange}
                activeFilter={filters.category}
                filterType="category"
              />
              {/* <p>Selected Option: {filters.category}</p> */}
          </div>
          {/* COUNTRIES */}
          <div className={styles.countries}>
            <label htmlFor="countrySelect">Select Country:</label>
            <select
              id="countrySelect"
              value={filters.country}
              onChange={handleCountryChange}
              className={`${styles.select} ${styles.blackAndWhite}`}
            >
              <option value="us">United States</option>
              <option value="pl">Poland</option>
              <option value="ie">Ireland</option>
            {/* Add more countries as needed */}
            </select>
            {/* <p>Selected Option: {filters.country}</p> */}
            
          
          </div>
        </div>
          <div className={styles.articlesContainer}>
            {globData.slice(0, 10).map((article, index) => {
              return (
                <Card
                  key={article.title}
                  article={article}
                  index={index}
                  onClick={handleCounter}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNewsPage;
