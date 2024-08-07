import styles from "./PurchaseSummary.module.css";
import { usePurchaseStore } from "../../store/purchaseStore";
import Purchase from "../../components/Purchase/Purchase";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

const PurchaseSummary = () => {
  const navigate = useNavigate();
  const purchases = usePurchaseStore((state) => state.purchases);

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>TriplyJet - Purchases</title>
      </Helmet>
      <Navbar />
      <button className={styles.backButton} onClick={handleBackClick}>
        Home
      </button>
      <div className={styles.container}>
        <h2>Your Purchases</h2>
        {purchases.length === 0 ? (
          <p>No purchases yet.</p>
        ) : (
          <ul className={styles.purchaseList}>
            {purchases.map((purchase) => (
              <Purchase key={purchase.id} purchase={purchase} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default PurchaseSummary;
