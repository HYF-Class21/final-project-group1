import styles from "./ArticlePage.module.css";
import Navbar from "../components/Navbar";
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Comment from "../components/Comment";

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userComment = formData.get("comment");

    setComments([...comments, userComment]);
    console.log(comments, typeof comments);
    event.target.reset();
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* the article */}

        <h1 className={styles.title}>{currentArticle.title}</h1>
        <img
          className={styles.image}
          src={currentArticle.image}
          alt={currentArticle.title}
        />
        <p>{currentArticle.content} </p>
      </div>
      <div className={styles.container}>
        {/* comments */}
        {comments.map((comment) => (
          <>
            <Comment key={comment} comment={comment} />
            <br />
          </>
        ))}

        {/* the form */}
        <form onSubmit={handleFormSubmit}>
          <p>
            <label htmlFor="comment">Your comments:</label>
          </p>
          <textarea
            id="comment"
            className={styles.comment}
            name="comment"
            placeholder="Write a comment"
          ></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ArticlePage;
