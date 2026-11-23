export const profile = {
  name: "Hassan Javaid",
  role: "Full-stack Developer",
  email: "hassanjavaid159@gmail.com",
  github: "https://github.com/Hassanjavaid1",
  linkedin: "https://www.linkedin.com/in/hassan-javaid159/",
  linkedinLabel: "LinkedIn @hassan-javaid159",
  intro: "I turn complex ideas into ",
emphasis: "simple, intuitive experiences",
outro: " backed by reliable APIs and thoughtfully designed systems.",
  expertise: ["React", "Node.js", "TypeScript", "SQL"],
};

type Project = {
  name: string;
  summary: string;
  image: string;
  alt: string;
  url?: string;
};

// Gallery order follows this list. Entries without a URL are display-only.
export const projects: Project[] = [
  { name: "ImagingHub", summary: "Image hosting and on-demand transformations.",
    image: "/projects/imaginghub.svg", alt: "", url: "https://imaginghub.vercel.app/" },
  { name: "Linkify", summary: "Short links with a history of every link you create.",
    image: "/projects/linkify.svg", alt: "", url: "https://linkify-shortener.vercel.app/" },
];

export const experience = [
  { company: "Techelix", role: "Full Stack Developer", dates: "Oct 2025 – Aug 2026" },
  { company: "CBS Pakistan", role: "Frontend Developer Intern", dates: "Nov 2024 – Feb 2025" },
];
