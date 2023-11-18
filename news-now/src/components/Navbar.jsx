import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalStateContext";

import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import RegisterForm from "./RegisterForm";

const Navbar = () => {
  const { isLoggedIn } = useGlobalState();
  const [modalActiveLogin, setModalActiveLogin] = useState(false);
  const [modalActiveRegister, setModalActiveRegister] = useState(false);

  return (
    <div className={styles.navbar}>
      <Modal active={modalActiveLogin} setActive={setModalActiveLogin}>
        <LoginForm
          activeLogin={modalActiveLogin}
          setActiveLogin={setModalActiveLogin}
          activeRegister={modalActiveRegister}
          setActiveRegister={setModalActiveRegister}
        />
      </Modal>
      <Modal active={modalActiveRegister} setActive={setModalActiveRegister}>
        <RegisterForm
          activeRegister={modalActiveRegister}
          setActiveRegister={setModalActiveRegister}
          activeLogin={modalActiveLogin}
          setActiveLogin={setModalActiveLogin}
        />
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
          <li className={styles.li} onClick={() => setModalActiveLogin(true)}>
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
