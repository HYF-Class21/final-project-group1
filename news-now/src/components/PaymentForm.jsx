import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalStateContext";
import styles from "./PaymentForm.module.css";
import visa from "../assets/cc-visa.svg";

const PaymentForm = ({ selectedPlan }) => {
  const { isPayed, setIsPayed, setCounter, isLoggedIn } = useGlobalState();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState(
    selectedPlan.price > 0 ? `Pay ${selectedPlan.price}$` : "Pay"
  );

  useEffect(() => {
    if (selectedPlan.price > 0) {
      setButtonText(`Pay ${selectedPlan.price}$`);
    } else {
      setButtonText("Pay");
    }
  }, [selectedPlan]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setMessage("Please, log in to pay")
      return;
    }

    if (selectedPlan.price === 0) {
      setMessage("Please, select your plan");
      return;
    }

    if (!cardNumber || !expiryDate || !cvv) {
      setMessage("Please fill in all fields");
      return;
    }
   
    if (!/^\d{16}$/.test(Number(cardNumber))) {
      setMessage("Invalid card number. It contains 16 numbers.");
      return;
    }

    const [month, year] = expiryDate.split("/");
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear() % 100;
    if (parseInt(year, 10) < currentYear || (parseInt(year, 10) === currentYear && parseInt(month, 10) < currentMonth)) {
      setMessage("Invalid expiry date");
      return;
    }

    if (!/^\d{3}$/.test(Number(cvv))) {
      setMessage("Invalid CVV");
      return;
    }

    setIsPayed(true);
    setCounter(1000000000000000);
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setButtonText("Pay");
    setMessage("Payment successful!");
    console.log({ cardNumber, expiryDate, cvv })
    console.log(isPayed)
  };

  return (
    <div className={styles.formContainer}>
      {" "}
      <p>{message}</p>
      <form className={styles.paymentForm} onSubmit={handleSubmit}>
        <label>Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="XXXX XXXX XXXX XXXX"
        />
        <div className={styles.dateCVV}>
          <div>
            <label>Expiry Date:</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label>CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
            />
          </div>
        </div>
        <div className={styles.buttonVisa}>
        <button type="submit">{buttonText}</button>
          <img src={visa} alt="visa" />
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
