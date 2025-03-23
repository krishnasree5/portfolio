export const profile = {
  name: "Krishna Sree",
  role: "Full Stack Developer",
  image:
    "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
  resume: "/KrishnaSree_Resume.pdf",
  social: {
    github: "https://github.com/krishnasree5",
    linkedin: "https://linkedin.com/in/gkrishnasree5",
    leetcode: "https://leetcode.com/gkrishnasree5",
  },
};

export const about = {
  description:
    "I'm a passionate developer with experience in building web applications. I love creating elegant solutions to complex problems and learning new technologies.",
};

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "SR University",
    years: "2022-2026",
    grade: "9.6 CGPA",
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
    ],
  },
  {
    degree: "Intermediate in MPC",
    school: "SR Educenter",
    years: "2020-2022",
    grade: "9.5 CGPA",
    coursework: ["Mathematics", "Physics", "Chemistry"],
  },
];

export const experience = [
  {
    role: "Role1",
    company: "Company 1",
    years: "2020-Present",
    description: "Led development of core features ...",
    achievements: [
      "Improved application performance by 40%",
      "Led a team of 5 developers",
      "Implemented new CI/CD pipeline",
    ],
  },
  {
    role: "Role2",
    company: "Company2",
    years: "2018-2020",
    description: "Developed features for ...",
    achievements: [
      "Developed 3 major features",
      "Reduced bug count by 60%",
      "Mentored junior developers",
    ],
  },
];

export const projects = [
  {
    title: "Library Management System",
    description:
      "A software solution to automate and manage library operations such as book inventory, member management, and circulation",
    image:
      "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=1974&auto=format&fit=crop",
    techStack: ["Django", "Python"],
    liveDemo: "#",
    github: "https://github.com/krishnasree5/library-management-system-ii",
  },
  {
    title: "File Uploader",
    description:
      "A tool that allows users to upload files from their local devices to a server or cloud storage.",
    image:
      "https://images.unsplash.com/vector-1742138990008-9757ccea9a69?q=80&w=2360&auto=format&fit=crop",
    techStack: ["React", "Express", "Prisma", "Supabase"],
    liveDemo: "#",
    github: "https://github.com/krishnasree5/fileuploader",
  },
  {
    title: "CV Application",
    description:
      "A platform that helps users create, format, and submit their CVs for job applications.",
    image:
      "https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?q=80&w=1974&auto=format&fit=crop",
    techStack: ["React"],
    liveDemo: "https://cv-application-six-gamma.vercel.app/",
    github: "https://github.com/krishnasree5/cv-application",
  },
  {
    title: "Members Only",
    description: "",
    image:
      "A web application that enables users to register, log in, and access exclusive content with secure authentication and authorization",
    techStack: ["Express", "Passport.js", "PostgreSQL"],
    liveDemo: "#",
    github: "https://github.com/krishnasree5/membersonly-odinproject",
  },
];

export const skillCategories = {
  languages: {
    title: "Programming Languages",
    icon: "Code2",
    items: [
      {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "C",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        name: "SQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  frontend: {
    title: "Frontend",
    icon: "Layout",
    items: [
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  backend: {
    title: "Backend",
    icon: "Server",
    items: [
      {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "Django",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
      },
    ],
  },
  databases: {
    title: "Databases",
    icon: "Database",
    items: [
      {
        name: "PostgreSQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      // {
      //   name: "MongoDB",
      //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      // },
    ],
  },
};
