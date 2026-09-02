import blog1 from "../assets/blog/feature-img1.jpg";
import blog2 from "../assets/blog/feature-img2.jpg";
import blog3 from "../assets/blog/feature-img3.jpg";
import blog4 from "../assets/blog/feature-img4.jpg";
import blog5 from "../assets/blog/feature-img5.jpg";
import author from "../assets/blog/user-info.png";

const sharedBody = [
    "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the cost.",
    "The truth is, a good boot camp compresses months of trial and error into a few focused days — you're paying for the shortcuts someone else already learned the hard way.",
    "Whether that trade-off is worth it depends entirely on how much your own time is worth, and how steep the learning curve looks from where you're standing.",
];

export const blogPosts = [
    {
        id: 1,
        slug: "astronomy-binoculars-a-great-alternative",
        image: blog1,
        title: "Astronomy Binoculars A Great Alternative",
        categories: ["Food", "Technology", "Politics", "Lifestyle"],
        author: "Mark wiens",
        date: "12 Dec, 2017",
        views: "1.2M Views",
        comments: "06 Comments",
        description:
            "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
        body: sharedBody,
    },
    {
        id: 2,
        slug: "the-basics-of-buying-a-telescope",
        image: blog2,
        title: "The Basics Of Buying A Telescope",
        categories: ["Food", "Technology", "Politics", "Lifestyle"],
        author: "Mark wiens",
        date: "12 Dec, 2017",
        views: "1.2M Views",
        comments: "06 Comments",
        description:
            "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
        body: sharedBody,
    },
    {
        id: 3,
        slug: "the-glossary-of-telescopes",
        image: blog3,
        title: "The Glossary Of Telescopes",
        categories: ["Food", "Technology", "Politics", "Lifestyle"],
        author: "Mark wiens",
        date: "12 Dec, 2017",
        views: "1.2M Views",
        comments: "06 Comments",
        description:
            "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
        body: sharedBody,
    },
    {
        id: 4,
        slug: "the-night-sky",
        image: blog4,
        title: "The Night Sky",
        categories: ["Food", "Technology", "Politics", "Lifestyle"],
        author: "Mark wiens",
        date: "12 Dec, 2017",
        views: "1.2M Views",
        comments: "06 Comments",
        description:
            "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
        body: sharedBody,
    },
    {
        id: 5,
        slug: "telescopes-101",
        image: blog5,
        title: "Telescopes 101",
        categories: ["Food", "Technology", "Politics", "Lifestyle"],
        author: "Mark wiens",
        date: "12 Dec, 2017",
        views: "1.2M Views",
        comments: "06 Comments",
        description:
            "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
        body: sharedBody,
    },
];

export const categories = [
    { name: "Technology", count: "37" },
    { name: "Lifestyle", count: "24" },
    { name: "Fashion", count: "59" },
    { name: "Art", count: "29" },
    { name: "Food", count: "15" },
    { name: "Architecture", count: "09" },
    { name: "Adventure", count: "44" },
];

export const tags = [
    "Technology", "Fashion", "Architecture", "Food",
    "Lifestyle", "Art", "Adventure",
];

export const authorData = {
    image: author,
    name: "Charlie Barber",
    role: "Senior blog writer",
    socials: ["f", "t", "g+", "in"],
    description:
        "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get.",
};

export const featureCards = [
    {
        id: 1,
        image: blog1,
        title: "Social Life",
        description: "Enjoy your social life together",
    },
    {
        id: 2,
        image: blog2,
        title: "Politics",
        description: "Be a part of politics",
    },
    {
        id: 3,
        image: blog3,
        title: "Food",
        description: "Let the food be finished",
    },
];
