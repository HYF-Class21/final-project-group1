import styles from "./AllNewsPage.module.css";
import { useGlobalState } from "../context/GlobalStateContext";
import { useState, useEffect } from "react";
import { useNews } from "../hooks";
import { articles } from "../data";

import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Message from "../components/Message";
import Card from "../components/Card";
import FilterNav from "../components/FilterNav";
import Footer from "../components/Footer";

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

  const [modalActiveMessage, setModalActiveMessage] = useState(false);
  const [modalActiveLogin, setModalActiveLogin] = useState(false);
  const [modalActiveRegister, setModalActiveRegister] = useState(false);
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
    if (counter > 0) {
      setCounter(counter - 1);
    }
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
          <div className={styles.filterContainer}>
            {/* COUNTER */}
            {isLoggedIn && !isPayed ? (
              <div className={styles.counterDiv}>
                <div className={styles.counter}>{counter}</div>
                <p>free articles</p>
              </div>
            ) : (
              ""
            )}
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
                value={filters.country}
                onChange={handleCountryChange}
                className={styles.countrySelect}
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
                  activeLogin={modalActiveLogin}
                  setActiveLogin={setModalActiveLogin}
                  activeRegister={modalActiveRegister}
                  setActiveRegister={setModalActiveRegister}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllNewsPage;
