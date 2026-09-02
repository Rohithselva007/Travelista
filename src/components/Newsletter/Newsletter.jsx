import { useState } from "react";
import style from "./Newsletter.module.css";

const Newsletter = ({
    title = "Newsletter",
    description,
}) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) return;

        console.log("Subscribed:", email);

        setEmail("");
    };

    return (
        <div className={style.widget}>

            <h3>{title}</h3>

            {description && (
                <p>{description}</p>
            )}

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

                <button type="submit">
                    →
                </button>

            </form>

            <small>
                You can unsubscribe at any time
            </small>

        </div>
    );
};

export default Newsletter;