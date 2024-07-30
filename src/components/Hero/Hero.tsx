import styles from "./Hero.module.css";
import { FaCircleArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Scroll Down to Unlock Exclusive Deals</h1>
          <FaCircleArrowDown className={styles.arrow} />
        </div>
      </div>
    </>
  );
};

export default Hero;
