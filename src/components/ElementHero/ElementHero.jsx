import { Link } from "react-router-dom";
import style from "./ElementHero.module.css";

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
                <h1>Elements</h1>

                <div className={style.breadcrumb}>
                    <span>
                        <Link to="/">HOME</Link>
                    </span>

                    <span className={style.arrow}>
                        →
                    </span>

                    <Link to="/elements">ELEMENTS</Link>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;