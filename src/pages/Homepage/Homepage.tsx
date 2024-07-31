import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Offers from "../../components/Offers/Offers";
import Benefits from "../../components/Benefits/Benefits";

const Homepage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Benefits />
    </>
  );
};

export default Homepage;
