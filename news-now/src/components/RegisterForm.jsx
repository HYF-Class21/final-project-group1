import styles from "./RegisterForm.module.css";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import validateEmail from "../utils/validateEmail.js";
import validatePassword from "../utils/validatePassword.js";
import matchPasswords from "../utils/matchPasswords.js";

const RegisterForm = ({
  activeLogin,
  setActiveLogin,
  activeRegister,
  setActiveRegister
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    const isMatch = matchPasswords(password, confirmPassword);

    if (emailIsValid && passwordIsValid && isMatch) {
      const register = () => {
        try {
          setEmail("");
          setPassword("");
          setError("");
          setConfirmPassword("");
          setActiveRegister(false);
          setActiveLogin(true);
          setTermsChecked(false);
        } catch {
          setError("Error while register");
        }
      };
      register();
    } else {
      setError(`Email example: user@example.com.\n
      Password example: Test1234!`);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTermsChange = () => {
    setTermsChecked(!termsChecked);
  };

  return (
    <div className={styles.registerComponent}>
      <p className={styles.error}>{error}</p>
      <div className={styles.formContainer}>
        <div className={styles.iconDiv}>
          <FontAwesomeIcon
            onClick={() => {
              setActiveRegister(false);
              setEmail("");
              setPassword("");
              setError("");
              setConfirmPassword("");
            }}
            icon={faXmark}
            style={{ color: "#000000", fontSize: "30px" }}
          />
        </div>
        <h1 className={styles.formContainerH1}>Register</h1>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="emailReg">Email: </label>
          <input
            type="email"
            name="emailReg"
            id="emailReg"
            value={email}
            onChange={(e) => handleEmail(e)}
          />
          <label htmlFor="passwordReg">Password: </label>
          <input
            type="password"
            name="passwordReg"
            id="passwordReg"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
          <label htmlFor="confirmPassword">Confirm password: </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleConfirmPassword(e)}
          />
          <div className={styles.checkbox}>
            <input
              className={styles.marginRight}
              type="checkbox"
              id="termsCheckbox"
              checked={termsChecked}
              onChange={handleTermsChange}
            />
            <label htmlFor="termsCheckbox">I accept Terms and Conditions on this website</label>
          </div>
          <button type="submit" onClick={handleSubmit} disabled={!termsChecked}>
            Register
          </button>
        </form>
        <p className={styles.formContainerP}>Already have an account?</p>
        <p className={styles.formContainerP}>
          Please,{" "}
          <span
            onClick={() => {
              setActiveRegister(false);
              setActiveLogin(true);
            }}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
