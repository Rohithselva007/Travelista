import styles from './AffordablePackages.module.css';
import { affordablePackages } from '../../data/packagesData';

const AffordablePackages = () => {
  const packages = affordablePackages;
  return (
    <section className={styles.packagesSection}>
      <div className={styles.packagesOverlay}></div>

      <div className={styles.packagesContainer}>
        <div className={styles.packagesHeader}>
          <h2>We Provide Affordable Prices</h2>

          <p>
            Well educated, intellectual people, especially scientists at all
            times demonstrate considerably.
          </p>
        </div>

        <div className={styles.packagesGrid}>
          {packages.map((pkg) => (
            <div className={styles.packageCard} key={pkg.title}>
              <h3>{pkg.title}</h3>

              <div className={styles.packageLine}></div>

              <div className={styles.destinationList}>
                {pkg.destinations.map(([place, price]) => (
                  <div className={styles.destinationRow} key={place}>
                    <span>{place}</span>

                    <button className={styles.button}><strong>{price}</strong></button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffordablePackages;