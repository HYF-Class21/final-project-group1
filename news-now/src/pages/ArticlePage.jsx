import styles from "./ArticlePage.module.css";
import Navbar from '../components/Navbar';
import React from "react";
// import { useLocation } from 'react-router-dom';

const ArticlePage = ({article}) => {
  // const location = useLocation();
  // const article  = location.state.article;

  return (
    <div>
      <Navbar />
      <h1>{article.title}</h1>
      article content is : {article.content}
    </div>
  );
};

export default ArticlePage;