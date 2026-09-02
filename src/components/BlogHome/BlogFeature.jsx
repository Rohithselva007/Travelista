import { Link } from "react-router-dom";
import style from "./BlogFeature.module.css";

const BlogFeature = ({
    image,
    title,
    description,
}) => {
    return (
        <Link
            to="/blog"
            className={style.featureCard}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className={style.overlay}>
                <h3>{title}</h3>

                <span className={style.line}></span>

                <p>{description}</p>
            </div>
        </Link>
    );
};

export default BlogFeature;