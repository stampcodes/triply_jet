import { useParams } from "react-router-dom";
import data, { Card } from "../../data/data";
import Navbar from "../../components/Navbar/Navbar";

const TripDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Offer not found!</div>;
  }

  const tripId = parseInt(id, 10);

  if (isNaN(tripId)) {
    return <div>Offer not found!</div>;
  }

  const trip: Card | undefined = data.cards.find((card) => card.id === tripId);

  if (!trip) {
    return <div>Offer not found!</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>{trip.name}</h1>
      <img src={trip.image} alt={trip.name} />
      <p>{trip.description}</p>
      <p>{trip.details}</p>
      <p>Travel Dates: {trip.travelDates}</p>
      <p>Price: {trip.price} ETH</p>
    </div>
  );
};

export default TripDetails;
