import {
    SiJavascript, SiPython, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
    SiNodedotjs, SiExpress, SiFastapi, SiMongodb, SiPostgresql, SiFirebase,
    SiPandas, SiNumpy, SiGit, SiGithub, SiGitlab, SiVercel, SiRender,
    SiDocker, SiLinux, SiPostman, SiSocketdotio, SiScikitlearn,
    SiJira, SiStripe, SiCloudinary,
} from "react-icons/si";
import { LuBrain } from "react-icons/lu";
import {
    FaDatabase, FaPuzzlePiece, FaCubes, FaCode, FaKey, FaBolt,
    FaRobot, FaChartBar, FaProjectDiagram, FaNetworkWired, FaCogs,
    FaLayerGroup, FaChartLine,
} from "react-icons/fa";

export const skillIcons = {
    JavaScript: SiJavascript,
    Python: SiPython,
    TypeScript: SiTypescript,
    SQL: FaDatabase,

    "React.js": SiReact,
    React: SiReact, // alias used in projects.js tech arrays
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
    "ShadCN UI": FaPuzzlePiece,
    Zustand: FaCubes,
    Formik: FaCode,

    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    FastAPI: SiFastapi,
    "RESTful APIs": FaNetworkWired,
    JWT: FaKey,
    "Socket.io": SiSocketdotio,
    WebSockets: FaBolt,

    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    Firebase: SiFirebase,

    "Google Gemini API": FaRobot,
    "Google Gemini": FaRobot, // alias
    "OpenAI API": LuBrain,
    "scikit-learn": SiScikitlearn,
    SHAP: FaChartBar,
    Pandas: SiPandas,
    NumPy: SiNumpy,
    "RAG Pipelines": FaProjectDiagram,

    Git: SiGit,
    GitHub: SiGithub,
    GitLab: SiGitlab,
    Vercel: SiVercel,
    Render: SiRender,
    Docker: SiDocker,
    "Linux CLI": SiLinux,
    Postman: SiPostman,
    n8n: FaCogs,

    // Project-specific tech tags
    "Jira API": SiJira,
    "MERN Stack": FaLayerGroup, // no single official logo for the stack itself
    Stripe: SiStripe,
    Cloudinary: SiCloudinary,
    Recharts: FaChartLine, // no dedicated Simple Icons logo currently
};

// Real brand colors. `null` means there's no single official brand color
// (generic icon), so the caller falls back to the default accent color.
export const skillColors = {
    JavaScript: "#F7DF1E",
    Python: "#3776AB",
    TypeScript: "#3178C6",
    SQL: null,

    "React.js": "#61DAFB",
    React: "#61DAFB",
    "Next.js": "#FFFFFF", // monochrome logo — flip to #000 if your card bg is light
    "Tailwind CSS": "#06B6D4",
    "ShadCN UI": null,
    Zustand: null,
    Formik: null,

    "Node.js": "#5FA04E",
    "Express.js": "#FFFFFF", // monochrome logo
    FastAPI: "#009688",
    "RESTful APIs": null,
    JWT: null,
    "Socket.io": "#FFFFFF", // monochrome logo
    WebSockets: null,

    MongoDB: "#47A248",
    PostgreSQL: "#4169E1",
    Firebase: "#FFCA28",

    "Google Gemini API": null,
    "Google Gemini": null,
    "OpenAI API": "#FFFFFF", // monochrome logo
    "scikit-learn": "#F7931E",
    SHAP: null,
    Pandas: "#3178C6",
    NumPy: "#3178C6",
    "RAG Pipelines": null,

    Git: "#F05032",
    GitHub: "#FFFFFF", // monochrome logo
    GitLab: "#FC6D26",
    Vercel: "#FFFFFF", // monochrome logo
    Render: "#46E3B7",
    Docker: "#2496ED",
    "Linux CLI": "#FCC624",
    Postman: "#FF6C37",
    n8n: null,

    "Jira API": "#0052CC",
    "MERN Stack": null,
    Stripe: "#635BFF",
    Cloudinary: "#3448C5",
    Recharts: null,
};

export const getSkillIcon = (name) => skillIcons[name] || FaCode;
export const getSkillColor = (name) => skillColors[name] ?? null;