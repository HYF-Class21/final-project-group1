import styles from "./LoginForm.module.css";
import { useState } from "react";
import { useGlobalState } from '../context/GlobalStateContext';
import Cookies from 'js-cookie';

import validateEmail from "../utils/validateEmail.js";
import validatePassword from "../utils/validatePassword.js";

const LoginForm = ({ active, setActive }) => {
  const { isLoggedIn, setIsLoggedIn } = useGlobalState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);

    if (emailIsValid && passwordIsValid) {
      const login = async () => {
        try {
          Cookies.set('email', email);
          setEmail("");
          setPassword("");
          setIsLoggedIn(true);
          setActive(false);
          location.reload();
        } catch {
          setError("Error while log in");
        }
      };
      login();
    } else {
      setError("Email or password is not valid");
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
          <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
        <p className={styles.formContainerP}>Do not have an account?</p>
                <p className={styles.formContainerP}>
                    Please,{' '}
                    <span>
                        Sign up
                    </span>
                </p>
      </div>
    </div>
  );
};

export default LoginForm;