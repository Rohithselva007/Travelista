import { Link } from "react-router-dom";

import PopularPosts from "../PopularPosts/PopularPosts";
import CategoryList from "../CategoryList/CategoryList";
import Newsletter from "../Newsletter/Newsletter";
import TagCloud from "../TagCloud/TagCloud";

import adsBanner from "../../assets/blog/ads-banner.jpg";

import style from "./BlogSidebar.module.css";

const BlogSidebar = ({
    author,
    popularPosts,
    categories,
    tags,
    search = "",
    onSearch,
}) => {
    return (
        <aside className={style.sidebar}>

            {/* SEARCH */}

            <form
                className={style.search}
                onSubmit={(e) => e.preventDefault()}
            >

                <input
                    type="text"
                    placeholder="Search Posts"
                    value={search}
                    onChange={(e) => onSearch?.(e.target.value)}
                />

                <button type="submit">
                    ⌕
                </button>

            </form>


            {/* AUTHOR */}

            <div className={style.author}>

                <img
                    src={author.image}
                    alt={author.name}
                />

                <h3>{author.name}</h3>

                <span>{author.role}</span>

                <div className={style.socials}>

                    {author.socials?.map(
                        (social, index) => (
                            <span key={index}>
                                {social}
                            </span>
                        )
                    )}

                </div>

                <p>
                    {author.description}
                </p>

            </div>


            {/* POPULAR */}

            <PopularPosts posts={popularPosts} />


            {/* AD BANNER */}

            <Link to="/packages" className={style.adBanner}>
                <img src={adsBanner} alt="Explore our travel packages" />
            </Link>


            {/* CATEGORIES */}

            <CategoryList
                categories={categories}
            />


            {/* NEWSLETTER */}

            <Newsletter
                description="Here, I focus on a range of items and features that we use in life without giving them a second thought."
            />


            {/* TAGS */}

            <TagCloud tags={tags} />

        </aside>
    );
};

export default BlogSidebar;
