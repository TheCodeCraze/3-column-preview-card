import styles from "./App.module.css";

export const App = () => {
  return (
    <main className={styles.card}>
      <div className={styles["col-sedan"]}>
        <img
          src="/icon-sedans.svg"
          alt="Sedan illustration"
          className={styles.icon}
        />
        <h1 className={styles.title}>Sedans</h1>
        <p className={styles.description}>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className={styles.cta} aria-label="Click to learn more">
          Learn More
        </button>
      </div>
      <div className={styles["col-suv"]}>
        <img
          src="/icon-suvs.svg"
          alt="SUV illustration"
          className={styles.icon}
        />
        <h1 className={styles.title}>SUVs</h1>
        <p className={styles.description}>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className={styles.cta} aria-label="Click to learn more">
          Learn More
        </button>
      </div>
      <div className={styles["col-luxury"]}>
        <img
          src="/icon-luxury.svg"
          alt="Luxury car illustration"
          className={styles.icon}
        />
        <h1 className={styles.title}>Luxury</h1>
        <p className={styles.description}>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className={styles.cta} aria-label="Click to learn more">
          Learn More
        </button>
      </div>
    </main>
  );
};
