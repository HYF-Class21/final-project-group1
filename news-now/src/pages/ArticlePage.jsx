import styles from "./ArticlePage.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Comment from "../components/Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import formatDate from "../utils/formatDate";

import { useGlobalState } from "../context/GlobalStateContext";

const ArticlePage = () => {
  const location = useLocation();
  const id = location.pathname.substring(9, location.pathname.length);
  const { globData } = useGlobalState();
  const [comments, setComments] = useState([]);

  let currentArticle = {};
  for (let article of globData) {
    if (article.id === id) {
      currentArticle = article;
    }
  }

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

  const categoryColor = getCategoryColor(currentArticle.category);
  const countryColor = getCategoryColor(currentArticle.country);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userComment = formData.get("comment");

    setComments([...comments, userComment]);
    console.log(comments, typeof comments);
    event.target.reset();
  };

  return (
    <div className={styles.pageContainer}>
      <div>
      <Navbar />
      <div className={styles.container}>
        {/* the article */}
        <div className={styles.articleDiv}>
          <div className={styles.imageDiv}>
            <img
              className={styles.image}
              src={currentArticle.image}
              alt={currentArticle.title}
            />
          </div>
          <div className={styles.contentDiv}>
            <h1 className={styles.title}>{currentArticle.title}</h1>
            <div className={styles.dateDiv}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  style={{ color: "gray" }}
                />
                <div className={styles.date}>
                  {formatDate(currentArticle.publishedAt)}
                </div>
              </div>
              <div className={styles.categoryDiv}>
                <div
                  className={styles.category}
                  style={{ backgroundColor: categoryColor }}
                >
                  {currentArticle.category}
                </div>
                <div
                  className={styles.category}
                  style={{ backgroundColor: countryColor }}
                >
                  {currentArticle.country}
                </div>
              </div>
            </div>
            <p className={styles.content}>
              {currentArticle.content.substring(
                0,
                currentArticle.content.indexOf("[")
              )}
            </p>

            <div className={styles.buttonDiv}>
              <Link
                to={currentArticle.url}
                className={styles.link}
                target="_blank"
              >
                <button className={styles.button}>
                  Read the article <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.commentsContainer}>
          {/* comments */}
          {comments.map((comment) => (
            <Comment key={comment} comment={comment} />
          ))}

          {/* the form */}
          <form className={styles.commentForm} onSubmit={handleFormSubmit}>
            <label className={styles.label} htmlFor="comment">
              Your comment:
            </label>
            <textarea
              id="comment"
              className={styles.comment}
              name="comment"
              placeholder="Write your comment"
            ></textarea>
            <div className={styles.buttonSendDiv}>
              <button className={styles.buttonSend} type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage;
