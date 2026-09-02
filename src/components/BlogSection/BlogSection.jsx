import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./BlogSection.module.css";

import { blogPosts } from "../../data/blogData";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BlogSection = ({
  limit,
  showControls = true,
  title = "Latest from Our Blog",
  subtitle = "With the exception of Nietzsche, no other madman has contributed so much to human sanity as has.",
}) => {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const postsPerSlide = 3;

  const totalSlides = Math.ceil(
    posts.length / postsPerSlide
  );

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % totalSlides
    );
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) =>
        prev === 0
          ? totalSlides - 1
          : prev - 1
    );
  };

  /* =========================
     AUTOMATIC SLIDER
  ========================= */

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % totalSlides
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const canNavigate = showControls && totalSlides > 1;

  return (
    <section className={style.blog}>

      {/* =========================
          HEADING
      ========================= */}

      <div className={style.heading}>
        <h2>{title}</h2>

        <p>{subtitle}</p>
      </div>

      {/* =========================
          SLIDER
      ========================= */}

      <div
        className={style.slider}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Previous Button */}

        {canNavigate && (
          <button
            type="button"
            className={`${style.arrow} ${style.prev}`}
            onClick={previousSlide}
            aria-label="Previous blog"
          >
            <FaChevronLeft />
          </button>
        )}

        {/* Slider Viewport */}

        <div className={style.sliderViewport}>

          <div
            className={style.sliderTrack}
            style={{
              transform: `translateX(-${
                currentSlide * 100
              }%)`,
            }}
          >

            {Array.from({
              length: totalSlides,
            }).map((_, slideIndex) => {

              const start =
                slideIndex * postsPerSlide;

              const slidePosts =
                posts.slice(
                  start,
                  start + postsPerSlide
                );

              return (
                <div
                  className={style.slide}
                  key={slideIndex}
                >

                  {slidePosts.map(
                    (post) => (
                      <article
                        className={style.card}
                        key={post.slug}
                      >

                        <Link
                          to={`/blog/${post.slug}`}
                          className={style.cardLink}
                        >

                          {/* Image */}

                          <div
                            className={
                              style.imageWrapper
                            }
                          >
                            <img
                              src={post.image}
                              alt={post.title}
                            />
                          </div>

                          {/* Title */}

                          <h3>
                            {post.title}
                          </h3>

                          {/* Description */}

                          <p className={style.description}>
                            {post.description}
                          </p>

                          {/* Date */}

                          <p className={style.date}>
                            {post.date}
                          </p>

                          {/* Categories */}

                          <div
                            className={
                              style.categories
                            }
                          >
                            {post.categories.slice(0, 2).map((category) => (
                              <span key={category}>
                                {category}
                              </span>
                            ))}
                          </div>

                        </Link>

                      </article>
                    )
                  )}

                </div>
              );
            })}

          </div>
        </div>

        {/* Next Button */}

        {canNavigate && (
          <button
            type="button"
            className={`${style.arrow} ${style.next}`}
            onClick={nextSlide}
            aria-label="Next blog"
          >
            <FaChevronRight />
          </button>
        )}

      </div>

      {/* =========================
          DOTS
      ========================= */}

      {canNavigate && (
        <div className={style.dots}>

          {Array.from({
            length: totalSlides,
          }).map((_, index) => (

            <button
              type="button"
              key={index}
              className={
                index === currentSlide
                  ? `${style.dot} ${style.activeDot}`
                  : style.dot
              }
              onClick={() =>
                setCurrentSlide(index)
              }
              aria-label={`Go to slide ${
                index + 1
              }`}
            />

          ))}

        </div>
      )}

    </section>
  );
};

export default BlogSection;
