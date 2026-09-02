import style from "./OtherIssues.module.css";
import { servicesData } from "../../data/servicesData";

const OtherIssues = () => {
    const issues = servicesData;

    return (
        <section className={style.issues}>
            <div className={style.heading}>
                <h2>Other issues we can help you with</h2>

                <p>
                    We all live in an age that belongs to the young at heart.
                    Life that is.
                </p>
            </div>

            <div className={style.grid}>
                {issues.map((issue, index) => (
                    <div className={style.card} key={issue.title}>
                        <div className={style.imageWrapper}>
                            <img src={issue.image} alt={issue.title} />
                        </div>

                        <h3 className={index === 0 ? style.activeTitle : ""}>
                            {issue.title}
                        </h3>

                        <p>{issue.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OtherIssues;