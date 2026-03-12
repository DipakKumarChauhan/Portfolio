// The Image References Are Intentionally Left Blank Update them When Needed.
export const projects = [
  {
    id: 1,
    name: "DocuMind: Multi-Modal RAG Search & Citation Assistant",
    description:
      "Architected a cross-modal AI search platform leveraging BGE-M3, CLIP, and Whisper embeddings with FastAPI and Qdrant to enable semantic retrieval across documents, images, and audio with citation-aware responses and personalized indexing",
    href: "https://github.com/DipakKumarChauhan/DocuMind_SIH25231_Prototype",
    image: "",
    bgImage: "",
    frameworks: [
      { id: 1, name: "FastAPI" },
      { id: 2, name: "Qdrant" },
      { id: 3, name: "Embedding Models" },
      { id: 4, name: "Cloudinary" },
      { id: 5, name: "Google OAuth2" },
      { id: 6, name: "Python" },
    ],
  },
  {
    id: 2,
    name: "SkySense: Short-Term Air Quality Forecasting System",
    description:
      "Built a satellite-powered air quality prediction system using XGBoost and 30+ atmospheric features trained on 40k+ hourly observations for reliable short-term pollution forecasting",
    href: "https://github.com/DipakKumarChauhan/Sih-ai-ml-work",
    image: "",
    bgImage: "",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "XGBoost" },
      { id: 3, name: "Pandas" },
      { id: 4, name: "NumPy" },
      { id: 5, name: "Scikit-learn" },
      { id: 6, name: "Satellite Data (TROPOMI)" },
      { id: 7, name: "Meteorological Reanalysis" },
    ],
  },
  {
    id: 3,
    name: "DeepScan: Brain Tumor Detection",
    description:
      "A deep learning pipeline using ensemble CNNs (PDCNN + Xception) to classify MRI brain tumors with 96% accuracy.",
    href: "https://github.com/DipakKumarChauhan/Brain_Tumor_Detection",
    image: "",
    bgImage: "",
    frameworks: [
      { id: 1, name: "Ensemble CNNs" },
      { id: 2, name: "Python" },
      { id: 3, name: "TensorFlow" },
      { id: 4, name: "NumPy" },
      { id: 5, name: "Pandas" },
    ],
  },
  {
    id: 4,
    name: "SubStream: Subscription Backend API",
    description:
      "A scalable RESTful API handling 10,000+ requests with authentication, secure middleware, and Cloudinary integration.",
    href: "https://github.com/DipakKumarChauhan/SubStream",
    image: "",
    bgImage: "",
    frameworks: [
      { id: 1, name: "Express.js" },
      { id: 2, name: "MongoDB" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Cloudinary API" },
    ],
  },
  {
    id: 5,
    name: "AI Learning Assistant – RAG-Powered Study Platform",
    description:
      "Built a full-stack RAG application using FastAPI, Next.js, Pinecone, and Gemini enabling semantic retrieval and context-aware AI tutoring over PDFs and video transcripts.",
    href: "https://github.com/DipakKumarChauhan/BuildFastAI",
    liveLink: "https://ai-learning-rag.vercel.app/",
    image: "/images/Project_Images/AI-Learning_Assistant.png",
    bgImage: "/images/Project_Images/AI-Learning_Assistant.png",
    frameworks: [
      { id: 1, name: "FastAPI" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Python" },
      { id: 4, name: "TypeScript" },
      { id: 5, name: "Pinecone Vector DB" },
      { id: 6, name: "Google Gemini API" },
      { id: 7, name: "PostgreSQL" },
      { id: 8, name: "Tailwind CSS" },
    ],
  },
  {
    id: 6,
    name: "Invoice Pro – Full-Stack Invoice Management System",
    description:
      "A full-stack invoice management platform with secure authentication, payment tracking, PDF invoice generation, and automated overdue detection built using React, Node.js, and PostgreSQL",
    href: "https://github.com/DipakKumarChauhan/Invoice_Management_Work",
    liveLink: "https://invoice-management-work.vercel.app/",
    image: "/images/Project_Images/invoice_manager.png",
    bgImage: "/images/Project_Images/invoice_manager.png",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "PostgreSQL" },
      { id: 5, name: "Prisma ORM" },
      { id: 6, name: "JWT Authentication" },
      { id: 7, name: "Tailwind CSS" },
      { id: 8, name: "React Query" },
    ],
  },

  {
    id: 7,
    name: "DataPilot – Natural Language Data Analysis Platform",
    description:
      "An LLM-powered data analysis assistant that converts natural-language questions into structured analytics and Plotly visualizations over CSV datasets using FastAPI, LangChain, and pandas.",
    href: "https://github.com/DipakKumarChauhan/Data_Analyser",
    liveLink: "https://dataanalyser-dipak.streamlit.app/",
    image: "/images/Project_Images/Data_analyser.png",
    bgImage: "/images/Project_Images/Data_analyser.png",
    frameworks: [
      { id: 1, name: "FastAPI" },
      { id: 2, name: "LangChain" },
      { id: 3, name: "Python" },
      { id: 4, name: "Pandas" },
      { id: 5, name: "Plotly" },
      { id: 6, name: "Groq LLM API" },
      { id: 7, name: "Streamlit" },
      { id: 8, name: "RapidFuzz" },
    ],
  },
  // {
  //   id: 3,
  //   name: "ShopNow: Full-Stack E-commerce",
  //   description:
  //     "An e-commerce web app built with FastAPI and SQL, featuring authentication and product search with real-time filtering.",
  //   href: "https://github.com/DipakKumarChauhan/fastapi-project",
  //   image: "",
  //   bgImage: "/assets/backgrounds/map.jpg",
  //   frameworks: [
  //     { id: 1, name: "FastAPI" },
  //     { id: 2, name: "SQL" },
  //     { id: 3, name: "OCI" },
  //     { id: 4, name: "Python" },
  //   ],
  // },
  {
    id: 8,
    name: "SecureTasker – Full-Stack Secure Task Manager",
    description:
      "A production-ready backend system with JWT authentication, RBAC authorization, audit trails, and secure task and note management APIs built using FastAPI and MongoDB.",
    href: "https://github.com/DipakKumarChauhan/PrimetradeAI_Backend_Assignment",
    liveLink: "https://secure-tasker.vercel.app/",
    image: "/images/Project_Images/Secure Tasker.png",
    bgImage: "/images/Project_Images/Secure Tasker.png",
    frameworks: [
      { id: 1, name: "FastAPI" },
      { id: 2, name: "Python" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "JWT" },
      { id: 5, name: "Pydantic" },
      { id: 6, name: "React" },
    ],
  },
  {
    id: 9,
    name: "Empathy Engine",
    description:
      "An AI-driven solution built during internship, exploring intelligent automation and backend API workflows.",
    href: "https://github.com/DipakKumarChauhan/DarwixAI",
    image: "",
    bgImage: "",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Machine Learning" },
      { id: 3, name: "Flask" },
      { id: 4, name: "API Development" },
    ],
  },
  // {
  //   id: 9,
  //   name: "API_PLAYGROUND",
  //   description:
  //     "A backend system developed for internship evaluation, focusing on APIs, authentication, and structured data handling.",
  //   href: "https://github.com/DipakKumarChauhan/Backend_Assignment",
  //   image: "",
  //   bgImage: "/assets/backgrounds/table.jpg",
  //   frameworks: [
  //     { id: 1, name: "Node.js" },
  //     { id: 2, name: "Express.js" },
  //     { id: 3, name: "MongoDB" },
  //     { id: 4, name: "REST API" },
  //   ],
  // },
];

