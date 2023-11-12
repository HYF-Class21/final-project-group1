import styles from './AllNewsPage.module.css';
import Navbar from '../components/Navbar';

const AllNewsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="article-card">
          <div className="book-details-parts">
              <img src={urlToImage} alt={title} />
          </div>
          <div className="details">
              <p className="date">{publishedAt}</p>
              {/* <p classname="category">Business</p> */}
          </div>
          <div className="content">
              <h2 className="title">{title}</h2>
              <p className="description">{description}</p>
          </div>
      </div>
    </div>
  )
}

export default AllNewsPage;