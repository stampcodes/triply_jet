import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Offers from "./components/Offers/Offers";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <BenefitsSection />
    </>
  );
};

export default App;
