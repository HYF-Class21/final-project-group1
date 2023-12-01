import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalStateContext";
import styles from "./PaymentForm.module.css";
import visa from "../assets/cc-visa.svg";

const PaymentForm = ({ selectedPlan }) => {
  const { isPayed, setIsPayed } = useGlobalState();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cardNumber || !expiryDate || !cvv) {
      setMessage("Please fill in all fields");
      return;
    }
   
    if (!/^\d{16}$/.test(Number(cardNumber))) {
      setMessage("Invalid card number");
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
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setMessage("Payment successful!");
    console.log({ cardNumber, expiryDate, cvv })
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
          <button type="submit">
            {selectedPlan.price > 0 ? `Pay ${selectedPlan.price}$` : "Pay"}
          </button>
          <img src={visa} alt="visa" />
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
