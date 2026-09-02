import { Link } from "react-router-dom";
import style from "./AboutHero.module.css";

import aboutBg from "../../assets/top-banner.jpg";

const AboutHero = () => {
    return (
        <section
            className={style.hero}
            data-page-hero
            style={{
                backgroundImage: `url(${aboutBg})`,
            }}
        >
            <div className={style.overlay}></div>

            <div className={style.heroContent}>
                <h1>About Us</h1>

                <div className={style.breadcrumb}>
                    <span>
                        <Link to="/">HOME</Link>
                    </span>

                    <span className={style.arrow}>
                        →
                    </span>

                    <Link to="/about">ABOUT US</Link>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;