import styles from "./Card.module.css";
import { Link } from "react-router-dom";
// import { useGlobalState } from "../context/GlobalStateContext";

const Card = ({ article, onClick }) => {

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.img}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={article.image}
          alt={article.title}
        />
      </div>
      <div className={styles.border}></div>
      <div className={styles.border}>
        <div className={styles.bold}>{article.title}</div>
        <br />
        <div className={styles.gray}>{article.author}</div>
      </div>

      <div className={styles.border}>{article.description}</div>
    </div>
  );
};

export default Card;
