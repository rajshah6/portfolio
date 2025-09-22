import schoolsphereImg from "../../public/images/schoolsphere.png";
import portfolioImg from "../../public/images/portfolio.gif";
import myImage from "../../public/images/myImage.png";
import groceryImg from "../../public/images/grocery.png";
import icalendifyImg from "../../public/images/icalendify.png";
import dealornodealImg from "../../public/images/dealornodeal.png";
import pathvisorImg from "../../public/images/pathvisor.gif";
import calcImg from "../../public/images/calc.png";
import preppalImg from "../../public/images/preppal.png";
import solguardImg from "../../public/images/solguard.png";
import embereyeImg from "../../public/images/embereye.png";

export const heroData = {
  img: myImage,
  hi: "👋 Hey there! I am",
  name: "Raj Shah",
  expertise: ["Software Developer"],
  about:
    "I'm study Computer Science at the University of Waterloo. I love building things accessible to everyone. Let’s push boundaries and build groundbreaking experiences together, feel free to connect!",

};

export const SkillsData = {
  title: "Skills",
  categories: [
    {
      title: "Languages",
      skills: [
        "Python",
        "Java",
        "C",
        "C++",
        "C#",
        "Go",
        "Ruby",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        "Racket",
        "Scheme",
        "Haskell",
        "R",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React",
        ".NET",
        "LangChain",
        "Electron",
        "Rails",
        "Flask",
        "Svelte",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "Vite",
        "Apache",
        "NumPy",
        "PyTorch",
        "Scitkit-Learn",
        "Angular",   
        "Tkinter",
        "PyGame",
        "Bootstrap",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "Linux",
        "Azure",
        "AWS",
        "Docker",
        "Databricks",
        "Martian",
        "Postman",
        "MongoDB",
        "OpenCV",
        "GCP",
        "Cohere API",
        "SQLite",
        "SQLAlchemy",
        "npm",
        "Firebase",
        "Vercel",
      ],
    },
  ],
};

export const contactData = {
  title: "Let's Get in Touch!",
  cards: [
    {
      title: "Want to Collaborate?",
      text: "I am open to discussing potential job opportunities or collaborations. Whether you're looking for a developer, designer, or team leader, I'm always excited to explore new projects and partnerships!",
    },
    {
      title: "Let's Connect",
      text: "Feel free to reach out to me via email or LinkedIn. I'm always open to new connections and conversations, so don't hesitate to drop me a message. I look forward to hearing from you soon!",
    },
  ],
  links: [
    {
      label: "Email",
      url: "mailto:r33shah@uwaterloo.ca",
    },
    {
      label: "GitHub",
      url: "https://github.com/rajshah6",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rshah9/",
    },
  ],
};

export const ProjectsData = {
  title: "Projects",
  Projects: [
    {
      name: "PrepPal",
      image: preppalImg,
      technologies: [
        "Python,", 
        "Flask,",
        "OpenAI,", 
        "Cohere,", 
        "GCP,", 
        "OpenCV,", 
        "SQLite,", 
        "SQLAlchemy,", 
        "React.js,", 
        "Tailwind CSS"
      ],
      description: [
          "AI-powered interview preparation platform",
          "Generates personalized questions based on user's resume",
          "Evaluates user's video responses and assesses them",
          "Analyzes eye contact, confidence levels, and non-verbal cues",
          "Stores performance benchmarks for each user"
        ],
      liveUrl: "https://preppal.work",
      topPage: "",
      demoUrl: "https://www.youtube.com/watch?v=0uulnpFgpyc",
      codeUrl: "https://github.com/rajshah6/preppal",
    },
    {
      name: "EmberEye",
      image: embereyeImg,
      technologies: [
        "Python,", 
        "Flask,",
        "Gemini,", 
        "Cohere,", 
        "MongoDB,", 
        "React.js,", 
        "Tailwind CSS"
      ],
      description: [
          "Wildfire detection and prediction system",
          "Integrates with map data to show wildfire locations",
          "Affordable alternative to satellite-based solutions",
          "Built for climate action (UN SDG #13)"
        ],
      liveUrl: "https://ember-eye.vercel.app/",
      topPage: "",
      demoUrl: "https://www.youtube.com/watch?v=xo4wJuv5IHE",
      codeUrl: "https://github.com/rajshah6/EmberEye",
    },
    {
      name: "PathVisor",
      image: pathvisorImg,
      technologies: [
        "Svelte,",
        "Node.js,",
        "Vite,",
        "TypeScript,",
        "HTML,",
        "CSS,",
        "Git,",
        "Vercel",
      ],
      description: [
        "Interactive pathfinding algorithm visualizer",
        "Supports Dijkstra's, A*, BFS, and DFS algorithms",
        "Real-time animations with step-by-step analysis",
        "Customizable scenarios and algorithm speed controls",
      ],
      liveUrl: "https://pathvisor.vercel.app",
      topPage: "",
      demoUrl: "",
      codeUrl: "https://github.com/rajshah6/pathfinding-visualizer",
    },
    {
      name: "iCalendify",
      image: icalendifyImg,
      technologies: [
        "JavaScript,",
        "CSS,",
        "HTML,",
        "Vercel,",
        "State Management,",
        "Data Binding,",
        "Lifecycle",
      ],
      description: [
        "Minimalist calendar app for daily task management",
        "Clean, clutter-free interface for focused scheduling",
        "Local storage for offline access to events",
        "iOS version in development"
      ],
      liveUrl: "https://icalendify.vercel.app/",
      topPage: "",
      demoUrl: "",
      codeUrl: "https://github.com/rajshah6/iCalendify",
    },
    {
      name: "SchoolSphere",
      image: schoolsphereImg,
      technologies: [
        "Java,",
        "Apache NetBeans,",
        "OOP,",
        "File I/O",
      ],
      description: [
        "Comprehensive school database management system",
        "Organizes students, employees, and inventory data",
        "Built with Java OOP principles",
        "File I/O operations with .txt file storage",
      ],
      liveUrl: "",
      topPage: "",
      demoUrl: "",
      codeUrl: "https://github.com/rajshah6/school-sphere",
    },
    {
      name: "Personal Portfolio",
      image: portfolioImg,
      technologies: [
        "TypeScript,",
        "HTML,",
        "CSS,",
        "React,",
        "Node.js,",
        "Next.js,",
        "Firebase,",
        "Vercel",
      ],
      description: [
        "Portfolio website built with Next.js",
        "Server-side rendering for enhanced SEO",
        "Dynamic routing for optimized page load times",
        "Firebase integration for real-time database functionality",
        "Seamless content updates without redeployment"
      ],
      liveUrl: "",
      topPage: "#top",
      demoUrl: "",
      codeUrl: "https://github.com/rajshah6/rajshah6.github.io",
    },
    


    {
      name: "GroceryMaster",
      image: groceryImg,
      technologies: [
        "Java,",
        "Apache NetBeans,",
        "File I/O",
      ],
      description: [
        "Grocery store inventory management simulation",
        "Add, save, and access food items with persistent storage",
        "Search functionality by SKU or item name",
        "Real-time inventory updates",
        "Data stored in structured .txt files"
      ],
      liveUrl: "",
      topPage: "",
      demoUrl: "",
      codeUrl: "https://github.com/rajshah6/grocery-master",
    },
    {
      name: "Deal or No Deal", 
      image: dealornodealImg,
      technologies: [
        "Python,",
        "Tkinter",
      ],
      description: [
        "Python recreation of the classic TV game show",
        "Strategic decision-making with luck-based gameplay",
        "Engaging risk vs. reward mechanics"
      ],

      liveUrl: "",
      topPage: "",
      demoUrl: "",
      codeUrl: "https://github.com/rajshah6/deal-or-no-deal",
    },
  ],
};
