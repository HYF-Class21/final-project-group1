import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.a} to="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.a} to="">Login</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.a} to="/payments">Payment Plans</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.a} to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
