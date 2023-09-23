import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

export const navLinks = [
  {
    id: 1,
    link: "home",
    path:'/',
  },
  {
    id: 2,
    link: "about",
    path:'/about',
  },
  {
    id: 3,
    link: "portfolio",
    path:'/portfolio',
  },
  {
    id: 4,
    link: "technologies",
    path:'/technologies',
  },
  {
    id: 5,
    link: "contact",
    path:'/contact',

  },
];

export const technologies = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",

    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactImage,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 6,
    src: nextjs,
    title: "Next JS",
    style: "shadow-white",
  },
  {
    id: 7,
    src: graphql,
    title: "GraphQL",
    style: "shadow-pink-400",
  },
  {
    id: 8,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
];

export const portfolios = [
  {
    id: 1,
    // src: arrayDestruct,
  },
  {
    id: 2,
    // src: reactParallax,
  },
  {
    id: 3,
    // src: navbar,
  },
  {
    id: 4,
    // src: reactSmooth,
  },
  {
    id: 5,
    // src: installNode,
  },
  {
    id: 6,
    // src: reactWeather,
  },
];



// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];


// Enter your Work Education here
export const educationkDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hi@example.com",
  phone: "+91 12345 67890",
};