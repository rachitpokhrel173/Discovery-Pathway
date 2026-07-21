import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export const siteConfig = {
  name: "Discovery Pathway",
  tagline: "Turning paperwork into possibilities.",
  description:
    "Discovery Pathway is a Banepa-based international education consultancy helping Nepali students study in South Korea, Japan, Australia, the UK, Canada, the USA, Germany, and Finland — with visa guidance, university admissions, test preparation, and end-to-end support.",
  url: "https://discoverypathway.edu.np",
  phone: "+977-011-665659",
  whatsapp: "9779851345539",
  email: "banepa@discoveryedu.com.np",
  address: "Tindobato Margh, Banepa-8, Kavrepalanchok, Nepal",
  social: {
    facebook: "https://facebook.com/discoverypathway",
    instagram: "https://instagram.com/discoverypathway",
    tiktok: "https://tiktok.com/@discoverypathway",
  },
  stats: {
    visasApproved: 747,
    successRate: 97.9,
    universityPartners: 50,
    destinations: 16,
    yearsActive: 4,
  },
};
export const countryCodeBySlug: Record<string, string> = {
  "south-korea": "kr",
  japan: "jp",
  australia: "au",
  "united-kingdom": "gb",
  canada: "ca",
  usa: "us",
  germany: "de",
  finland: "fi",
};
 
export function getCountryCode(slug: string): string {
  return countryCodeBySlug[slug] ?? "un"; // "un" = flagcdn's generic/UN placeholder
}