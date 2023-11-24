import styles from "./ArticlePage.module.css";
import Navbar from '../components/Navbar';

const ArticlePage = ({article}) => {
  return (
    <div>
      <Navbar />
      <h1>{article.title}</h1>
      article content is : {article.content}
    </div>
  );
};

export default ArticlePage;