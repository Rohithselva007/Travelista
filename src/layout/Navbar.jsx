import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaBars,
    FaTimes,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import { blogPosts } from "../data/blogData";

import style from "./Navbar.module.css";

const mainLinks = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "About",
        path: "/about",
    },
    {
        label: "Packages",
        path: "/packages",
    },
    {
        label: "Hotels",
        path: "/hotels",
    },
    {
        label: "Insurance",
        path: "/insurance",
    },
];

const dropdownLinks = {
    Blog: [
        {
            label: "Blog Home",
            path: "/blog",
        },
        {
            label: "Blog Single",
            path: `/blog/${blogPosts[0].slug}`,
        },
    ],

    Pages: [
        {
            label: "Elements",
            path: "/elements",
        },
        {
            label: "Level 2",
            path: "#",
            children: [
                {
                    label: "Item One",
                    path: "#",
                },
                {
                    label: "Item Two",
                    path: "#",
                },
            ],
        },
    ],
};

const isDecorative = (path) => path === "#";

const Dropdown = ({ label, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((previous) => !previous);
    };

    return (
        <li
            className={`${style.dropdown} ${
                isOpen ? style.dropdownOpen : ""
            }`}
        >
            <button
                type="button"
                className={style.dropdownToggle}
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span>{label}</span>

                <ChevronDown
                    className={style.arrow}
                    size={14}
                    strokeWidth={2}
                />
            </button>

            <ul className={style.dropdownMenu}>
                <DropdownItems links={links} />
            </ul>
        </li>
    );
};
const DropdownItems = ({ links }) => {
    return (
        <>
            {links.map((link) => (
                <li
                    key={`${link.label}-${link.path}`}
                    className={link.children ? style.hasChildren : ""}
                >
                    {link.children ? (
                        <>
                            {/* Has nested items: this trigger only expands
                                the submenu, it never navigates. */}
                            <Link
                                to={link.path}
                                onClick={(event) => event.preventDefault()}
                            >
                                <span>{link.label}</span>

                                <ChevronDown
                                    className={style.submenuArrow}
                                    size={14}
                                    strokeWidth={2}
                                />
                            </Link>

                            <ul className={style.submenu}>
                                <DropdownItems links={link.children} />
                            </ul>
                        </>
                    ) : (
                        <Link
                            to={link.path}
                            onClick={
                                isDecorative(link.path)
                                    ? (event) => event.preventDefault()
                                    : undefined
                            }
                        >
                            {link.label}
                        </Link>
                    )}
                </li>
            ))}
        </>
    );
};

const MobileDropdownItems = ({ links, onClose }) => {
    const [openChild, setOpenChild] = useState(null);

    const toggleChild = (label) => {
        setOpenChild((previous) => (previous === label ? null : label));
    };

    return (
        <>
            {links.map((link) =>
                link.children ? (
                    <div
                        className={style.mobileNestedDropdown}
                        key={link.label}
                    >
                        <button
                            type="button"
                            className={style.mobileNestedButton}
                            onClick={() => toggleChild(link.label)}
                            aria-expanded={openChild === link.label}
                        >
                            <span>{link.label}</span>

                            <ChevronDown
                                className={`
                                    ${style.mobileArrow}
                                    ${openChild === link.label ? style.mobileArrowOpen : ""}
                                `}
                                size={16}
                                strokeWidth={2}
                            />
                        </button>

                        <div
                            className={`
                                ${style.mobileSubmenu}
                                ${openChild === link.label ? style.mobileSubmenuOpen : ""}
                            `}
                        >
                            <MobileDropdownItems
                                links={link.children}
                                onClose={onClose}
                            />
                        </div>
                    </div>
                ) : (
                    <Link
                        key={`${link.label}-${link.path}`}
                        to={link.path}
                        onClick={(event) => {
                            if (isDecorative(link.path)) {
                                event.preventDefault();
                            }

                            onClose();
                        }}
                    >
                        {link.label}
                    </Link>
                )
            )}
        </>
    );
};

const MobileDropdown = ({
    label,
    links,
    isOpen,
    onToggle,
    onClose,
}) => {
    return (
        <div className={style.mobileDropdown}>
            <button
                type="button"
                className={style.mobileDropdownButton}
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span>{label}</span>

                <ChevronDown
                    className={`
                        ${style.mobileArrow}
                        ${isOpen ? style.mobileArrowOpen : ""}
                    `}
                    size={18}
                    strokeWidth={2}
                />
            </button>

            <div
                className={`
                    ${style.mobileSubmenu}
                    ${isOpen ? style.mobileSubmenuOpen : ""}
                `}
            >
                <MobileDropdownItems links={links} onClose={onClose} />
            </div>
        </div>
    );
};

const Navbar = () => {
    const location = useLocation();

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const heroPage =
        location.pathname === "/" ||
        location.pathname === "/about" ||
        location.pathname === "/packages" ||
        location.pathname === "/hotels" ||
        location.pathname === "/insurance" ||
        location.pathname === "/blog" ||
        location.pathname.startsWith("/blog/") ||
        location.pathname.startsWith("/pages/") ||
        location.pathname === "/elements"||
        location.pathname === "/contact";

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.querySelector(
                "[data-page-hero]"
            );

            if (!hero) {
                setScrolled(window.scrollY > 70);
                return;
            }

            const heroBottom =
                hero.getBoundingClientRect().bottom;

            setScrolled(heroBottom <= 80);
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        handleScroll();

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, [location.pathname]);

    const closeMobile = () => {
        setMobileOpen(false);
        setMobileDropdown(null);
    };

    const toggleMobile = () => {
        setMobileOpen((previous) => !previous);
    };


    const toggleMobileDropdown = (label) => {
        setMobileDropdown((previous) =>
            previous === label
                ? null
                : label
        );
    };

    const navbarClass = [
        style.nav,

        heroPage
            ? style.heroNav
            : style.normalNav,

        heroPage && scrolled
            ? style.scrolledNav
            : "",
    ]
        .filter(Boolean)
        .join(" ");

    const mobileMenuClass = [
        style.mobileMenu,

        heroPage && !scrolled
            ? style.heroMobileMenu
            : "",

        heroPage && scrolled
            ? style.scrolledMobileMenu
            : "",

        !heroPage
            ? style.normalMobileMenu
            : "",

        mobileOpen
            ? style.mobileMenuOpen
            : "",
    ]
        .filter(Boolean)
        .join(" ");


    return (
        <>

            {heroPage && (
                <div
                    className={[
                        style.topBar,
                        scrolled
                            ? style.topBarHidden
                            : "",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                >
                    <div className={style.topLeft}>
                        <span>
                            Visit Us
                        </span>

                        <span>
                            Buy Tickets
                        </span>
                    </div>

                    <div className={style.socialIcons}>
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </a>

                        <a href="#" aria-label="Twitter">
                            <FaTwitter />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            )}

            <nav className={navbarClass}>

                {/* LOGO */}

                <div className={style.logo}>
                    <Link
                        to="/"
                        onClick={closeMobile}
                    >
                        <img
                            src={logo}
                            alt="Travelista"
                        />
                    </Link>
                </div>

                <ul className={style.navul}>

                    {mainLinks.map((link) => (
                        <li key={link.path}>
                            <Link to={link.path}>
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    <Dropdown
                        label="Pages"
                        links={dropdownLinks.Pages}
                    />
                    <Dropdown
                        label="Blog"
                        links={dropdownLinks.Blog}
                    />

                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>

                </ul>

                <button
                    type="button"
                    className={style.menuButton}
                    onClick={toggleMobile}
                    aria-label={
                        mobileOpen
                            ? "Close menu"
                            : "Open menu"
                    }
                >
                    {mobileOpen ? (
                        <FaTimes />
                    ) : (
                        <FaBars />
                    )}
                </button>

            </nav>

            <div className={mobileMenuClass}>

                <MobileDropdown
                    label="Pages"
                    links={dropdownLinks.Pages}
                    isOpen={mobileDropdown === "Pages"}
                    onToggle={() =>
                        toggleMobileDropdown("Pages")
                    }
                    onClose={closeMobile}
                />

                <MobileDropdown
                    label="Blog"
                    links={dropdownLinks.Blog}
                    isOpen={mobileDropdown === "Blog"}
                    onToggle={() =>
                        toggleMobileDropdown("Blog")
                    }
                    onClose={closeMobile}
                />

                {mainLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        onClick={closeMobile}
                    >
                        {link.label}
                    </Link>
                ))}



                <Link
                    to="/contact"
                    onClick={closeMobile}
                >
                    Contact
                </Link>
            </div>
        </>
    );
};


export default Navbar;
