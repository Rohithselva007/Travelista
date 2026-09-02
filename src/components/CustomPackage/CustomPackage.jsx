import styles from "../CustomPackage/CustomPackage.module.css";

import customImage from "../../assets/hotels/about-img.jpg";

const CustomPackage = () => {
  return (
    <section className={styles.customPackage}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2>
            Did not find your Package?
            <br />
            Feel free to ask us.
            <br />
            We’ll make it for you
          </h2>

          <p>
            Every traveler is different, and sometimes our ready-made
            packages just don’t fit. Tell us your destination, budget,
            and dates, and we’ll build a custom itinerary around them.
          </p>
          <button type="button" className={styles.button}>Request Custom Package</button>
        </div>

        <div className={styles.imageContent}>
          <img src={customImage} alt="Custom travel package" />
        </div>
      </div>
    </section>
  );
};

export default CustomPackage;