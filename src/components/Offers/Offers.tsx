import styles from "./Offers.module.css";

const Offers = () => {
  return (
    <>
      <section className={styles.offers}>
        <h1 className={styles.title}>Our Latest Offers</h1>
        <div className={styles.offersCard}></div>
      </section>
    </>
  );
};

export default Offers;
