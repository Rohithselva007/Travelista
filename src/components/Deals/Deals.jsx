import { useState } from "react";
import style from "./Deals.module.css";
import { hotDealsDestinations } from "../../data/destinationsData";

const Deals = () => {
    const destinations = hotDealsDestinations;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(
            (currentIndex + 1) % destinations.length
        );
    };

    const previousSlide = () => {
        setCurrentIndex(
            currentIndex === 0
                ? destinations.length - 1
                : currentIndex - 1
        );
    };

    return (
        <section className={style.destinations}>

            <div className={style.heading}>
                <h2>Today’s Hot Deals</h2>

                <p>
                    We all live in an age that belongs to the young
                    at heart. Life that is becoming extremely fast,
                    day to.
                </p>
            </div>


            {/* ONE CARD PER SLIDE */}
            <div className={style.carousel}>

                <div className={style.slider}>
                    <div
                        className={style.sliderTrack}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >

                        {destinations.map((destination, index) => (
                            <div
                                className={style.slide}
                                key={index}
                            >

                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                />

                                <div className={style.overlay}></div>

                                <div className={style.price}>
                                    {destination.price}
                                </div>

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
                </div>


                {/* PREVIOUS */}
                <button
                    className={`${style.arrow} ${style.leftArrow}`}
                    onClick={previousSlide}
                >
                    ❮
                </button>


                {/* NEXT */}
                <button
                    className={`${style.arrow} ${style.rightArrow}`}
                    onClick={nextSlide}
                >
                    ❯
                </button>

            </div>


            {/* DOTS */}
            <div className={style.dots}>

                {destinations.map((_, index) => (
                    <button
                        key={index}
                        className={
                            index === currentIndex
                                ? style.activeDot
                                : style.dot
                        }
                        onClick={() =>
                            setCurrentIndex(index)
                        }
                    />
                ))}

            </div>

        </section>
    );
};

export default Deals;