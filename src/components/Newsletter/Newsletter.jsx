import { useState } from "react";
import style from "./Newsletter.module.css";

const Newsletter = ({
    title = "Newsletter",
    description,
}) => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null); // null | "success" | "error"

    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim() || !isValidEmail(email)) {
            setStatus("error");
            return;
        }

        // No subscription API exists yet — confirm locally rather than
        // silently logging to the console.
        setStatus("success");
        setEmail("");
    };

    return (
        <div className={style.widget}>

            <h3>{title}</h3>

            {description && (
                <p>{description}</p>
            )}

            <form onSubmit={handleSubmit} noValidate>

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (status) setStatus(null);
                    }}
                    required
                    aria-invalid={status === "error"}
                />

                <button type="submit">
                    →
                </button>

            </form>

            {status === "success" && (
                <p role="status">Thanks for subscribing!</p>
            )}
            {status === "error" && (
                <p role="alert">Please enter a valid email.</p>
            )}

            <small>
                You can unsubscribe at any time
            </small>

        </div>
    );
};

export default Newsletter;