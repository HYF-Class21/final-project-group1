import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";






const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section>
            <h3>News Now</h3>

            <form>
                <input type="email"></input>
                <button type="button" className="btnSignup">
                    Sign up!
                </button>
            </form>
        </section>
        <section className={styles.info}>
             {/* example of copyright container  */}
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
        <section className={styles.reg}>
            <div 
            className="icon"
            style={{ backgroundcolor: "#fff" }}>
                <a className="icon" href="">
                <FontAwesomeIcon icon={faFacebook}  style={{ color: "#fff", fontSize: "30px"}} />
               

            </a>

            </div>
        </section>

        
    </footer>
  );
};

export default Footer;
