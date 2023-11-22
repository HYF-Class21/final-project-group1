import React from "react";
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section>
            <h3>News Now</h3>
            <form>
                <input type="email"></input>
                <button type="button" outline color="#000">
                    Sign up!
                </button>
            </form>

        </section>
        <section className={styles.info}>
             {/* example of copyright container  */}
          <div
            className="text-center"
            style={{ backgroundcolor: "#fff" }}>
          </div>
          <a className="text-white" href="">
            <h2>2023 © News Now </h2>
          </a>

          <from>
            
          </from>
          {/* example of copyright container  */}
        </section>
        <section className={styles.reg}>
            <div 
            className="text-center"
            style={{ backgroundcolor: "#fff" }}>
                <a className="text-white" href="">
            <h1> Register for free</h1>
            </a>

            </div>

            
        </section>
        <section className={styles.img}>
            <div className="img-right">
            
            <figure>
                <img src="/planning/assets/APTOPIX_Israel_Palestinians_21141308899687.webp" alt="war of 2 countries"/>
            </figure>
           <figure>
            <img src="/planning/assets/_118492869_happeningsinpalestine2021bidennethanyautokonpalestine-israelcrisisupdates.jpg" alt="war of 2 countries"/>
            
           </figure>
           <figure>
            <img src="/planning/assets/P6IUZDCOXNKWZA4VN5UKBQSLWI.jpg" alt="President Putin"/>
           </figure>
           <figure>
            <img src="/planning/assets/russian-soldier.avif" alt="Russia soldier"/>
           </figure>
      </div>

        </section>
    </footer>
  );
};

export default Footer;
