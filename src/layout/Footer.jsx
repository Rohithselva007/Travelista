import style from "./Footer.module.css";

import img from "../assets/i1.jpg";
import img1 from "../assets/i2.jpg";
import img2 from "../assets/i3.jpg";
import img3 from "../assets/i4.jpg";
import img4 from "../assets/i5.jpg";
import img5 from "../assets/i6.jpg";
import img6 from "../assets/i7.jpg";
import img7 from "../assets/i8.jpg";

const Footer = () => {

    const instaImages = [
        img,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7
    ];

    return (
        <footer className={style.footer}>

            {/* Footer Main Content */}
            <div className={style.container}>

                {/* About Agency */}
                <div className={style.column}>

                    <h1>About Agency</h1>

                    <p>
                        The world has become so fast paced that people don't
                        want to stand by reading a page of information, they
                        would much rather look at a presentation and understand
                        the message. It has come to a point.
                    </p>

                </div>


                {/* Navigation Links */}
                <div className={style.column}>

                    <h1>Navigation Links</h1>

                    <div className={style.navigationLinks}>

                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>

                            <li>
                                <a href="/">Features</a>
                            </li>

                            <li>
                                <a href="/">Services</a>
                            </li>

                            <li>
                                <a href="/">Portfolio</a>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <a href="/">Team</a>
                            </li>

                            <li>
                                <a href="/">Pricing</a>
                            </li>

                            <li>
                                <a href="/">Blog</a>
                            </li>

                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>

                    </div>

                </div>


                {/* Newsletter */}
                <div className={style.column}>

                    <h1>Newsletter</h1>

                    <p>
                        Subscribe to receive the latest travel updates,
                        offers and destinations.
                    </p>

                    <div className={style.newsletter}>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                        <button type="button">
                            Subscribe
                        </button>

                    </div>

                </div>


                {/* Instagram Feed */}
                <div className={style.column}>

                    <h1>Instafeed</h1>

                    <div className={style.instaFeed}>

                        {instaImages.map((image, index) => (
                            <a href="#" key={index}>
                                <img
                                    src={image}
                                    alt={`Instagram ${index + 1}`}
                                />
                            </a>
                        ))}

                    </div>

                </div>

            </div>


            {/* Bottom */}
            <div className={style.bottom}>

                <p>
                    © {new Date().getFullYear()} Travelista.
                    All Rights Reserved.
                </p>

                <p>
                    Designed with ❤️ for travelers
                </p>

            </div>

        </footer>
    );
};

export default Footer;