import style from "./PopularDestinations.module.css";
import { popularDestinations } from "../../data/destinationsData";

const PopularDestinations = () => {
    const destinations = popularDestinations;

    return (
        <section className={style.destinations}>

            {/* Section Heading */}
            <div className={style.heading}>

                <h2>Popular Destinations</h2>

                <p>
                    We all live in an age that belongs to the young at heart.
                    Life that is becoming extremely fast, day.
                </p>

            </div>


            {/* Destination Cards */}
            <div className={style.grid}>

                {destinations.map((destination, index) => (
                    <div
                        className={style.card}
                        key={index}
                    >

                        <img
                            src={destination.image}
                            alt={destination.name}
                        />

                        <div className={style.overlay}></div>


                        {/* Price */}
                        {destination.price && (
                            <div className={style.price}>
                                {destination.price}
                            </div>
                        )}


                        {/* Content */}
                        <div className={style.cardContent}>

                            <h3>
                                {destination.name}
                            </h3>

                            <span>
                                {destination.country}
                            </span>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default PopularDestinations;