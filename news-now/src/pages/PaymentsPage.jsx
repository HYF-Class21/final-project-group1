import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./PaymentsPage.module.css";
import PaymentForm from "../components/PaymentForm";
import Footer from "../components/Footer";

const paymentPlansData = [
  {
    id: 1,
    name: "1 month",
    price: 20,
    description:
      "Get a month-to-month subscription for just $20. Stay informed with our comprehensive coverage and stay up to date with the latest news and insights.",
  },
  {
    id: 2,
    name: "6 months",
    price: 100,
    description:
      "Save with our 6-month plan at a discounted rate of $100. Enjoy uninterrupted access to our premium content for half a year.",
  },
  {
    id: 3,
    name: "1 year",
    price: 170,
    description:
      "Get the best value with our annual plan. For only $170, you'll have unlimited access to our news articles, features, and exclusive content for a full year.",
  },
];

const PaymentsPage = () => {
  const [selectedPlan, setSelectedPlan] = useState({
    name: "No plan selected",
    price: 0,
    description: "",
  });

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className={styles.paymentsContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.paymentsH1}>Payment Plans</h1>
        <p className={styles.paymentsP}>
          {" "}
          Select the plan that works best for you and enjoy unlimited access to
          our content. Whether you choose one of our plans, you'll get exclusive
          access to the latest news and in-depth articles. Stay informed and
          stay ahead with our comprehensive coverage across various topics.
        </p>
        <div className={styles.plansContainer}>
          {paymentPlansData.map((plan) => (
            <div key={plan.id} className={styles.plansSection}>
              <h2 className={styles.planH2}>{plan.name}</h2>
              <p className={styles.plansP}>${plan.price}</p>
              <p className={styles.description}>{plan.description}</p>
              <button
                className={styles.button}
                onClick={() => handleSelectPlan(plan)}
              >
                Pay
              </button>
            </div>
          ))}
          <div>
            <div className={styles.selectedPlan}>
              <h2>Selected Plan</h2>
              <p>{selectedPlan.name}</p>
            </div>
            <PaymentForm selectedPlan={selectedPlan} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentsPage;
