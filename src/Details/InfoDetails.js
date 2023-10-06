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
    Position: "IT Excutive MERN Stack Developer",
    Company: `Hi-tek Syndicate`,
    Location: "New Delhi",
    Type: "Full Time",
    Duration: "Mar 2021 - Oct 2022",
  },
  {
    Position: "Desktop Support Engineer",
    Company: `Netsoft Consulting Services (P) `,
    Location: "New Delhi",
    Type: "Full Time",
    Duration: "Feb 2020 - Nov 2020",
  },
  {
    Position: "IT Excutive",
    Company: `Hi-tek Syndicate`,
    Location: "New Delhi",
    Type: "Full Time",
    Duration: "Oct 2017 - Feb 2020",
  },
  
];


// Enter your Work Education here
export const educationkDetails = [
  {
    Position: "Bachelor of Computer Applications",
    Company: `Indira Gandhi National Open University`,
    Location: "New Delhi",
    Type: "Correspondence",
    Duration: "Jul 2017 - Jul 2022",
  },
  {
    Position: "Newton School Web Development Bootcamp",
    Company: `Newton School`,
    Location: "Online",
    Type: "Internship and Certifications",
    Duration: "Jun 2022 - Till",
  },

];

// Enter your Contact Details here
export const contactDetails = {
  email: "amitmali978@gmail.com",
  phone: "+91 97186 98409",
};