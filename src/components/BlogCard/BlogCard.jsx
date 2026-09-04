import { Link } from "react-router-dom";
import style from "./BlogCard.module.css";

const BlogCard = ({
    slug,
    image,
    title,
    categories = [],
    author = "Mark wiens",
    date = "12 Dec, 2017",
    views = "1.2M Views",
    comments = "06 Comments",
    description = "",
}) => {
    return (
        <article className={style.blogCard}>

            <Link to={`/blog/${slug}`} className={style.postImage}>
                <img
                    src={image}
                    alt={title}
                />
            </Link>

            <div className={style.postBody}>

                <div className={style.postMeta}>

                    <div className={style.categories}>
                        {categories.map((category, index) => (
                            <Link to={`/blog?q=${encodeURIComponent(category)}`} key={index}>
                                {category}
                                {index < categories.length - 1 && ","}
                            </Link>
                        ))}
                    </div>

                    <span className={style.author}>
                        {author}
                    </span>

                    <div className={style.details}>
                        <span>{date}</span>
                        <span>{views}</span>
                        <span>{comments}</span>
                    </div>

                </div>

                <h2>
                    <Link to={`/blog/${slug}`}>{title}</Link>
                </h2>

                <p>
                    {description}
                </p>

                <Link
                    to={`/blog/${slug}`}
                    className={style.viewMore}
                >
                    View More
                </Link>

            </div>

        </article>
    );
};

export default BlogCard;