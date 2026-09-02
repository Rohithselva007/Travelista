import style from "./Popular.module.css";
import { popularPackages } from "../../data/packagesData";

const Packages = () => {
    const packages = popularPackages;

    return (
        <section className={style.packages}>
            <div className={style.container}>
                {packages.map((item, index) => (
                    <div className={style.card} key={index}>

                        <img
                            src={item.image}
                            alt={item.title}
                            className={style.image}
                        />

                        <div className={style.content}>

                            <h2>{item.title}</h2>

                            <p className={style.country}>
                                {item.country}
                            </p>

                            <div className={style.details}>

                                <div className={style.row}>
                                    <span>Duration</span>
                                    <span>{item.duration}</span>
                                </div>

                                <div className={style.row}>
                                    <span>Date</span>
                                    <span>{item.date}</span>
                                </div>

                                <div className={style.row}>
                                    <span>Airport</span>
                                    <span>{item.airport}</span>
                                </div>

                                <div className={style.row}>
                                    <span>Extras</span>
                                    <span>{item.extras}</span>
                                </div>

                                <div className={style.priceRow}>
                                    <span>Price per person</span>

                                    <strong>
                                        {item.price}
                                    </strong>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Packages;