import promanageImg from "../assets/projects/promanageImg.png";
import soccerImg from "../assets/projects/soccerImg.png";
import fintechImg from "../assets/projects/fintechImg.png";

export const projects = [
  {
    title: "ProManage Bot",
    description:
      "Full-stack AI project management tool that connects to Jira, surfaces sprint insights via a Gemini-powered chat interface, and keeps API response times under 50ms.",
    highlights: [
      "Trained three ML models (Random Forest, Gradient Boosting, Isolation Forest) in a FastAPI microservice with a two-tier global/personal architecture that improves predictions per user over time.",
      "Built a continuous learning loop that collects real Jira sprint outcomes after each sprint and automatically retrains the personal duration model.",
    ],
    tech: ["React", "Node.js", "FastAPI", "MongoDB", "Jira API", "Google Gemini", "scikit-learn"],
    image: promanageImg,
    liveUrl: "https://pro-manage-bot-frontend.vercel.app/", 
    githubUrl: "", // optional, leave blank to hide the button
  },
  {
    title: "Educational Soccer",
    description:
      "Soccer club management platform with three user roles, Stripe subscription billing, and Cloudinary media uploads, deployed on a VPS.",
    highlights: [
      "Integrated an OpenAI-powered chatbot that answers questions based on each student's profile and progress data.",
    ],
    tech: ["MERN Stack", "Stripe", "OpenAI API", "Cloudinary"],
    image: soccerImg,
    liveUrl: "https://sesiontactica.com/", 
    githubUrl: "",
  },
  {
    title: "Financial Storytelling Platform",
    description:
      "Interactive stock analysis tool with drag-to-zoom charts, multi-stock comparison, and global event overlays for contextual market insights.",
    highlights: [
      "Added a \"Save View\" feature for bookmarking chart layouts; deployed on a VPS.",
    ],
    tech: ["React", "Node.js", "Recharts", "MongoDB"],
    image: fintechImg,
    liveUrl: "https://chartlyst.com/", 
    githubUrl: "",
  },

  // ── ADD FUTURE PROJECTS BELOW THIS LINE ──
  // {
  //   title: "New Project Name",
  //   description: "One or two sentence summary.",
  //   highlights: ["Bullet point achievement.", "Another one."],
  //   tech: ["Tech", "Stack"],
  //   image: newProjectImg, // import it at the top first
  //   liveUrl: "https://...",
  //   githubUrl: "https://...",
  // },
];