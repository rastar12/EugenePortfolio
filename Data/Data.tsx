import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from "@/Types";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
  { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 8 },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 10 },
  { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 5 },
  { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 2 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,  
    number: 2,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 50,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 30,
    text: "Design Items",
  },
  {
    id: 4,
    number: 112,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/project1.png",
    name: "Real estate Full stack website",
    tools: ["React", "Javascript", "Tailwind CSS","Nodejs","MongoDB"],
    codeLink:"/github",
    liveLink:"https://housekenya-rjs2.onrender.com",
  },
  {
    id: 2,
    img: "/project2.png",
    name: "Fanta E-commerce Landing page",
    tools: ["React", "Tailwind CSS"],
    codeLink:"/github",
    liveLink:"https://fanta-mgxn.onrender.com",
  },
  {
    id: 3,
    img: "/project3.png",
    name: "Generative AI Chat bot",
    tools: ["React", "Gemini Ai API", "Tailwind CSS"],
    codeLink:"/github",
    liveLink:"https://eugeneai.onrender.com",
  },
  {
    id: 4,
    img: "/project4.png",
    name: "Dronean Landing Page",
    tools: ["React", "Javascript", "Tailwind CSS"],
    codeLink:"/github",
    liveLink:"https://drodean.onrender.com",
  },
  {
    id: 5,
    img: "/project5.png",
    name: "SirJayFashionSchool",
    tools: ["React", "Javascript", "Tailwind CSS","Framer motion"],
    codeLink:"https://github.com/rastar12/sirJayWebsite",
    liveLink:"https://moonlit-fairy-36f4be.netlify.app",
  },
  {
    id: 6,
    img: "/project6.png",
    name: "OBject Detection and recognition App",
    tools: ["html", "Javascript", "tensorflow.js","coco-sd model"],
    codeLink:"https://github.com/rastar12/objectDetection.git",
    liveLink:"https://objectdetectorcamera.netlify.app/",
  },
  {
    id: 7,
    img: "/project7.png",
    name: "Audio chat app",
    tools: ["React", "typescript", "javascript","stream","Tailwind.css"],
    codeLink:"https://github.com/rastar12/AudioChat.git",
    liveLink:"/",
  },

    {
    id: 8,
    img: "/project7.png",
    name: "Rexy Agencies Eccomerce",
    tools: ["React", "typescript", "javascript","Mpesa Daraja API","Tailwind.css"],
    codeLink:"https://github.com/rastar12/AudioChat.git",
    liveLink:"/",
  },
];

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 90 },
  { name: "java", level: 15 },
  { name: "ReactJS", level: 90 },
  { name: "ExpressJs", level: 65 },
  { name: "MongoDB", level: 80 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "123 main , street,Nairobi" },
  { id: 2, title: "Phone", text: "+254798148395" },
  { id: 3, title: "Email", text: "eugenechanzu@gmail.com" },
];

export {navLinks, projects, countUpItems, services, skills, contacts };
