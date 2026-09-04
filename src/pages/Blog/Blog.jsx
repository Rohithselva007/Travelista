import { useState } from "react";
import { useSearchParams } from "react-router-dom";
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

const POSTS_PER_PAGE = 5;

const Blog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const search = searchParams.get("q") || "";
    const popularPosts = blogPosts.slice(0, 4);

    const normalizedSearch = search.trim().toLowerCase();
    const filteredPosts = normalizedSearch
        ? blogPosts.filter((post) => {
              const haystack = [
                  post.title,
                  post.description,
                  post.author,
                  ...(post.categories || []),
              ]
                  .join(" ")
                  .toLowerCase();
              return haystack.includes(normalizedSearch);
          })
        : blogPosts;

    const totalPages = Math.max(
        1,
        Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
    );
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * POSTS_PER_PAGE;
    const visiblePosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

    const handleSearch = (value) => {
        setPage(1);
        setSearchParams(value ? { q: value } : {});
    };

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

                        {visiblePosts.length > 0 ? (
                            visiblePosts.map((post) => (
                                <BlogCard
                                    key={post.id}
                                    {...post}
                                />
                            ))
                        ) : (
                            <p>No posts match your search.</p>
                        )}

                        <BlogPagination
                            currentPage={safePage}
                            totalPages={totalPages}
                            onPageChange={setPage}
                        />

                    </div>
                    <BlogSidebar
                        author={authorData}
                        popularPosts={popularPosts}
                        categories={categories}
                        tags={tags}
                        search={search}
                        onSearch={handleSearch}
                    />
                </div>
            </section>
        </main>
    );
};

export default Blog;
