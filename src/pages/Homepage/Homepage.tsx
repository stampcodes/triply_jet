import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Offers from "../../components/Offers/Offers";
import Benefits from "../../components/Benefits/Benefits";
import { Helmet } from "react-helmet-async";

const Homepage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TriplyJet - Home</title>
      </Helmet>
      <Navbar />
      <Hero />
      <Offers />
      <Benefits />
    </>
  );
};

export default Homepage;
