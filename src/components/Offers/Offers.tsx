import styles from "./Offers.module.css";
import Card from "../Card/Card";
import data from "../../data/data";

const Offers = () => {
  return (
    <>
      <section className={styles.offers}>
        <h1 className={styles.title}>Our Latest Offers</h1>
        <div className={styles.offersCard}>
          {data.cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Offers;
