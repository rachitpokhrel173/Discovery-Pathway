export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavSection {
  label: string;
  href?: string;
  columns?: { heading: string; links: NavLink[] }[];
}

export const primaryNav: NavSection[] = [
  {
    label: "Destinations",
    href: "/destinations",
    columns: [
      {
        heading: "Top Destinations",
        links: [
          { label: "South Korea", href: "/destinations/south-korea", description: "D-2/D-4 · Most Popular" },
          { label: "Japan", href: "/destinations/japan", description: "Language-first pathway" },
          { label: "Australia", href: "/destinations/australia", description: "Subclass 500" },
          { label: "United Kingdom", href: "/destinations/united-kingdom", description: "1-year Master's" },
        ],
      },
      {
        heading: "More Destinations",
        links: [
          { label: "Canada", href: "/destinations/canada", description: "Strong PR pipeline" },
          { label: "United States", href: "/destinations/usa", description: "F-1 Visa" },
          { label: "Germany", href: "/destinations/germany", description: "Low-tuition public unis" },
          { label: "Finland", href: "/destinations/finland", description: "Nordic education" },
        ],
      },
      {
        heading: "Tools",
        links: [
          { label: "Compare Countries", href: "/destinations/compare", description: "Side-by-side comparison" },
          { label: "Cost Calculator", href: "/tools/cost-calculator", description: "Estimate your budget" },
          { label: "Course Finder", href: "/tools/course-finder", description: "Filter by field & budget" },
        ],
      },
    ],
  },
  { label: "Process", href: "/process" },
  {
    label: "Resources",
    href: "/resources",
    columns: [
      {
        heading: "Explore",
        links: [
          { label: "All Resources", href: "/resources", description: "Guides & articles" },
          { label: "Success Stories", href: "/success-stories", description: "Real student journeys" },
          { label: "Events & Seminars", href: "/events", description: "Upcoming & past" },
          { label: "FAQ", href: "/faq", description: "Searchable answers" },
        ],
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
];

export const footerLinks = {
  services: [
    { label: "Destinations", href: "/destinations" },
    { label: "Visa & Application Process", href: "/process" },
    { label: "Cost Calculator", href: "/tools/cost-calculator" },
    { label: "Course Finder", href: "/tools/course-finder" },
    { label: "Compare Countries", href: "/destinations/compare" },
  ],
  resources: [
    { label: "All Resources", href: "/resources" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Events & Seminars", href: "/events" },
    { label: "FAQ", href: "/faq" },
    { label: "Gallery", href: "/gallery" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
