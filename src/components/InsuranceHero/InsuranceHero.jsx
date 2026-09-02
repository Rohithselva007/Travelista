import { Link } from "react-router-dom";
import style from "./InsuranceHero.module.css";

import aboutBg from "../../assets/top-banner.jpg";

const InsuranceHero = () => {
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
                <h1>Insurance</h1>

                <div className={style.breadcrumb}>
                    <span>
                        <Link to="/">HOME</Link>
                    </span>

                    <span className={style.arrow}>
                        →
                    </span>

                    <Link to="/insurance">INSURANCE</Link>
                </div>
            </div>
        </section>
    );
};

export default InsuranceHero;