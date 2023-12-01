import styles from "../pages/AllNewsPage.module.css";
import React from "react";

const FilterNav = ({ value, name = value, handleFilterChange, activeFilter, filterType }) => {
  const isSelected = activeFilter === value;

  const handleClick = () => {
    handleFilterChange(filterType, value);
  };

  return (
    <span
      className={`${styles.filterOption} ${isSelected ? styles.selectedCategory : ''}`}
      onClick={handleClick}
    >
      {name}
    </span>
  );
};

export default FilterNav;