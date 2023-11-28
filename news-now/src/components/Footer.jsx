import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section>
            <h3>Register for free</h3>

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
        <section>
            <ul>
        <li>
                  <a href='#!' className='text-white'>
                    
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    
                  </a>
                </li>
                </ul>
        </section>
          {/* example of copyright container  */}
        </section>
        <section className={styles.reg}>
            <div 
            className="text-center"
            style={{ backgroundcolor: "#fff" }}>
                <a className="text-white" href="">
            <h1> News Now</h1>
            </a>

            </div>
 

            <section className={styles.plan}>
                <div className="text-content"
                style={{background:""}}> 
                <a className="text-content" href="#">
                <h1> Payment Plan </h1>
                 </a>                   
                </div>

            </section> 

            
        </section>
        <section className={styles.img}>
            <div className="slide-container"> 


      </div>

        </section>
    </footer>
  );
};

export default Footer;
