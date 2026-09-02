import { Link, useParams } from "react-router-dom";
import style from "./BlogPost.module.css";

import {
    FaUser, FaRegCalendarAlt, FaRegEye, FaRegComment,
    FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn,
} from "react-icons/fa";

import { blogPosts, categories, tags, authorData } from "../../data/blogData";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

import postImg1 from "../../assets/blog/post-img1.jpg";
import postImg2 from "../../assets/blog/post-img2.jpg";
import prevThumb from "../../assets/blog/prev.jpg";
import nextThumb from "../../assets/blog/next.jpg";
import c1 from "../../assets/blog/c1.jpg";
import c2 from "../../assets/blog/c2.jpg";
import c3 from "../../assets/blog/c3.jpg";
import c4 from "../../assets/blog/c4.jpg";
import c5 from "../../assets/blog/c5.jpg";
import aboutBg from "../../assets/top-banner.jpg";

const comments = [
    {
        avatar: c1,
        name: "Emily Blunt",
        date: "4 Dec, 2025 at 3:12 pm",
        text: "This is exactly the kind of practical advice I needed before my trip. Bookmarking this.",
    },
    {
        avatar: c2,
        name: "Elsie Cunningham",
        date: "5 Dec, 2025 at 9:40 am",
        text: "Loved the point about leaving room for spontaneity — that's usually when the best memories happen.",
    },
    {
        avatar: c3,
        name: "Annie Stephens",
        date: "6 Dec, 2025 at 11:02 am",
        text: "Great read! Would love a follow-up on budget breakdowns for longer trips.",
    },
    {
        avatar: c4,
        name: "Maria Luna",
        date: "7 Dec, 2025 at 2:18 pm",
        text: "Shared this with my travel group, thank you for putting it together.",
    },
    {
        avatar: c5,
        name: "Ina Hayes",
        date: "8 Dec, 2025 at 6:55 pm",
        text: "Curious how this changes for solo travelers — any tips?",
    },
];

const BlogPost = () => {
    const { slug } = useParams();
    const index = blogPosts.findIndex((item) => item.slug === slug);
    const post = index !== -1 ? blogPosts[index] : null;

    if (!post) {
        return (
            <section className={style.notFound}>
                <h1>Post not found</h1>
                <p>We couldn&rsquo;t find the article you were looking for.</p>
                <Link to="/blog" className={style.backLink}>
                    ← Back to Blog
                </Link>
            </section>
        );
    }

    const prevPost = blogPosts[(index - 1 + blogPosts.length) % blogPosts.length];
    const nextPost = blogPosts[(index + 1) % blogPosts.length];
    const popularPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 4);

    return (
        <>
            <section
                className={style.hero}
                data-page-hero
                style={{
                    backgroundImage: `url(${aboutBg})`,
                }}
            >
                <div className={style.overlay}></div>

                <div className={style.heroContent}>
                    <h1>Blog Details Page</h1>

                    <div className={style.breadcrumb}>
                        <Link to="/">HOME</Link>
                        <span className={style.arrow}>→</span>
                        <Link to="/blog">BLOG</Link>
                        <span className={style.arrow}>→</span>
                        <span className={style.current}>BLOG DETAILS</span>
                    </div>
                </div>
            </section>

            <section className={style.postSection}>
                <div className={style.container}>

                    <article className={style.article}>

                        <div className={style.imageWrapper}>
                            <img src={post.image} alt={post.title} />
                        </div>

                        <div className={style.meta}>
                            <div className={style.categories}>
                                {post.categories.map((category) => (
                                    <span key={category}>{category}</span>
                                ))}
                            </div>

                            <div className={style.metaInfo}>
                                <span><FaUser /> {post.author}</span>
                                <span><FaRegCalendarAlt /> {post.date}</span>
                                <span><FaRegEye /> {post.views}</span>
                                <span><FaRegComment /> {post.comments}</span>
                            </div>

                            <div className={style.shareRow}>
                                <span>Share:</span>
                                <a href="#" aria-label="Share on Facebook"><FaFacebookF /></a>
                                <a href="#" aria-label="Share on Twitter"><FaTwitter /></a>
                                <a href="#" aria-label="Share on Pinterest"><FaPinterestP /></a>
                                <a href="#" aria-label="Share on LinkedIn"><FaLinkedinIn /></a>
                            </div>
                        </div>

                        <div className={style.body}>
                            {post.body.slice(0, 3).map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>

                        <div className={style.twinImages}>
                            <img src={postImg1} alt="" />
                            <img src={postImg2} alt="" />
                        </div>

                        {post.body[3] && (
                            <div className={style.body}>
                                <p>{post.body[3]}</p>
                            </div>
                        )}

                        {/* Prev / Next */}
                        <div className={style.postNav}>
                            <Link to={`/blog/${prevPost.slug}`} className={style.navCard}>
                                <img src={prevThumb} alt="" />
                                <div>
                                    <span>Prev Post</span>
                                    <h4>{prevPost.title}</h4>
                                </div>
                            </Link>

                            <Link to={`/blog/${nextPost.slug}`} className={`${style.navCard} ${style.navCardRight}`}>
                                <div>
                                    <span>Next Post</span>
                                    <h4>{nextPost.title}</h4>
                                </div>
                                <img src={nextThumb} alt="" />
                            </Link>
                        </div>

                        {/* Comments */}
                        <div className={style.comments}>
                            <h3>{comments.length} Comments</h3>

                            <ul className={style.commentList}>
                                {comments.map((comment) => (
                                    <li key={comment.name}>
                                        <img src={comment.avatar} alt={comment.name} />

                                        <div>
                                            <h4>{comment.name}</h4>
                                            <span className={style.commentDate}>{comment.date}</span>
                                            <p>{comment.text}</p>
                                            <button type="button" className={style.replyBtn}>
                                                Reply
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Comment Form */}
                        <div className={style.commentForm}>
                            <h3>Leave a Comment</h3>

                            <form onSubmit={(event) => event.preventDefault()}>
                                <div className={style.formRow}>
                                    <input type="text" placeholder="Your Name" required />
                                    <input type="email" placeholder="Your Email" required />
                                </div>

                                <textarea rows={5} placeholder="Your Comment" required />

                                <button type="submit" className={style.submitBtn}>
                                    Post Comment
                                </button>
                            </form>
                        </div>

                    </article>

                    <BlogSidebar
                        author={authorData}
                        popularPosts={popularPosts}
                        categories={categories}
                        tags={tags}
                    />

                </div>
            </section>
        </>
    );
};

export default BlogPost;
