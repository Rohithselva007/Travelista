import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import { testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = testimonialsData;

    const testimonialsPerSlide = 2;

    const totalSlides = Math.ceil(
        testimonials.length / testimonialsPerSlide
    );

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(timer);
    }, [totalSlides]);

    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>

                {/* HEADER */}
                <div className={styles.header}>
                    <h2>Testimonial from our Clients</h2>

                    <p>
                        The French Revolution constituted for the conscience of the
                        dominant aristocratic class a fall from
                    </p>
                </div>

                {/* SLIDER */}
                <div className={styles.slider}>
                    <div
                        className={styles.sliderTrack}
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                            const startIndex = slideIndex * testimonialsPerSlide;

                            const slideTestimonials = testimonials.slice(
                                startIndex,
                                startIndex + testimonialsPerSlide
                            );

                            return (
                                <div className={styles.slide} key={slideIndex}>
                                    {slideTestimonials.map((testimonial, index) => (
                                        <div
                                            className={styles.card}
                                            key={`${slideIndex}-${index}`}
                                        >
                                            {/* PROFILE */}
                                            <div className={styles.profile}>
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                />
                                            </div>

                                            {/* CONTENT */}
                                            <div className={styles.content}>
                                                <p className={styles.text}>
                                                    {testimonial.text}
                                                </p>

                                                <h3>{testimonial.name}</h3>

                                                {/* RATING */}
                                                <div className={styles.rating}>
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <span
                                                            key={star}
                                                            className={
                                                                star <= testimonial.rating
                                                                    ? styles.activeStar
                                                                    : styles.inactiveStar
                                                            }
                                                        >
                                                            ★
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* DOTS */}
                <div className={styles.dots}>
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={
                                index === currentSlide
                                    ? styles.activeDot
                                    : styles.dot
                            }
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;