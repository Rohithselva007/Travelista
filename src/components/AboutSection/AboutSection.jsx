import styles from "./AboutSection.module.css";

import AboutImage from "../../assets/about/info-img.jpg";

const AboutSection = () => {
    return (
        <section className={styles.customPackage}>
            
            <div className={styles.content}>
                
                <div className={styles.imageContent}>
                    <img src={AboutImage} alt="About Image" />
                </div>
                <div className={styles.textContent}>
                    <h2>
                        ABOUT US
                    </h2>

                    <h1>Who We Are?</h1>

                    <p>
                        Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;