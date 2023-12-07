import styles from "./Card.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../context/GlobalStateContext";
import formatDate from "../utils/formatDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({
  article,
  onClick,
  index,
  activeLogin,
  setActiveLogin,
  activeRegister,
  setActiveRegister,
  activeMessage,
  setActiveMessage,
}) => {
  const { counter, isLoggedIn, isPayed } = useGlobalState();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      toast.warning('Please, log in to read the full article', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } else if (isLoggedIn && counter <= 0 && !isPayed) {
      navigate('/payments');
    } else {
      navigate(`/article/${article.id}`);
    }
  };

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
    <div
      className={`${styles.card} ${styles["art" + index]}`}
      onClick={onClick}
    >
      <div className={styles.imgDiv}>
        <img src={article.image} alt={article.title} />
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
        <div className={styles.title}>
          {article.title.length > 75
            ? `${article.title.substring(
                0,
                article.title.lastIndexOf(" ", 75)
              )}...`
            : article.title}
        </div>
        <div className={styles.description}>
          {article.description.length > 100
            ? `${article.description.substring(
                0,
                article.description.lastIndexOf(" ", 100)
              )}...`
            : article.description}
        </div>

        <div className={styles.buttonDiv}>
          <button
            className={styles.button}
            onClick={handleButtonClick}
          >
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Card;
