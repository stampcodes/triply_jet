import { useParams } from "react-router-dom";
import data, { Card } from "../../data/data";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./TripDetails.module.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import PayButton from "../../components/PayButton/PayButton";
import { Helmet } from "react-helmet-async";

const TripDetails: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div className={styles.notFound}>Offer not found!</div>;
  }

  const tripId = parseInt(id, 10);
  if (isNaN(tripId)) {
    return <div className={styles.notFound}>Offer not found!</div>;
  }

  const trip: Card | undefined = data.cards.find((card) => card.id === tripId);
  if (!trip) {
    return <div className={styles.notFound}>Offer not found!</div>;
  }

  const handleBackClick = () => {
    navigate("/");
  };

  const GoToSummary = () => {
    navigate("/purchase");
  };

  return (
    <>
      <Helmet>
        <title>TriplyJet - Offers</title>
      </Helmet>
      <Navbar />
      <div className={styles.backIcon}>
        <button className={styles.backButton} onClick={handleBackClick}>
          <IoIosArrowBack />
        </button>
        <button className={styles.GoToSummary} onClick={GoToSummary}>
          Purchases
        </button>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>{trip.name}</h2>
        <img className={styles.img} src={trip.image} alt={trip.name} />
        <p>{trip.details}</p>
        <p>Travel Dates: {trip.travelDates}</p>
        <p className={styles.price}>Price: {trip.price} ETH</p>
        <PayButton price={trip.price} itemName={trip.name} />
      </div>
    </>
  );
};

export default TripDetails;
