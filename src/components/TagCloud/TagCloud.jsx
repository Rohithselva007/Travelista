import style from "./TagCloud.module.css";

const TagCloud = ({ tags = [] }) => {
    return (
        <div className={style.widget}>

            <h3>Tag Clouds</h3>

            <div className={style.tags}>

                {tags.map((tag, index) => (
                    <a href="#" key={index}>
                        {tag}
                    </a>
                ))}

            </div>

        </div>
    );
};

export default TagCloud;