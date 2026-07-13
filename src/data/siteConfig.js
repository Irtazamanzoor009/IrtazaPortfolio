export const siteConfig = {
  name: "Muhammad Irtaza Manzoor",
  role: "Software Engineer",
  tagline: "Building full-stack products and integrating AI into real workflows.",
  location: "Lahore, Pakistan",
  email: "irtaza.manzoor1203@gmail.com",
  phone: "+92 325 2020436",

  // Used for the floating WhatsApp button + contact section.
  // Format: country code + number, digits only (no +, no spaces)
  whatsapp: "923252020436",

  social: {
    github: "https://github.com/irtazamanzoor009",
    linkedin: "https://linkedin.com/in/irtazamanzoor",
    instagram: "https://www.instagram.com/irtaza_manzoor/", // <-- replace
  },

  resumeUrl: "/Resume.pdf",

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  summary:
    "Software Engineer experienced in building production-grade web applications across the full stack, from REST APIs and authentication to responsive frontends. Now focused on integrating AI into real products using LLMs, vector databases, and ML models, while continuing to grow as an engineer.",

  skills: {
    Languages: ["JavaScript", "Python", "TypeScript", "SQL"],
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "ShadCN UI", "Zustand", "Formik"],
    Backend: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "JWT", "Socket.io", "WebSockets"],
    Databases: ["MongoDB", "PostgreSQL", "Firebase"],
    "AI & ML": ["Google Gemini API", "OpenAI API", "scikit-learn", "SHAP", "Pandas", "NumPy", "RAG Pipelines"],
    "DevOps & Tools": ["Git", "GitHub", "GitLab", "Vercel", "Render", "Docker", "Linux CLI", "Postman", "n8n"],
  },

  experience: [
    {
      title: "Associate Software Developer",
      company: "Xavinex",
      period: "Jun 2025 — Apr 2026",
      points: [
        "Built and shipped full-stack features across multiple client projects using the MERN stack, working in an Agile team with regular sprint cycles and code reviews.",
        "Designed and maintained REST APIs with JWT authentication and role-based access control, and integrated third-party services including payment gateways and external data APIs.",
        "Worked on React frontends and tuned MongoDB queries that reduced API response times noticeably across several modules.",
      ],
    },
  ],

  education: {
    school: "University of Engineering & Technology, Lahore",
    degree: "Bachelor of Science in Computer Science",
    period: "Graduated 2026",
    cgpa: "3.60 / 4.0",
  },
};