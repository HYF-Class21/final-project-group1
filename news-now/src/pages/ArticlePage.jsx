import styles from "./ArticlePage.module.css";
import Navbar from "../components/Navbar";
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

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
    <div>
      {/* the article */}
      <Navbar />
      <h1>{currentArticle.title}</h1>
      <img
        style={{ width: "50%", height: "50%" }}
        src={currentArticle.image}
        alt={currentArticle.title}
      />
      <p> article content is : {currentArticle.content} </p>
      <br />

      {comments.map((comment) => (
        <>
          <p>{comment}</p>
          <br />
        </>
      ))}

      {/* the form */}
      <form onSubmit={handleFormSubmit}>
        <p>
          <label htmlFor="w3review">Review of W3Schools:</label>
        </p>
        <textarea id="comment" name="comment" rows="8" cols="100">
          comment here john
        </textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ArticlePage;
