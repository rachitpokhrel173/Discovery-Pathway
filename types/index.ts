export interface Destination {
  slug: string;
  name: string;
  flag: string;
  countryCode: string;
  tagline: string;
  heroImage: string;
  visaType: string;
  mostPopular?: boolean;
  intakes: string[];
  currency: string;
  quickFacts: {
    avgTuitionPerYear: string;
    avgLivingPerMonth: string;
    prPathway: boolean;
    workRights: string;
    visaSuccessRate: string;
  };
  whyStudyHere: string[];
  universities: { name: string; city: string; ranking?: string }[];
  popularCourses: string[];
  scholarships: { name: string; coverage: string; eligibility: string }[];
  visaRequirements: string[];
  documentsRequired: string[];
  careerOpportunities: string[];
  faqs: { question: string; answer: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  whatsapp?: string;
  facebook?: string;
  email?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  university: string;
  quote: string;
  photo: string;
  rating: number;
  videoUrl?: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface ProcessStage {
  id: string;
  stage: number;
  title: string;
  duration: string;
  description: string;
  whatWeDo: string[];
  whatYouNeed: string[];
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  type: "seminar" | "webinar" | "fair" | "workshop";
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  isPast: boolean;
  registrationOpen: boolean;
}

export interface ResourcePost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  readingTime: string;
  content: string;
}