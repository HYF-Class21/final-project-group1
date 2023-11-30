import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useGlobalState } from "../context/GlobalStateContext";

import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import RegisterForm from "./RegisterForm";
import MenuNav from "./MenuNav";

const Navbar = () => {
  const { isLoggedIn } = useGlobalState();
  const [modalActiveLogin, setModalActiveLogin] = useState(false);
  const [modalActiveRegister, setModalActiveRegister] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(false);

  const handleMenuClicked = () => {
    setClickedMenu(!clickedMenu);
  };

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
      <h1 className={styles.h1}>NewsNow</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link
            className={styles.a}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={styles.a}
            to="/payments"
          >
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
            <Link
              className={styles.a}
              to="/logout"
            >
              Logout
            </Link>
          </li>
        )}
      </ul>

      {!clickedMenu ? (
        <div className={styles.Icon} onClick={handleMenuClicked}>
          <GiHamburgerMenu />
        </div>
      ) : (
        <div className={styles.menu} onClick={handleMenuClicked}>
          <ImCross />
          <MenuNav />
        </div>
      )}
    </div>
  );
};

export default Navbar;
