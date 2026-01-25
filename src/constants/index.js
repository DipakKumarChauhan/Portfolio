// index.js
export const serviceData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "Machine Learning",
    description:
      "Applying core ML techniques to turn data into insights and predictions. Experienced in building, training, and evaluating models that solve classification and regression problems.",
    items: [
      {
        title: "Supervised Learning",
        description: "(Regression, Classification, Scikit-Learn)",
      },
      {
        title: "Unsupervised Learning",
        description: "(Clustering, Dimensionality Reduction, Pattern Discovery)",
      },
      {
        title: "Model Evaluation",
        description: "(Cross-Validation, Accuracy, Precision/Recall, F1 Score)",
      },
    ],
  },
  
  {
    title: "Deep Learning",
    description:
      "Building and training deep neural networks for complex tasks. Skilled in working with Artificial Neural Networks (ANNs) and Convolutional Neural Networks (CNNs).",
    items: [
      {
        title: "Artificial Neural Networks",
        description: "(Classification & Regression with ANNs)",
      },
      {
        title: "Convolutional Neural Networks",
        description: "(Image Classification, Feature Extraction, Vision Tasks)",
      },
      {
        title: "Training & Optimization",
        description: "(Backpropagation, Regularization, Hyperparameter Tuning)",
      },
    ],
  },
  
  {
    title: "Artificial Intelligence",
    description:
      "Exploring cutting-edge AI with a focus on Transformer-based architectures for natural language understanding and generative applications.",
    items: [
      {
        title: "Transformers",
        description: "(BERT, GPT-like Models, Hugging Face)",
      },
      {
        title: "Natural Language Processing",
        description: "(Text Classification, Sequence Modeling, Embeddings)",
      },
      {
        title: "Generative AI",
        description: "(Text Generation, Fine-Tuning Pretrained Models)",
      },
    ],
  }
  
];
// The Image References Are Intentionally Left Blank Update them When Needed.
export const projects = [
  {
    id: 1,
    name: "DeepScan: Brain Tumor Detection",
    description:
      "A deep learning pipeline using ensemble CNNs (PDCNN + Xception) to classify MRI brain tumors with 96% accuracy.",
    href: "https://github.com/DipakKumarChauhan/Brain_Tumor_Detection",
    image: "", 
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "TensorFlow" },
      { id: 3, name: "NumPy" },
      { id: 4, name: "Pandas" },
    ],
  },
  {
    id: 2,
    name: "SubStream: Subscription Backend API",
    description:
      "A scalable RESTful API handling 10,000+ requests with authentication, secure middleware, and Cloudinary integration.",
    href: "https://github.com/DipakKumarChauhan/Backend_Course_Notes",
    image: "",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Express.js" },
      { id: 2, name: "MongoDB" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Cloudinary API" },
    ],
  },
  {
    id: 3,
    name: "ShopNow: Full-Stack E-commerce",
    description:
      "An e-commerce web app built with FastAPI and SQL, featuring authentication and product search with real-time filtering.",
    href: "https://github.com/DipakKumarChauhan/fastapi-project",
    image: "",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "FastAPI" },
      { id: 2, name: "SQL" },
      { id: 3, name: "OCI" },
      { id: 4, name: "Python" },
    ],
  },
  {
    id: 4,
    name: "Empathy Engine (Internship Assignment)",
    description:
      "An AI-driven solution built during internship, exploring intelligent automation and backend API workflows.",
    href: "https://github.com/DipakKumarChauhan/DarwixAI",
    image: "",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Machine Learning" },
      { id: 3, name: "Flask" },
      { id: 4, name: "API Development" },
    ],
  },
  {
    id: 5,
    name: "API_PLAYGROUND (Internship Task)",
    description:
      "A backend system developed for internship evaluation, focusing on APIs, authentication, and structured data handling.",
    href: "https://github.com/DipakKumarChauhan/Backend_Assignment",
    image: "",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "REST API" },
    ],
  },
];

export const socials = [
 
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dipak-kumar-chauhan/" },
  { name: "GitHub", href: "https://github.com/DipakKumarChauhan" },
];
