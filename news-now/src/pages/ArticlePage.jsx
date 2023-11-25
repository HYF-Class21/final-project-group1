import styles from "./ArticlePage.module.css";
import Navbar from '../components/Navbar';
import React from "react";
// import { useLocation } from 'react-router-dom';

// const ArticlePage = () => {
//   // const location = useLocation();
//   // const article  = location.state.article;

//   return (
//     <div>
//       <Navbar />
//       <h1>{article.title}</h1>
//       article content is : {article.content}
//     </div>
//   );
// };

// export default ArticlePage;

class ArticlePage extends React.Component {
  componentDidMount() {
    console.log("ArticlePage mounted");
    console.log("Props:", this.props.article);
  }

  render() {
    const { article } = this.props;

    return (
      <React.Fragment>
        <Navbar />
        <h1>{article ? article.title : "Loading..."}</h1>
        article content is: {article ? article.content : "Loading..."}
      </React.Fragment>
    );
  }
}


export default ArticlePage;