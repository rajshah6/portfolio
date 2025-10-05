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
import langsketchImg from "../../public/images/langsketch.png";

export const heroData = {
  img: myImage,
  hi: "👋 Hey there! I am",
  name: "Raj Shah",
  expertise: ["<strong>Computer Science @ University of Waterloo</strong>"],
  about:
    "I love building things accessible to everyone. Let's push boundaries and build groundbreaking experiences together, feel free to connect!",

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
      text: "I am open to discussing potential <strong>job opportunities</strong> or <strong>collaborations</strong>. Whether you're looking for a <strong>developer</strong>, <strong>designer</strong>, or <strong>team leader</strong>, I'm always excited to explore new projects and partnerships!",
    },
    {
      title: "Let's Connect",
      text: "Feel free to reach out to me via <strong>email</strong> or <strong>LinkedIn</strong>. I'm always open to new connections and conversations, so don't hesitate to drop me a message. I look forward to hearing from you soon!",
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
      name: "LangSketch",
      image: langsketchImg,
      technologies: [
        "Python,", 
        "FastAPI,",
        "LangChain,", 
        "Martian,", 
        "Databricks,", 
        "Electron,", 
      ],
      description: [
          "<strong>1st Place Winner</strong> (Martian Track, <strong>$4,000</strong>) at <strong>Hack the North 2025</strong>",
          "Sketch on a 2D canvas to create <strong>agentic workflows</strong> automatically",
          "Integrates with existing codebases to import and use your own functions",
          "Enhanced with <strong>RAG</strong> for processing external documents and data sources",
          "Connects to <strong>external APIs</strong> and can scrape data from various online sources"
        ],
      liveUrl: "",
      topPage: "",
      demoUrl: "https://www.youtube.com/watch?v=3CpwQWJc918",
      codeUrl: "https://github.com/rajshah6/langsketch",
      devpostUrl: "https://devpost.com/software/langsketch",
    },
    {
      name: "PrepPal",
      image: preppalImg,
      technologies: [
        "Python,", 
        "Flask,",
        "GCP,", 
        "OpenCV,", 
        "SQLite,", 
        "SQLAlchemy,", 
      ],
      description: [
          "AI-powered interview preparation platform",
          "Generates <strong>personalized questions</strong> based on user's resume",
          "Evaluates user's video responses and assesses them",
          "Analyzes <strong>eye contact</strong>, <strong>confidence levels</strong>, and <strong>non-verbal cues</strong>",
          "Stores performance benchmarks for each user"
        ],
      liveUrl: "https://preppal.work",
      topPage: "",
      demoUrl: "https://www.youtube.com/watch?v=0uulnpFgpyc",
      codeUrl: "https://github.com/rajshah6/preppal",
      devpostUrl: "https://dorahacks.io/buidl/21711",
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
      ],
      description: [
          "Wildfire detection and prediction system",
          "Integrates with <strong>map data</strong> to show wildfire locations",
          "Affordable alternative to satellite-based solutions",
          "Built for climate action (<strong>UN SDG #13</strong>)"
        ],
      liveUrl: "https://ember-eye.vercel.app/",
      topPage: "",
      demoUrl: "https://www.youtube.com/watch?v=xo4wJuv5IHE",
      codeUrl: "https://github.com/rajshah6/EmberEye",
      devpostUrl: "https://devpost.com/software/firecheck-s1tlf8",
    },
    {
      name: "SolGuard",
      image: solguardImg,
      technologies: [
        "Ruby on Rails,",
        "LangChain,",
        "PostgreSQL,",
        "OpenAI Embeddings,",
        "LlamaCpp"
      ],
      description: [
          "Privacy-first AI chatbot for <strong>Sun Life Financial</strong> company",
          "Answers questions from structured financial PDFs",
          "Ensures <strong>data privacy</strong> and security compliance"
        ],
      liveUrl: "",
      topPage: "",
      demoUrl: "",
      codeUrl: "https://github.com/rajshah6/privateGPT",
      devpostUrl: "https://devpost.com/software/sunlife-chat-bot",
    },
    {
      name: "PathVisor",
      image: pathvisorImg,
      technologies: [
        "Svelte,",
        "Node.js,",
        "TypeScript,",
      ],
      description: [
        "<strong>Interactive</strong> pathfinding algorithm visualizer",
        "Supports <strong>Dijkstra's</strong>, <strong>A*</strong>, <strong>BFS</strong>, and <strong>DFS</strong> algorithms",
        "Real-time animations with <strong>step-by-step</strong> analysis",
        "Customizable scenarios and algorithm speed controls",
      ],
      liveUrl: "https://pathvisor.vercel.app",
      topPage: "",
      demoUrl: "",
      codeUrl: "https://github.com/rajshah6/pathfinding-visualizer",
      devpostUrl: "",
    },
  ],
};
