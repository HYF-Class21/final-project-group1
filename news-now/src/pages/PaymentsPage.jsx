import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from "./PaymentsPage.module.css";

const paymentPlansData = [
  { id: 1, name: '1 month', price: 20.00 },
  { id: 2, name: '6 months', price: 100.00 },
  { id: 3, name: '1 year', price: 200.00 },
];

const PaymentsPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <h2 className={styles.formContainerH1}>Choose a Payment Plan</h2>
        <div className={styles.plansContainer}>
          {paymentPlansData.map((plan) => (
            <div className={styles.plansSection}>
              <div key={plan.id} className={`plan ${selectedPlan === plan ? 'selected' : ''}`}>
                <h3 className={styles.planH2}>{plan.name}</h3>
                <p className={styles.plan}>${plan.price.toFixed(2)} per month</p>
                <button className={styles.plan} onClick={() => handleSelectPlan(plan)}>Pay</button>
              </div>
            </div>
          ))}
        </div>
        {selectedPlan && (
          <div className={styles.selected}>
            <h2>Selected Plan</h2>
            <p>{selectedPlan.name}</p>
            <p>${selectedPlan.price.toFixed(2)}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default PaymentsPage;