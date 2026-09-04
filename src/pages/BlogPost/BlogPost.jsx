import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

const initialComments = [
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
    const navigate = useNavigate();
    const [comments, setComments] = useState(initialComments);
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState("");
    const [commentForm, setCommentForm] = useState({ name: "", email: "", text: "" });
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

    const now = () =>
        new Date().toLocaleString("en-US", {
            day: "2-digit", month: "short", year: "numeric", hour: "numeric", minute: "2-digit",
        });

    const handleReplySubmit = (event, parentName) => {
        event.preventDefault();
        if (!replyText.trim()) return;
        setComments((prev) => [
            ...prev,
            {
                avatar: post.image,
                name: "You",
                date: `${now()} (reply to ${parentName})`,
                text: replyText.trim(),
            },
        ]);
        setReplyText("");
        setReplyingTo(null);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (!commentForm.name.trim() || !commentForm.email.trim() || !commentForm.text.trim()) return;
        setComments((prev) => [
            ...prev,
            {
                avatar: post.image,
                name: commentForm.name.trim(),
                date: now(),
                text: commentForm.text.trim(),
            },
        ]);
        setCommentForm({ name: "", email: "", text: "" });
    };

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
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share on Facebook"
                                ><FaFacebookF /></a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share on Twitter"
                                ><FaTwitter /></a>
                                <a
                                    href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(post.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share on Pinterest"
                                ><FaPinterestP /></a>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share on LinkedIn"
                                ><FaLinkedinIn /></a>
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
                                {comments.map((comment, i) => (
                                    <li key={`${comment.name}-${i}`}>
                                        <img src={comment.avatar} alt={comment.name} />

                                        <div>
                                            <h4>{comment.name}</h4>
                                            <span className={style.commentDate}>{comment.date}</span>
                                            <p>{comment.text}</p>
                                            <button
                                                type="button"
                                                className={style.replyBtn}
                                                onClick={() =>
                                                    setReplyingTo(replyingTo === i ? null : i)
                                                }
                                            >
                                                {replyingTo === i ? "Cancel" : "Reply"}
                                            </button>

                                            {replyingTo === i && (
                                                <form
                                                    className={style.commentForm}
                                                    onSubmit={(e) => handleReplySubmit(e, comment.name)}
                                                >
                                                    <textarea
                                                        rows={3}
                                                        placeholder={`Reply to ${comment.name}`}
                                                        value={replyText}
                                                        onChange={(e) => setReplyText(e.target.value)}
                                                        required
                                                    />
                                                    <button type="submit" className={style.submitBtn}>
                                                        Post Reply
                                                    </button>
                                                </form>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Comment Form */}
                        <div className={style.commentForm}>
                            <h3>Leave a Comment</h3>

                            <form onSubmit={handleCommentSubmit}>
                                <div className={style.formRow}>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={commentForm.name}
                                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={commentForm.email}
                                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <textarea
                                    rows={5}
                                    placeholder="Your Comment"
                                    value={commentForm.text}
                                    onChange={(e) => setCommentForm({ ...commentForm, text: e.target.value })}
                                    required
                                />

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
                        onSearch={(value) => navigate(`/blog?q=${encodeURIComponent(value)}`)}
                    />

                </div>
            </section>
        </>
    );
};

export default BlogPost;
