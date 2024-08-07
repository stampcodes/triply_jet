import { Link } from "react-router-dom";
import styles from "./Card.module.css";

interface CardProps {
  card: {
    id: number;
    name: string;
    image: string;
    description: string;
    travelDates: string;
    price: number;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <>
      <article className={styles.card}>
        <Link to={`/trip/${card.id}`} className={styles.cardLink}>
          <img src={card.image} alt={card.name} className={styles.cardImage} />
          <div className={styles.rightSection}>
            <h2 className={styles.cardName}>{card.name}</h2>
            <p className={styles.cardDescription}>{card.description}</p>
            <p className={styles.cardDates}>{card.travelDates}</p>
            <p className={styles.cardPrice}>{card.price} ETH</p>
            <button className={styles.cardButton}>
              <Link to={`/trip/${card.id}`}>View Offer</Link>
            </button>
          </div>
        </Link>
      </article>
    </>
  );
};

export default Card;
