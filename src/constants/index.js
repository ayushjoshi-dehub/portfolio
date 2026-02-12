import { px } from "motion/react";
import { RGBA_ASTC_12x10_Format } from "three";

export const myProjects = [
  {
    id: 1,
    title: "Anthola Travel – Intelligent Bus Booking Platform",
    description:
      "A production-ready travel booking ecosystem enabling real-time seat reservations, secure digital payments, and role-based dashboards for customers and bus operators.",
    subDescription: [
      "Engineered real-time seat locking using WebSockets with TTL-based auto-release to eliminate double booking conflicts.",
      "Designed a multi-role architecture supporting passengers and verified bus owners with dynamic inventory control.",
      "Implemented JWT-based authentication with encrypted credentials and secure payment QR integration.",
      "Built scalable REST APIs with optimized booking workflows and user history analytics dashboard.",
      "Architected with performance-first design for mobile responsiveness and low-latency booking experience.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/anthola.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      
    ],
  },

  {
    id: 2,
    title: "Inertia – Personal Assistant",
    description:
      "A locally-deployed intelligent AI assistant built for edge devices, combining computer vision, voice interaction, and task automation into a secure embedded ecosystem.",
    subDescription: [
      "Developed real-time facial recognition for personalized identity-based system access.",
      "Integrated object detection pipeline using optimized CV models for real-world interaction.",
      "Engineered secure password + TTL session control system to prevent unauthorized access.",
      "Implemented speech-to-text and natural voice response engine with reminders, weather, time tracking, and task memory.",
      "Designed hybrid architecture supporting both cloud APIs and offline LLM inference.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/inertia.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "OpenCV", path: "/assets/logos/opencv.svg" },
      { id: 3, name: "Raspberry Pi", path: "/assets/logos/raspberrypi.svg" },
      
    ],
  },

  {
    id: 3,
    title: "AI PhotoBooth – Automated Smart Imaging System",
    description:
      "An AI-driven automated photo booth solution delivering real-time face alignment, passport auto-formatting, background removal, and instant print layout generation.",
    subDescription: [
      "Built high-precision face detection and alignment engine for consistent professional framing.",
      "Integrated AI segmentation for real-time background removal and enhancement.",
      "Automated 4x2 passport print layout generator optimized for studio deployment.",
      "Designed QR-based payment interface with offline fallback architecture.",
      "Engineered a production-ready pipeline for small business photo studios.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/photobooth.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "OpenCV", path: "/assets/logos/opencv.svg" },
      { id: 4, name: "Automation", path: "/assets/logos/git.svg" },
    ],
  },

  {
    id: 4,
    title: "NovaStrike – 2D Space Combat Engine",
    description:
      "A high-performance arcade-style space shooter built with custom physics logic, dynamic enemy AI, and optimized rendering loop architecture.",
    subDescription: [
      "Developed modular game architecture with collision physics and responsive input handling.",
      "Implemented adaptive difficulty scaling and procedural enemy spawning system.",
      "Optimized frame rendering loop to maintain stable FPS under high object density.",
      "Designed score persistence and progressive gameplay mechanics.",
      "Structured as a reusable 2D game engine prototype.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/space-game.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "PyGame", path: "/assets/logos/python.svg" },
      { id: 3, name: "Game Dev", path: "/assets/logos/git.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/ayushjoshi-dehub",
    icon: "/assets/projects/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ayush-joshi-131052259",
    icon: "/assets/projects/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/joshiayush78",
    icon: "/assets/projects/socials/instagram.svg",
  },
];


export const experiences = [
  {
    title: "+2",
    address: "little angels,lalitpur",
    date: "2020-2022",
    contents: [
      "Completed +2 education with a focus on science, achieving a strong academic record and developing a solid foundation in subjects like physics, chemistry, and mathematics.",
      "Engaged in extracurricular activities, including coding clubs and science fairs, to enhance practical skills and foster a passion for technology.",
      "Collaborated on projects that involved programming and problem-solving, further solidifying my interest in software development.",
    ],
  },
  {
    title: "computer Engineering",
    address: "Advanced college of engineering and management, kathmandu",
    date: "2023-2027",
    contents: [
    "Pursuing a Bachelor's degree in Computer Engineering, gaining comprehensive knowledge in software development, algorithms, data structures, and computer architecture.",
    "Participating in internships and projects that provide hands-on experience with modern technologies and development practices.",
    "Actively involved in coding competitions and hackathons, honing problem-solving skills and staying updated with industry trends.",  
    ],
  },
];
export const reviews = [
  {
    name: "aviskar",
    username: "@justxav",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "apil",
    username: "@apil saman",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Himal",
    username: "@himaljoshi",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Aaryan",
    username: "@aaryan_chand1",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Binarma",
    username: "@binarma_987",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: " Ayusuh karn",
    username: "@karn123",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "aarogye",
    username: "@aarogye_12",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "bikram",
    username: "@bikram_shah",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
