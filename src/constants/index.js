import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const HERO_CONTENT = `As a Full-Stack Software Engineer, I am eager to transition from two years in embedded software to the dynamic realm of full-stack web development. My military experience instilled in me the importance of discipline and teamwork, shaping me into an engineer who thrives in challenging environments that foster growth and innovation. With meticulous attention to detail and a procedural mindset developed through experiences in the military, academia, bodybuilding, and the defense industry, I tackle challenges with a positive and focused attitude. I am now actively seeking opportunities to demonstrate my capabilities in a Full-Stack Software Engineer role, prepared to bring my unique perspective and skills to the forefront.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack software engineer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, TypeScript, Node.js, Express, MongoDB, Python, and C++. My journey in software began when I was 15, and my curiosity for learning how things work evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in a variety of environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy bodybuilding, snowboarding, Electronic Dance Music (EDM), video games, anime, reading, and tending to my cat who requires unwavering attention.`;

export const EXPERIENCES = [
  {
    year: "January 2024 - May 2024",
    role: "Full Stack Software Engineer",
    company: "General Assembly",
    companyWebsite: "https://generalassemb.ly/",
    description: [
      `Full time bootcamp student in the Software Engineering Bootcamp that included 480+ hours of professional training over twelve weeks. Utilized a hands-on approach to practice user-centered design Software Engineering methods, including technical skills, team collaboration, and client relations.`,
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node",
      "Jest",
      "MongoDB",
      "Mongoose",
      "Express",
      "Tailwind CSS",
      "CSS3",
      "HTML5",
      "EJS",
      "Git",
      "Python",
      "RESTful API",
      "OAuth",
      "Postman",
    ],
  },
  {
    year: "December 2021 - December 2023",
    role: "Software Engineer 3",
    company: "General Dynamics Missions Systems",
    companyWebsite: "https://gdmissionsystems.com/",
    description: [
      `Created procedural and troubleshooting guides to narrow the knowledge disparity between seasoned and junior engineers. Leveraging expertise in a specialized product domain, I mentored new team members through the procedures, leading to accelerated onboarding and enhanced system comprehension among the engineering team.`,
      `Designed a VLAN feature utilizing event-driven software and cryptographic principles to serve as an intermediary between two interfaces. This innovation facilitated efficient communication of network traffic between the user interface and the network interface, enhancing overall functionality.`,
      `Managed version control of C++ source code and packages to incorporate new features while preserving existing functionality within an embedded RTOS environment.`,
      `Adhered to Agile/Scrum methodology and employed CI/CD practices to guarantee prompt delivery of software projects, utilizing IBM ClearCase for version control.`,
      `Conducted reviews aimed at enhancing code quality and ensuring compliance with stringent security standards.`,
    ],
    technologies: ["C++", "IBM Rhapsody", "IBM ClearCase"],
  },
  {
    year: "May 2019 - September 2019",
    role: "Software Engineer Intern",
    company: "Wilcox Industries",
    companyWebsite: "https://wilcoxind.com/",
    description: [
      `Collaborated on a small team to develop a software prototype that effectively showcased the viability of a novel research concept, establishing a foundation for the company to seamlessly continue the project upon our team's departure.`,
      `Designed a unique UI/UX interface utilizing Android Studio, Java, Kotlin, CSS, and HTML to establish connectivity with an external camera via Bluetooth and USB on an Android phone app.`,
    ],
    technologies: ["Java", "Kotlin", "Android Studio", "HTML", "CSS"],
  },
  {
    year: "August 2016 - August 2022",
    role: "Aircraft Technician",
    company: "US Air National Guard",
    companyWebsite: "https://www.104fw.ang.af.mil/",
    description: [
      `Provided training and mentorship to junior technicians in aircraft maintenance and repair, specializing in F-15 Fighter Jets.`,
      `Successfully completed Air Force Boot Camp and fulfilled a six-year enlistment, earning Veteran status upon separation.`,
    ],
    technologies: [
      "Soft Skills",
      "Tough Skin",
      "Emotional Intelligence",
      "Leadership",
      "Self-Awareness",
      "Time Management",
      "Stress Management",
      "Patience",
      "Communication",
    ],
  },
  {
    year: "August 2016 - August 2021",
    role: "Bachelor's of Science in Computer Engineering",
    company: "University of Massachusetts Amherst",
    companyWebsite: "https://www.umass.edu/",
    description: [
      "Theta Chi Fraternity - Risk Manager, House Manager, Standard's Board, and Project Chair",
      "Big Brother Big Sister - Mentor: Big Brother Big Sister is an organization that pairs an adult with an adolescent to help build resilience, mental health, and well-being so that he or she will have an enriched, brighter future.",
    ],
    technologies: [
      "Software Development",
      "Algorithms",
      "Data Structures",
      "Object-Oriented Programming",
      "Security Engineering",
      "Presentation Skills",
    ],
  },
];

export const PROJECTS = [
  {
    title: "TriFit E-Commerce",
    image: project5,
    description:
      "A Next-TypeScript-MERN-Stack application for managing customers, products, and sales as an admin.  Customers can purchase and download products from the E-Commerce site.",
    technologies: [
      "Next",
      "TypeScript",
      "React",
      "Node",
      "Prisma",
      "Tailwind CSS",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Git",
      "Prettier",
    ],
    source: "https://github.com/nickldimartino/trifit-ecommerce",
    website: "",
  },
  {
    title: "TriFit",
    image: project1,
    description:
      "A TypeScript MERN-Stack application for managing a personal health journal with features such as user acccount creation, an AI personal trainer chatbot, and curatable workouts and meal plans with CRUD functionality.",
    technologies: [
      "TypeScript",
      "React",
      "Node",
      "MongoDB",
      "Express",
      "RESTful API",
      "Jest",
      "Tailwind CSS",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Git",
      "Postman",
      "Prettier",
    ],
    source: "https://github.com/nickldimartino/trifit",
    website: "",
  },
  {
    title: "Battleship 2",
    image: project2,
    description:
      "A MEN-Stack application for playing a game of Battleship against another player or the computer. Users can sign in using their Google accounts and see leaderboards for all players.",
    technologies: [
      "TypeScript",
      "JavaScript",
      "Node",
      "MongoDB",
      "Express",
      "CSS3",
      "HTML5",
      "Git",
      "EJS",
    ],
    source: "https://github.com/nickldimartino/battleship-two",
    website: "https://battleship-two-404cb7137cf0.herokuapp.com/",
  },
  {
    title: "AI Platforms: A CRUD-ton!",
    image: project3,
    description:
      "A MEN-Stack application for viewing a list of popular AI Platforms and allowing users to sign in using their Google accounts and manging a favorites list using CRUD functionality.",
    technologies: [
      "JavaScript",
      "Node",
      "MongoDB",
      "Express",
      "RESTful API",
      "Jest",
      "CSS3",
      "HTML5",
      "Git",
      "Postman",
      "EJS",
    ],
    source: "https://github.com/nickldimartino/AI-Platforms-List-CRUD",
    website:
      "https://ai-platforms-list-crud-64ab4f9bb249.herokuapp.com/platforms",
  },
  {
    title: "Py-Pac-Poe",
    image: project4,
    description:
      "A console game of Tic-Tac-Toe successfully created as a special project to test my ability to write a game in a 2-hour time frame.",
    technologies: ["Python"],
    source: "https://github.com/nickldimartino/py-pac-poe-console",
  },
];

export const CONTACT = {
  address: "Boston, MA, United States",
  phoneNo: "+1 603 793-3730",
  email: "nick.l.dimartino@gmail.com",
};

export const CERTIFICATIONS = [
  {
    year: "April 2024 - April 2027",
    role: "AWS Cloud Practitioner",
    company: "Amazon Web Services",
    companyWebsite: "https://aws.amazon.com/?nc2=h_lg",
    description: [
      `The AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology.  This is a good starting point on the AWS Certification journey for individuals with no prior IT or cloud experience switching to a cloud career or for line-of-business employees looking for foundational cloud literacy.`,
    ],
    technologies: [
      "AWS (Amazon Web Services",
      "AWS Cloud",
      "Cloud Services",
      "Foundations",
    ],
  },
];
