

import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faSnapchat, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";





const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section>
          <a href="#">
            <h3>News Now</h3>
          </a>
            <form>
                <input type="email"></input>
                <button type="button" className="btnSignup">
                    Sign up!
                </button>
            </form>
        </section>
        <section className={styles.info}>
            <form>
              <div
                className="text-center"
                style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)", }}>
              </div>
              <a className="text-white" href="#">
                <h2>2023 © News Now </h2>
              </a>
          
            </form>
       
          {/* example of copyright container  */}
        </section>
        <section className={styles.icons}>
          <div 
            className="icon-fb"
            style={{ backgroundcolor: "#fff" }}>
              <a className="icon-fb" href="#">
                <FontAwesomeIcon icon={faFacebook}  style={{ color: "#fff", fontSize: "30px"}} />
              </a>
                <a className="icon-sc" href="#">
                   <FontAwesomeIcon icon={faSnapchat}  style={{ color: "#fff", fontSize: "30px"}} />
                </a>
                    <a className="icon-inst" href="#">
                      <FontAwesomeIcon icon={faInstagram}  style={{ color: "#fff", fontSize: "30px"}} />
                    </a>
                    <a className="icon-twit" href="#">
                      <FontAwesomeIcon icon={faTwitter}  style={{ color: "#fff", fontSize: "30px"}} />
                    </a>

                   
          </div>
        </section>   
    </footer>
  );
};

export default Footer;
