import { Link } from "react-router-dom";
import style from "./CategoryList.module.css";

const CategoryList = ({ categories = [] }) => {
    return (
        <div className={style.widget}>

            <h3>Post Categories</h3>

            <div className={style.list}>

                {categories.map((category) => (
                    <Link
                        to={`/blog?q=${encodeURIComponent(category.name)}`}
                        key={category.name}
                    >
                        <span>
                            {category.name}
                        </span>

                        <span>
                            {category.count}
                        </span>
                    </Link>
                ))}

            </div>

        </div>
    );
};

export default CategoryList;