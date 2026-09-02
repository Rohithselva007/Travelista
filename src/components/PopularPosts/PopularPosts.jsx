import { Link } from "react-router-dom";
import style from "./PopularPosts.module.css";

const PopularPosts = ({ posts = [] }) => {
    return (
        <div className={style.widget}>

            <h3>Popular Posts</h3>

            <div className={style.list}>

                {posts.map((post) => (
                    <Link
                        to={`/blog/${post.slug}`}
                        className={style.item}
                        key={post.slug}
                    >

                        <img
                            src={post.image}
                            alt={post.title}
                        />

                        <div>
                            <h4>{post.title}</h4>

                            <span>
                                {post.date || post.time || "02 Hours ago"}
                            </span>
                        </div>

                    </Link>
                ))}

            </div>

        </div>
    );
};

export default PopularPosts;