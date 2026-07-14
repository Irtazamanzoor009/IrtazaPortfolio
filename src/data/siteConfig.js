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
        "Owned features from development to deployment across four client projects, including Financial Analytics, EdTech, B2B Lead Verification, and Generative AI applications.",
        "Built and maintained full-stack features using the MERN stack, collaborating with an Agile team through sprint planning, daily stand-ups, and code reviews.",
        "Designed and maintained REST APIs with JWT authentication, role-based access control (RBAC), and proper data validation for secure and reliable applications.",
        "Optimized MongoDB queries and database indexes to improve API response times and overall backend performance.",
        "Integrated third-party services such as Stripe subscriptions, webhooks, Jira REST API, and external data APIs to extend application functionality.",
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