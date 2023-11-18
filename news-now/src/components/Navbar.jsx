import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalStateContext";

import Modal from "../components/Modal";

const Navbar = () => {
  const { isLoggedIn } = useGlobalState();
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.navbar}>
      <Modal active={modalActive} setActive={setModalActive}>
        <h1>Here will be the login and register forms!</h1>
      </Modal>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.a} to="/">
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.a} to="/payments">
            Payment Plans
          </Link>
        </li>
        {!isLoggedIn ? (
          <li className={styles.li} onClick={() => setModalActive(true)}>
            <Link className={styles.a} to="">
              Login
            </Link>
          </li>
        ) : (
          <li className={styles.li}>
            <Link className={styles.a} to="/logout">
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
