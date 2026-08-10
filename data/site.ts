export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export const services = [
  { title: "Digital products", summary: "Products engineered around real people and real business goals.", items: ["Mobile applications", "Web applications", "SaaS platforms", "Custom software"] },
  { title: "Websites", summary: "High-performance digital experiences that earn attention and trust.", items: ["Corporate websites", "E-commerce", "Landing pages", "Portals", "Content platforms"] },
  { title: "Product design", summary: "Clarity, usability and visual distinction in one coherent system.", items: ["UI/UX design", "UX strategy", "Prototyping", "Design systems"] },
  { title: "Branding", summary: "Meaningful identities built to be remembered and ready to scale.", items: ["Brand strategy", "Brand identity", "Logo systems", "Visual identity", "Brand guidelines"] },
  { title: "Creative & marketing", summary: "Creative systems that make launches matter and brands grow.", items: ["Campaign creative", "Advertising", "Social media", "Digital marketing", "Product launches"] },
  { title: "Technology", summary: "Reliable foundations for ambitious digital businesses.", items: ["Backend development", "APIs", "Integrations", "Cloud solutions", "Maintenance & support"] },
];

export const processSteps = [
  ["Discover", "Understand the business, audience, goals and opportunity."],
  ["Define", "Shape strategy, product direction and technical approach."],
  ["Design", "Craft the brand, experience and interface."],
  ["Build", "Engineer scalable, reliable digital products."],
  ["Launch", "Test, deploy and introduce the product to market."],
  ["Grow", "Improve performance, marketing and future releases."],
] as const;

// Explicit concept showcases—not client work. Replace these objects with approved case studies later.
export const projectPlaceholders = [
  { number: "01", title: "Digital product concept study", format: "Independent concept · Mobile / Product design", tone: "product" },
  { number: "02", title: "Brand experience concept study", format: "Independent concept · Brand identity / Creative", tone: "brand" },
  { number: "03", title: "Web experience concept study", format: "Independent concept · Web / UI / Development", tone: "web" },
] as const;

export const socialLinks = ["LinkedIn", "Instagram", "X", "GitHub", "Behance"].map((label) => ({ label, href: "#" }));
