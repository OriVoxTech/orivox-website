export type Project = {
  title: string;
  slug: string;
  category: string;
  type: string;
  description: string;
  image?: string;
  featured: boolean;
  realProject: boolean;
  year: string;
  technologies: string[];
  caseStudyUrl: string;
};

export const projects: Project[] = [
  {
    title: "Dominion Well",
    slug: "dominion-well",
    category: "Healthcare / Digital Experience",
    type: "Web Experience",
    description: "A modern digital healthcare platform designed to make it easier for patients to discover healthcare services and connect with medical professionals.",
    featured: true,
    realProject: true,
    year: "2026",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Redux", "NestJS", "MongoDB"],
    caseStudyUrl: "https://dominionwell.com",
  },
  {
    title: "Digital Product",
    slug: "digital-product-exploration",
    category: "Concept exploration",
    type: "Concept / Exploration",
    description: "A product-focused visual study exploring how Orivox can shape useful, high-trust digital experiences.",
    featured: false,
    realProject: false,
    year: "Concept",
    technologies: [],
    caseStudyUrl: "",
  },
  {
    title: "Brand System",
    slug: "brand-system-exploration",
    category: "Visual identity exploration",
    type: "Concept / Exploration",
    description: "A brand-system study exploring identity, rhythm and digital presence without representing client work.",
    featured: false,
    realProject: false,
    year: "Concept",
    technologies: [],
    caseStudyUrl: "",
  },
  {
    title: "Web Experience",
    slug: "web-experience-exploration",
    category: "Digital experience exploration",
    type: "Concept / Exploration",
    description: "A web-experience study for layout, interface density and modern digital storytelling.",
    featured: false,
    realProject: false,
    year: "Concept",
    technologies: [],
    caseStudyUrl: "",
  },
];

export const dominionWell = projects[0];
