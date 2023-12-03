import styles from "./LoginForm.module.css";
import { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalStateContext";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import validateEmail from "../utils/validateEmail.js";
import validatePassword from "../utils/validatePassword.js";

const LoginForm = ({
  activeLogin,
  setActiveLogin,
  activeRegister,
  setActiveRegister,
  activeMessage,
  setActiveMessage
}) => {
  const { isLoggedIn, setIsLoggedIn, isPayed } = useGlobalState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);

    if (emailIsValid && passwordIsValid) {
      try {
        const existingEmail = Cookies.get("email");

        if (existingEmail === email) {
          await Cookies.set("isLoggedIn", true);
          setIsLoggedIn(true);
        } else {
          await Cookies.set("email", email);
          await Cookies.set("isLoggedIn", true);
          // await Cookies.set("counter", String(5), { expires: 7 });

          setEmail("");
          setPassword("");
          setIsLoggedIn(true);
        }

        setError("");
        setActiveLogin(false);
        window.location.reload();
      } catch {
        setError("Error while log in");
      }
    } else {
      setError(`Email or password are not valid`);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.loginComponent}>
      <p className={styles.error}>{error}</p>
      <div className={styles.formContainer}>
        <div className={[styles.iconDiv, styles.marginTop].join(" ")}>
          <FontAwesomeIcon
            onClick={() => {
              setEmail("");
              setPassword("");
              setError("");
              setActiveLogin(false);
            }}
            icon={faXmark}
            style={{ color: "#000000", fontSize: "30px" }}
          />
        </div>
        <h1 className={styles.formContainerH1}>Login</h1>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => handleEmail(e)}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <p className={styles.formContainerP}>Do not have an account?</p>
        <p className={[styles.formContainerP, styles.marginBottom].join(" ")}>
          Please,{" "}
          <span
            onClick={() => {
              setActiveLogin(false);
              setActiveRegister(true);
              setActiveMessage(false);
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
