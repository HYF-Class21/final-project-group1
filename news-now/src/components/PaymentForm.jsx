import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', { cardNumber, expiryDate, cvv });
    setCardNumber('');
    setExpiryDate('');
    setCVV('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
        />
      </label>
      <br />
      <label>
        Expiry Date:
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
        />
      </label>
      <br />
      <label>
        CVV:
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          placeholder="Enter CVV"
        />
      </label>
      <br />
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;