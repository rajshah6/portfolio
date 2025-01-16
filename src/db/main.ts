import schoolsphereImg from "../../public/images/schoolsphere.png";
import portfolioImg from "../../public/images/portfolio.png";
import myImage from "../../public/images/waterloo.png";
import alopeciaImg from "../../public/images/alopecia.png";
import groceryImg from "../../public/images/grocery.png";
import icalendifyImg from "../../public/images/icalendify.png";
import dealornodealImg from "../../public/images/dealornodeal.png";
import pathvisorImg from "../../public/images/pathvisor.gif";
import calcImg from "../../public/images/calc.png";

export const heroData = {
  img: myImage,
  hi: "👋 Hey there! I am",
  name: "Raj Shah",
  expertise: ["Full-Stack Developer", "Web Designer"],
  about:
    "I'm a passionate Software Developer, currently studying Computer Science at the University of Waterloo. I love building things that live on the internet, whether that be websites, applications, or anything in between. Let’s push boundaries and build groundbreaking experiences together!",
  btnText: " View My Resume",
};

export const aboutData = {
  title: "About Me",
  cards: [
    {
      title: "How Did I Get Here?",
      text: `My journey began when I was 12 years old, sparked by a fascination with problem-solving and technology. From leading teams at SHAD to creating cutting-edge projects, each experience has honed my skills and deepened my passion for driving impact through code and leadership.`,
    },
    {
      title: "Who Am I Today?",
      text: "Now, I’m deeply immersed in the world of technology, excited by the endless possibilities it offers to create real change. From building apps to mentoring aspiring coders, I’m constantly inspired by the impact we can make through innovation and dedication!",
    },
    {
      title: "What's Next?",
      text: "The future is about pushing boundaries. I'm excited to explore my growing interests in machine learning and cryptography while continuing to lead, learn, and inspire. There's always a new horizon to chase, and I'm ready to tackle it head-on!",
    },
  ],
};

export const SkillsData = {
  title: "Skills",
  categories: [
    {
      title: "Languages",
      skills: [
        "Java",
        "Python",
        "C",
        "C++",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Racket",
        "Scheme",
        "R",
        "SQL",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "Svelte",
        "Next.js",
        "Node.js",
        "Vite",
        "Apache",
        "PyTorch",
        "Flutter",
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
        "npm",
        "Firebase",
        "Vercel",
        "D3.js",
        "Linux",
        "VS Code",
        "Eclipse",
        "XCode",
        "Android Studio",
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
      url: "mailto:rajnshah2020@gmail.com",
    },
    {
      label: "GitHub",
      url: "https://github.com/rajshah6",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rshah9/",
    },
    {
      label: "Resume",
      url: "/Docs/resume.pdf",
    },
  ],
};

export const ProjectsData = {
  title: "Projects",
  Projects: [
    {
      name: "PathVisor",
      image: pathvisorImg,
      technologies: [
        "Svelte,",
        "Node.js,",
        "Vite,",
        "TypeScript,",
        "JavaScript,",
        "HTML,",
        "CSS,",
        "Git,",
        "Vercel",
      ],
      description:
        "PathVisor is an interactive app that brings pathfinding algorithms to life! Designed for students, educators, and graph theory enthusiasts, it offers a hands-on way to explore Dijkstra’s Algorithm, A*, Breadth First Search, and Depth First Search. With its intuitive grid interface, real-time animations, and step-by-step analysis, PathVisor makes learning fun and accessible. Customize scenarios, experiment with algorithm speed, and gain deeper insights into the decision-making processes of these powerful tools.",
      demoUrl: "https://pathvisor.vercel.app",
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
      description:
        "Most modern calendar apps are cluttered with features, making it hard to focus on your most important daily tasks. iCalendify is a minimalist calendar app designed to simplify your scheduling experience. With a clean interface and intuitive design, it lets you quickly note down the most important tasks each day, saving all events locally which can be accessed at any time. The app was built using vanilla JavaScript.",
      demoUrl: "https://icalendify.vercel.app/",
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
      description:
        "SchoolSphere is a robust database system designed to streamline the organization of students, employees, and school inventory. Built using Object-Oriented principles in Java, the system leverages polymorphism, inheritance, and encapsulation to provide a scalable and maintainable solution. Developed in Apache NetBeans, it efficiently handles data storage and retrieval using file I/O operations with .txt files for employee, student, and inventory records.",
      demoUrl: "",
      codeUrl: "https://github.com/rajshah6/school-sphere",
    },
    {
      name: "Personal Portfolio",
      image: portfolioImg,
      technologies: [
        "TypeScript,",
        "JavaScript,",
        "HTML,",
        "CSS,",
        "React,",
        "Node.js,",
        "Next.js,",
        "Firebase,",
        "Vercel",
      ],
      description:
        "Hey it looks like you're already here! The application utilizes Next.js for server-side rendering and dynamic routing, which significantly enhances SEO and reduces page load times. Additionally, I integrated Firebase to provide real-time database functionality, enabling seamless updates to portfolio content without the need for redeployment.",
      demoUrl: "https://rajshah.vercel.app/",
      codeUrl: "https://github.com/rajshah6/rajshah6.github.io",
    },
    
    {
      name: "Basic Calculator",
      image: calcImg,
      technologies: [
        "JavaScript,",
        "HTML,",
        "CSS,",
        "React,",
        "Node.js,",
        "Vercel",
      ],
      description:"This basic calculator app is a backend focuses tool for performing arithmetic operations including addition, subtraction, multiplication, and division. Featuring functionality similar to the iPhone calculator app pre-iOS 18, it supports formatted outputs and allows users to perform multiple calculations seamlessly, making it an ideal solution for everyday use.",

      demoUrl: "https://calculator-react-fawn-ten.vercel.app/",
      codeUrl: "https://github.com/rajshah6/calculator-react",
    },

    {
      name: "GroceryMaster",
      image: groceryImg,
      technologies: [
        "Java,",
        "Apache NetBeans,",
        "File I/O",
      ],
      description:
        "GroceryMaster simulates a grocery store’s inventory system, enabling users to add, save, and access food items. The inventory is saved in a structured inventory.txt file, allowing for persistent and manual data access. With an intuitive Java interface, users can easily search, add, or retrieve items by SKU or name. The inventory updates dynamically upon button clicks, ensuring real-time accuracy.",
      demoUrl: "",
      codeUrl: "https://github.com/rajshah6/grocery-master",
    },
    {
      name: "Alopecia Areata", 
      image: alopeciaImg,
      technologies: [
        "HTML,", 
        "CSS,", 
        "JavaScript,", 
        "GitHub Pages,",
        "Data Binding",
      ],
      description:
        "In a world where our hair is often seen as a reflection of our identity, the experience of Alopecia Areata can feel isolating and overwhelming. This website is dedicated to shedding light on this significant yet often misunderstood condition. I created this platform to foster awareness and understanding, driven by a deep compassion for those affected by this condition. It is my hope that by sharing knowledge and personal stories, we can cultivate a community of support and empathy.",

      demoUrl: "https://rajshah6.github.io/alopecia-areata/",
      codeUrl: "https://github.com/rajshah6/alopecia-areata",
    },
    {
      name: "Deal or No Deal", 
      image: dealornodealImg,
      technologies: [
        "Python,",
        "Tkinter",
      ],
      description:
        "Deal or No Deal is a classic game show that has captivated audiences worldwide. This Python application brings the excitement of the game to your computer, challenging you to make strategic decisions and test your luck. With a sleek Tkinter interface, the game offers an engaging experience that mirrors the thrill of the original show.",

      demoUrl: "",
      codeUrl: "https://github.com/rajshah6/deal-or-no-deal",
    },
  ],
};
