import { useState } from "react";
import style from "./ContactSection.module.css";
import { contactInfoData, initialFormState } from "../../data/contactData";

const initialForm = initialFormState;

const ContactSection = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: undefined,
        }));
    };

    const validate = () => {
        const nextErrors = {};

        if (!form.name.trim()) {
            nextErrors.name = "Please enter your name.";
        }

        if (!form.email.trim()) {
            nextErrors.email = "Please enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            nextErrors.email = "Please enter a valid email address.";
        }

        if (!form.subject.trim()) {
            nextErrors.subject = "Please add a subject.";
        }

        if (!form.message.trim()) {
            nextErrors.message = "Please write a message.";
        }

        return nextErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nextErrors = validate();

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            setStatus("idle");
            return;
        }

        // No backend is wired up yet — this simulates a successful send
        // so the form can be swapped for a real API call later.
        setStatus("success");
        setForm(initialForm);
    };

    return (
        <section className={style.contact}>
            <div className={style.container}>

                {/* Info Cards */}
                <div className={style.infoGrid}>
                    {contactInfoData.map(({ icon: Icon, title, lines }) => (
                        <div className={style.infoCard} key={title}>
                            <span className={style.infoIcon}>
                                <Icon />
                            </span>

                            <h3>{title}</h3>

                            {lines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Form */}
                <div className={style.formWrapper}>
                    <div className={style.formHeading}>
                        <h2>Send Us a Message</h2>
                        <p>
                            Have a question about a package, a booking, or
                            just want to say hello? Fill out the form and
                            our team will get back to you shortly.
                        </p>
                    </div>

                    <form className={style.form} onSubmit={handleSubmit} noValidate>

                        <div className={style.formRow}>
                            <div className={style.field}>
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your full name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={errors.name ? style.inputError : ""}
                                />
                                {errors.name && (
                                    <span className={style.errorText}>{errors.name}</span>
                                )}
                            </div>

                            <div className={style.field}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={errors.email ? style.inputError : ""}
                                />
                                {errors.email && (
                                    <span className={style.errorText}>{errors.email}</span>
                                )}
                            </div>
                        </div>

                        <div className={style.field}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="What's this about?"
                                value={form.subject}
                                onChange={handleChange}
                                className={errors.subject ? style.inputError : ""}
                            />
                            {errors.subject && (
                                <span className={style.errorText}>{errors.subject}</span>
                            )}
                        </div>

                        <div className={style.field}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Tell us a bit more..."
                                value={form.message}
                                onChange={handleChange}
                                className={errors.message ? style.inputError : ""}
                            />
                            {errors.message && (
                                <span className={style.errorText}>{errors.message}</span>
                            )}
                        </div>

                        <button type="submit" className={style.button}>
                            Send Message
                        </button>

                        {status === "success" && (
                            <p className={style.successText} role="status">
                                Thanks for reaching out! We&rsquo;ll get back to you soon.
                            </p>
                        )}
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
