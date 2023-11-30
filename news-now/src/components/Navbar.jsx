import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMoneyBills,
  faUser,
  faRightFromBracket,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
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

  let location = useLocation();

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
      <div className={styles.logoDiv}>
        <h1 className={styles.h1}>NewsNow</h1>
        <FontAwesomeIcon
          icon={faNewspaper}
          style={{ color: "#ffffff", fontSize: "70px"}}
        />
      </div>
      <div className={styles.logo}></div>
      <ul className={styles.ul}>
        <li className={`${styles.li} ${location.pathname === "/" ? styles.activeLink : ""}`}>
          <Link className={styles.a} to="/">
            Home
          </Link>
          <FontAwesomeIcon
            icon={faHouse}
            style={{ color: "#ffffff", fontSize: "25px" }}
          />
        </li>
        <li className={styles.li}>
          <Link className={`${styles.a} ${location.pathname === "/payments" ? styles.activeLink : ""}`} to="/payments">
            Payment Plans
          </Link>
          <FontAwesomeIcon
            icon={faMoneyBills}
            style={{ color: "#ffffff", fontSize: "27px" }}
          />
        </li>
        {!isLoggedIn ? (
          <li className={styles.li} onClick={() => setModalActiveLogin(true)}>
            <Link className={styles.a} to="">
              Login
            </Link>
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#ffffff", fontSize: "25px" }}
            />
          </li>
        ) : (
          <li className={styles.li}>
            <Link className={`${styles.a} ${location.pathname === "/logout" ? styles.activeLink : ""}`} to="/logout">
              Logout
            </Link>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              style={{ color: "#ffffff", fontSize: "25px" }}
            />
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
