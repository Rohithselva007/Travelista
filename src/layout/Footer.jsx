import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter/Newsletter";
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
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/about">About</Link>
                            </li>

                            <li>
                                <Link to="/packages">Packages</Link>
                            </li>

                            <li>
                                <Link to="/hotels">Hotels</Link>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <Link to="/insurance">Insurance</Link>
                            </li>

                            <li>
                                <Link to="/elements">Elements</Link>
                            </li>

                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>

                    </div>

                </div>


                {/* Newsletter */}
                <div className={style.column}>
                    <Newsletter
                        title="Newsletter"
                        description="Subscribe to receive the latest travel updates, offers and destinations."
                    />
                </div>


                {/* Instagram Feed */}
                <div className={style.column}>

                    <h1>Instafeed</h1>

                    <div className={style.instaFeed}>

                        {instaImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Instagram ${index + 1}`}
                            />
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