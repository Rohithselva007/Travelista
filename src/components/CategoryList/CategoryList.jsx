import style from "./CategoryList.module.css";

const CategoryList = ({ categories = [] }) => {
    return (
        <div className={style.widget}>

            <h3>Post Categories</h3>

            <div className={style.list}>

                {categories.map((category) => (
                    <a
                        href="#"
                        key={category.name}
                    >
                        <span>
                            {category.name}
                        </span>

                        <span>
                            {category.count}
                        </span>
                    </a>
                ))}

            </div>

        </div>
    );
};

export default CategoryList;