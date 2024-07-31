import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Offers from "../../components/Offers/Offers";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";
import useScrollify from "../../hook/useScrollify/useScrollify";

const Homepage: React.FC = () => {
  useScrollify();
  return (
    <>
      <div className="div-scrollify">
        <Navbar />
      </div>
      <div className="div-scrollify">
        <Hero />
      </div>
      <div className="div-scrollify">
        <Offers />
      </div>
      <div className="div-scrollify">
        <BenefitsSection />
      </div>
    </>
  );
};

export default Homepage;
