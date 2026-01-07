// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/sanidhyy/3d-portfolio/",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full Stack",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "UI & UX",
    icon: backend,
  },
  
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "React JS",
    icon: reactjs,
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
  
] as const;

export const EXPERIENCES = [
  {
    title: "Intern – Python with AI & Data Science",
    company_name: "NSIC – Technical Services Centre",
    icon: meta,
    iconBg: "#1E88E5",
    date: "05 Aug 2024 – 12 Aug 2024",
    points: [
      "Completed a one-week internship training on Python with AI and Data Science.",
      "Worked on Python fundamentals, data handling, and basic data analysis concepts.",
      "Learned the basics of AI and its real-world applications.",
      "Improved logical thinking and problem-solving skills through hands-on exercises."
    ],
  },
  {
    title: "Frontend / Full Stack Development Intern",
    company_name: "Luisant Software Solutions",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Aug 2025 – Nov 2025",
    points: [
      "Worked on building and maintaining responsive web interfaces using React.js.",
      "Assisted in integrating frontend components with backend APIs.",
      "Collaborated with team members on UI improvements and feature development.",
      "Gained practical experience in version control, debugging, and UI/UX basics."
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "A streaming platform clone inspired by Disney+, allowing users to browse and view high-quality content with a clean and responsive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Shoppy Dashboard",
    description:
      "An admin dashboard application featuring theme customization, dark mode, analytics charts, and multiple interactive pages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "Travel Advisor",
    description:
      "A travel advisory web application that displays nearby restaurants, hotels, and attractions using real-time data with filters and ratings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/pavithra071105",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;


export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/pavithraminisamy070105/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/pavithra071105",
  },
] as const;
