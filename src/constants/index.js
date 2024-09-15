import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "First-Year",
    icon: web,
  },
  {
    title: "Bachelor of Science",
    icon: mobile,
  },
  {
    title: "Computer Science",
    icon: backend,
  },
  {
    title: "Data Science",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Minecraft Java",
    company_name: "Java Programming Language",
    icon: starbucks,
    iconBg: "#383E56",
    date: "13 Years Old",
    points: [
      "I love playing Minecraft, the community that makes mods on the game which exposed me to create mods with the community using Java programming language",
    ],
  },
  {
    title: "Skyrim",
    company_name: "Papyrus",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "16 Years Old",
    points: [
      "I loved modding in Minecraft but now I started to join the Skyrim's modding community, which is the game that has the most mods developed. Here I learned the Papyrus scripting developed by Bethesda, making the script is very hard and time consuming but addicting and it's the coding that made me use my problem solving skills the most.",
    ],
  },
  {
    title: "Roblox",
    company_name: "Lua",
    icon: shopify,
    iconBg: "#383E56",
    date: "17 Years Old",
    points: [
      "I was a texture designer for the game that my friends are developing, I wasn't really coding Lua that much but I am exposed to alot of copy pasting lua scripts that my friends send me in order to import the textures into the models of the game.",
    ],
  },
  {
    title: "College",
    company_name: "HTML, Javascript, Python",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "18 Years Old",
    points: [
      "Today I am now taking a Computer Science in University of Perpetual Help Molino course and learning how to code HTML, Javascript, and Python. I love coding and I will continue to learn languages until I met the horizon!",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "My motivation is God as always and I want to glorify Him with this.",
    name: "God",
    designation: "Motivation",
    company: "God",
    image: "https://media.istockphoto.com/id/1094376302/vector/vector-illustration-of-christian-logo-emblem-with-cross-and-holy-bible-religious-community.jpg?s=612x612&w=0&k=20&c=6O929_auFKbAQWFU-2MJm80dqxwjhq1SDMMYJxBsSaQ=",
  },
  {
    testimonial:
      "I love people and I want people to love me. I want to develop something that will improve society.",
    name: "Love of People",
    designation: "Motivation",
    company: "love",
    image: "https://img.freepik.com/free-vector/heart_78370-492.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid",
  },
  {
    testimonial:
      "I love science and through science we can develop.",
    name: "Science and Technology",
    designation: "Motivation",
    company: "knowledge and development",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rY_AQMeDc2Uzera738sBd_Bx2Oz-rr65cg&s",
  },
];

const projects = [
  {
    name: "My First Blog",
    description:
      "An HTML and CSS page that explain the hisorical perspective of computing and IT basics.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "blog",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Python ASCII Art Output",
    description:
      "My handsome teacher's (Sir Val) first activity in Fundamentals of Programming class",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "output",
        color: "green-text-gradient",
      },
      {
        name: "ascii",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Grade Computation Tool",
    description:
      "A python tool that computes the required grades in a web interface to pass the subject in Sir Val's class.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "grades",
        color: "green-text-gradient",
      },
      {
        name: "bagsak",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
