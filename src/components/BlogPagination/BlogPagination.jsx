import style from "./BlogPagination.module.css";

const BlogPagination = ({
    currentPage = 1,
    totalPages = 9,
    onPageChange,
}) => {
    return (
        <div className={style.pagination}>

            <button
                onClick={() =>
                    onPageChange?.(Math.max(1, currentPage - 1))
                }
            >
                ‹
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    className={
                        currentPage === page
                            ? style.active
                            : ""
                    }
                    onClick={() => onPageChange?.(page)}
                >
                    {String(page).padStart(2, "0")}
                </button>
            ))}

            <button
                onClick={() =>
                    onPageChange?.(
                        Math.min(totalPages, currentPage + 1)
                    )
                }
            >
                ›
            </button>

        </div>
    );
};

export default BlogPagination;