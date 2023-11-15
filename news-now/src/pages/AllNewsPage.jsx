import styles from './AllNewsPage.module.css';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

const AllNewsPage = () => {
  for (let news of useNews("us", "sports", "bbc-news")) {
    data.push(news);
  }

  return (
    <>
      <div>
        <Navbar />
        AllNewsPage
      </div>
      {data.map((news) => (
        <div key={news.title}>
          <a href={news.url}>{news.title}</a>
          <div>{news.author}</div>
          <div>{news.description}</div>
          <div>{news.content}</div> <hr />
        </div>
      ))}
        <LoginForm />
    </>
  );
};

export default AllNewsPage;
