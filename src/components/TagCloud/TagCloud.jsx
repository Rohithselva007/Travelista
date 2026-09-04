import { Link } from "react-router-dom";
import style from "./TagCloud.module.css";

const TagCloud = ({ tags = [] }) => {
    return (
        <div className={style.widget}>

            <h3>Tag Clouds</h3>

            <div className={style.tags}>

                {tags.map((tag, index) => (
                    <Link to={`/blog?q=${encodeURIComponent(tag)}`} key={index}>
                        {tag}
                    </Link>
                ))}

            </div>

        </div>
    );
};

export default TagCloud;