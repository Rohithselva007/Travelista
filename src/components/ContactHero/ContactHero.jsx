import { Link } from "react-router-dom";
import style from "./ContactHero.module.css";

import aboutBg from "../../assets/top-banner.jpg";

const ContactHero = () => {
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
                <h1>Contact</h1>

                <div className={style.breadcrumb}>
                    <span>
                        <Link to="/">HOME</Link>
                    </span>

                    <span className={style.arrow}>
                        →
                    </span>

                    <Link to="/contact">CONTACT</Link>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
