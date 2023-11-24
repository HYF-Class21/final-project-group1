import styles from "./AllNewsPage.module.css";
import { useGlobalState } from "../context/GlobalStateContext";
import { useState } from "react";
import Navbar from "../components/Navbar";

import { useNews } from "../hooks";
import { articles } from "../data";

import Card from "../components/Card";
import RadioButton from "../components/RadioButton";

const AllNewsPage = () => {
  const { isLoggedIn, setIsLoggedIn, isPayed, setIsPayed } = useGlobalState();
  const { globArticles, setGlobArticles, filters, setFilters } = useGlobalState();



  const updateArticles = () => {
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

    setGlobArticles(data)
  }  

  updateArticles();


  

  const handleCountryChange = (event) => {
    setFilters((filters) => ({ ...filters, country: event.target.value }));
    updateArticles();
  };
  const handleCategoryChange = (event) => {
    setFilters((filters) => ({ ...filters, category: event.target.value }));
    updateArticles();
  };

  return (
    <>
      <div>
        <Navbar />
        AllNewsPage
      </div>
      <div>
        <div>
          <RadioButton
            value="us"
            name="United States"
            handleRadioChange={handleCountryChange}
            filters={filters}
            btype="country"
          />
          <RadioButton
            value="ie"
            name="Ireland"
            handleRadioChange={handleCountryChange}
            filters={filters}
            btype="country"
          />
          <RadioButton
            value="pl"
            name="Poland"
            handleRadioChange={handleCountryChange}
            filters={filters}
            btype="country"
          />

          <p>Selected Option: {filters.country}</p>
        </div>
      </div>

      <div>
        <div>
          <RadioButton
            value="health"
            handleRadioChange={handleCategoryChange}
            filters={filters}
            btype="category"
          />
          <RadioButton
            value="entertainment"
            handleRadioChange={handleCategoryChange}
            filters={filters}
            btype="category"
          />
          <RadioButton
            value="general"
            handleRadioChange={handleCategoryChange}
            filters={filters}
            btype="category"
          />
          <RadioButton
            value="science"
            handleRadioChange={handleCategoryChange}
            filters={filters}
            btype="category"
          />
          <RadioButton
            value="sports"
            handleRadioChange={handleCategoryChange}
            filters={filters}
            btype="category"
          />
          <RadioButton
            value="technology"
            handleRadioChange={handleCategoryChange}
            filters={filters}
            btype="category"
          />

          <p>Selected Option: {filters.category}</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}
      >
        {globArticles.map((article) => (
          <Card key={article.title} article={article} />
        ))}
      </div>
    </>
  );
};

export default AllNewsPage;
