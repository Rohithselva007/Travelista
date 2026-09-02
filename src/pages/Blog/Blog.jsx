import { useState } from "react";

import BlogHero from "../../components/BlogHero/BlogHero";
import BlogFeature from "../../components/BlogHome/BlogFeature";
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogPagination from "../../components/BlogPagination/BlogPagination";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";
import {
    featureCards,
    blogPosts,
    categories,
    tags,
    authorData,
} from "../../data/blogData";
import style from "./Blog.module.css";


const Blog = () => {

    const [page, setPage] = useState(1);

    const popularPosts = blogPosts.slice(0, 4);

    return (
        <main className={style.blogPage}>

            <BlogHero />

            <section className={style.featuresSection}>
                {featureCards.map((feature) => (
                    <BlogFeature
                        key={feature.id}
                        {...feature}
                    />
                ))}
            </section>


            <section className={style.blogSection}>

                <div className={style.blogContainer}>

                    <div className={style.posts}>

                        {blogPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                {...post}
                            />
                        ))}

                        <BlogPagination
                            currentPage={page}
                            totalPages={9}
                            onPageChange={setPage}
                        />

                    </div>


                    <BlogSidebar
                        author={authorData}
                        popularPosts={popularPosts}
                        categories={categories}
                        tags={tags}
                    />

                </div>

            </section>

        </main>
    );
};

export default Blog;
