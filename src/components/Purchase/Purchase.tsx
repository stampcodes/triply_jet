import styles from "./Purchase.module.css";

const Purchase = ({ purchase }: any) => {
  return (
    <li className={styles.purchaseItem}>
      <div>{purchase.item}</div>
      <div>{purchase.price}</div>
      <div>{purchase.date}</div>
    </li>
  );
};

export default Purchase;
