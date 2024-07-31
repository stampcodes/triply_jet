import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Offers from "../../components/Offers/Offers";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";

const Homepage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <BenefitsSection />
    </>
  );
};

export default Homepage;
