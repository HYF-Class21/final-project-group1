import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.social}>
        <a href="https://github.com/HYF-Class21/final-project-group1" target="_blank">
          <FontAwesomeIcon icon={faGithub} className={styles.socialIcons} />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons} />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className={styles.socialIcons} />
        </a>
        <a href="https://twitter.com" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className={styles.socialIcons} />
        </a>
      </div>
      <p>2023 © News Now </p>
    </div>
  );
};

export default Footer;
