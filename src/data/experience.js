export const roles = [
  {
    range: "FEB 2026 — PRESENT",
    title: "Software Engineer Intern, Business Intelligence",
    org: "Inter Miami CF",
    location: "Miami, FL",
    points: [
      "Independently refactored a PHP partnership-management platform from a flat, duplicated codebase into an MVC architecture (custom Controllers/Models/Services/Views), reducing redundant logic across core modules.",
      "Led development of a full-stack Events tracker — PHP backend, MySQL schema, REST-style API endpoints, jQuery/JS frontend — covering venue management, event tracking, and role-based access, coordinating with one other developer.",
      "Integrated Cloudflare R2 object storage for the assets manager and secure contract/file storage tied to contracted packages.",
      "Built an admin dashboard with live system-health monitoring and KPI reporting, querying MySQL to surface season-scoped metrics for leadership.",
    ],
  },
  {
    range: "MAY 2025 — NOV 2025",
    title: "Software Engineer Intern",
    org: "One Community Global",
    location: "San Gabriel, CA (Remote)",
    points: [
      "Built 7+ production React components for a workforce-management dashboard, shipping a labor-hours distribution pie chart, an expenditure/financials tracking card, and a Promotion Eligibility table with live API data.",
      "Led a systematic migration of legacy global CSS to CSS Modules across 5+ dashboard chart components and added dark mode support, reducing style conflicts and improving long-term maintainability.",
      "Designed a consensus-based voting feature in Figma, from concept through user workflows and interactive prototypes, to guide upcoming platform development.",
      "Reviewed 20+ pull requests across frontend and backend repositories, providing feedback on code quality and correctness.",
    ],
  },
];

export const education = {
  range: "GRADUATED DEC 2024",
  title: "B.S. Computer Science",
  org: "New York University",
  location: "New York, NY",
  points: [
    "Relevant coursework: Artificial Intelligence, Software Engineering, Applied Internet Technologies, Data Structures, Algorithms, Linear Algebra.",
    "Involvement: Academic Achievement Program, Girls Who Code, Latinos Unidos Con Honor y Amistad.",
  ],
};

export const featuredProjects = [
  {
    range: "NOV 2024",
    title: "American Sign Language Interpreter",
    stack: "Python, Flask, HTML/CSS, MongoDB, Docker",
    points: [
      "Built an ASL interpretation platform using machine learning and OpenCV to recognize hand gestures through a live camera feed and translate them into real-time output.",
      "Implemented a Flask backend supporting smooth communication between the recognition model and the user interface.",
      "Containerized the full application with Docker for consistent development and deployment environments.",
    ],
  },
  {
    range: "APR 2024",
    title: "Facial Attendance System",
    stack: "Python, OpenCV, Flask, SQLite",
    points: [
      "Built a real-time facial attendance system using OpenCV for face detection and the face_recognition library for encoding and identification.",
      "Built REST API endpoints and responsive web dashboards for data viewing and management.",
      "Tested on a class of 100 students and reduced attendance-taking time by 80%.",
    ],
  },
];

export const skills = {
  Languages: ["Java", "JavaScript", "Python", "PHP", "SQL"],
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Flask",
    "jQuery",
    "Tailwind CSS",
  ],
  "Tools & Platforms": [
    "Git",
    "GitHub Actions",
    "Docker",
    "Cloudflare R2",
    "Vercel",
    "Figma",
    "REST APIs",
  ],
};
