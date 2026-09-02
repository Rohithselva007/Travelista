import { Link } from "react-router-dom";
import style from "./HotelHero.module.css";

import hotelBg from "../../assets/top-banner.jpg";

const HotelHero = () => {
    return (
        <section
            className={style.hero}
            data-page-hero
            style={{
                backgroundImage: `url(${hotelBg})`,
            }}
        >
            <div className={style.overlay}></div>

            <div className={style.heroContent}>
                <h1>Hotels</h1>

                <div className={style.breadcrumb}>
                    <span>
                        <Link to="/">HOME</Link>
                    </span>

                    <span className={style.arrow}>
                        →
                    </span>

                    <Link to="/hotels">Hotels</Link>
                </div>
            </div>
        </section>
    );
};

export default HotelHero;