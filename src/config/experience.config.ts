import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Frontend Developer",
    employmentType: "Full time",
    company: {
      name: "AG Solutions",
      url: "#",
    },
    location: {
      name: "Bengaluru",
    },
    start: "August 2024",
    end: "Present",
    description: [
      "Developed and maintained 10+ production-grade CRM systems for industries like Healthcare, Education, and Logistics using React, Redux, and TailwindCSS.",
      "Implemented a complete user management system enabling granular access control for pages, buttons, and dashboard modules.",
      "Led the architecture of modular, scalable frontend systems with reusable UI components (ShadCN, Radix UI, MUI) and robust state management (Redux, React Query).",
      "Enhanced performance by 30%+ via Vite-based optimizations, code-splitting, and lazy loading.",
      "Collaborated with backend teams to integrate RESTful APIs and real-time data dashboards using TanStack Table and WebSockets.",
      "Tech: React, TypeScript, Node.js, Express, MongoDB, TailwindCSS, Redux, Vite, Git, AWS.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    employmentType: "Freelance",
    company: {
      name: "Self-employed",
      url: "#",
    },
    location: {
      name: "Remote",
    },
    start: "January 2024",
    end: "May 2024",
    description: [
      "Developed custom web applications and e-commerce platforms for multiple clients.",
      "Built responsive and high-performance websites using React, Next.js, and TailwindCSS.",
      "Implemented animations and enhanced UX using Framer Motion and modern frontend patterns.",
      "Tech: React, Next.js, TypeScript, TailwindCSS, Framer Motion, Git, AWS.",
    ],
  },
];
