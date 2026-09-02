import { Link } from "react-router-dom";
import style from "./BlogHero.module.css";

import aboutBg from "../../assets/blog/blog-home-banner.jpg";
import { blogPosts } from "../../data/blogData";

const BlogHero = () => {
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
                <h1>Dude You're Getting a Telescope</h1>
                <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>

                <Link to={`/blog/${blogPosts[0].slug}`} className={style.button}>
                    View More
                </Link>
            </div>
        </section>
    );
};

export default BlogHero;
