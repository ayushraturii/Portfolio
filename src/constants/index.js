import { Link } from "react-scroll";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg"; 


import brain from "../assets/projects/braint.jpg";
import searchen from "../assets/projects/image.png";
import hate from "../assets/projects/hatex.jpg";
import nextw from "../assets/projects/nextword.png";


export const HERO_CONTENT = `I'm a tech enthusiast specializing in Full Stack Development and Machine Learning. I build dynamic web applications with the MERN stack and develop intelligent models using TensorFlow, Keras, and Flask. Passionate about creating innovative solutions that solve real-world problems and enhance user experiences.`;

export const ABOUT_TEXT1 = `I am a third-year BTech student with a strong passion for Full Stack Development and Machine Learning. I have experience with the MERN stack (MongoDB, Express, React, Node.js), where I’ve built dynamic, scalable web applications. I enjoy working on both front-end and back-end technologies to create seamless user experiences.`
export const ABOUT_TEXT2=`
In Machine Learning, I’m proficient in TensorFlow, Keras, scikit-learn, Pandas, and Flask for developing predictive models and creating APIs. My projects include building a next-word text prediction model using LSTM, developing a search engine ranking system based on user interactions, and predicting air quality using environmental data.`
export const ABOUT_TEXT3=`
I am passionate about solving real-world problems and always strive to learn new skills and techniques. My goal is to combine my expertise in Full Stack Development and Machine Learning to build innovative solutions that have a tangible impact and enhance user experiences.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

/* export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
]; */

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1, // Replace with your image
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "SmartSearch",
    image: searchen, // Replace with your image
    description:
      "A search engine enhancement project using machine learning and Google Custom Search API to rank results based on relevance to past searches.",
    technologies: ["Flask", "Python", "Google Custom Search API", "Machine Learning", "NLP"],
  },
  {
    title: "NextWord",
    image: nextw, // Replace with your image
    description:
      "A next-word text prediction project built with LSTM, Flask, and TensorFlow, with functionalities for real-time suggestions and writing assistance.",
    technologies: ["Flask", "TensorFlow", "LSTM", "Keras", "Python"],
  },
  {
    title: "BrainTumorDetection",
    image: brain, // Replace with your image
    description:
      "A healthcare chatbot providing symptom analysis and predictions for brain tumor detection, with conversational AI features.",
    technologies: ["Flask", "Python", "Machine Learning", "Deep Learning", "LSTM"],
  },
  {
    title: "HateX",
    image: hate, // Replace with your image
    description:
      "A hate speech detection system using machine learning algorithms to classify text based on hate speech patterns.",
    technologies: ["Python", "Machine Learning", "Natural Language Processing"],
  },
  
];


export const CONTACT = {
  address: "Graphic Era University, Clement Town, Dehradun, Uttarakhand, IND 248002 ",
  phoneNo: "+91 7060602717",
  email: "ayushraturi2222@gmail.com",
};
