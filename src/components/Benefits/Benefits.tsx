import styles from "./Benefits.module.css";

const Benefits: React.FC = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.sec}>
          <img className={styles.img} src=".\2.png" alt="" />
          <h2>REFER TO EXPERTS IN THE FIELD</h2>
          <p>
            Our specialists, with firsthand experience, will help you find the
            perfect travel destination for your needs.
          </p>
        </div>
        <div className={styles.sec}>
          <img className={styles.img} src=".\1.png" alt="" />
          <h2>WE DESIGN YOUR CUSTOM TRIP</h2>
          <p>
            Our experts will tailor the trip for you, providing detailed
            information on where to go, what to do, how to get around, and where
            to stop.
          </p>
        </div>
        <div className={styles.sec}>
          <img className={styles.img} src=".\3.png" alt="" />
          <h2>WE HELP YOU BOOK YOUR TRIP</h2>
          <p>
            Finally, our specialists will help you seamlessly book the hotels,
            activities and transfers on your itinerary at the best available
            rates.
          </p>
        </div>
      </section>
    </>
  );
};

export default Benefits;
