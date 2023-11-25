import styles from "./Card.module.css";
import { Link } from "react-router-dom";
// import { useGlobalState } from "../context/GlobalStateContext";
import formatDate from "../utils/formatDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ article, index }) => {
  const categoryColors = [
    ["us", "yellow"],
    ["ie", "#e74c3c"],
    ["pl", "#2ecc71"],
    ["health", "#1abc9c"],
    ["entertainment", "#d35400"],
    ["general", "#27ae60"],
    ["science", "#f1c40f"],
    ["sports", "#8e44ad"],
    ["technology", "#3498db"],
  ];

  const getCategoryColor = (category) => {
    const foundCategory = categoryColors.find(
      ([cat, color]) => cat === category
    );
    return foundCategory ? foundCategory[1] : "#ccc";
  };
  const categoryColor = getCategoryColor(article.category);
  const countryColor = getCategoryColor(article.country);

  return (
    <div className={`${styles.card} ${styles["art" + index]}`}>
      <div className={styles.imgDiv}>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          src={article.image}
          alt={article.title}
        />
      </div>
      <div className={styles.contentDiv}>
        <div className={styles.dateDiv}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faCalendarDays} style={{ color: "gray" }} />
            <div className={styles.date}>{formatDate(article.publishedAt)}</div>
          </div>
          <div className={styles.categoryDiv}>
            <div
              className={styles.category}
              style={{ backgroundColor: categoryColor }}
            >
              {article.category}
            </div>
            <div
              className={styles.category}
              style={{ backgroundColor: countryColor }}
            >
              {article.country}
            </div>
          </div>
        </div>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.description}>{article.description}..</div>
        <div className={styles.buttonDiv}>
          <button className={styles.button}>
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
