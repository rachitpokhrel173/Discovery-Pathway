export interface Course {
  id: string;
  title: string;
  field: string;
  level: "Diploma" | "Bachelor" | "Master";
  countrySlug: string;
  countryName: string;
  flag: string;
  duration: string;
  budgetTier: "Budget" | "Mid-range" | "Premium";
}

export const courses: Course[] = [
  { id: "kr-business", title: "Business Administration", field: "Business", level: "Bachelor", countrySlug: "south-korea", countryName: "South Korea", flag: "🇰🇷", duration: "4 years", budgetTier: "Budget" },
  { id: "kr-cs", title: "Computer Science & IT", field: "IT & Computer Science", level: "Bachelor", countrySlug: "south-korea", countryName: "South Korea", flag: "🇰🇷", duration: "4 years", budgetTier: "Budget" },
  { id: "kr-hotel", title: "Hotel & Tourism Management", field: "Hospitality", level: "Bachelor", countrySlug: "south-korea", countryName: "South Korea", flag: "🇰🇷", duration: "4 years", budgetTier: "Budget" },
  { id: "kr-korean", title: "Korean Language & Literature", field: "Language & Humanities", level: "Bachelor", countrySlug: "south-korea", countryName: "South Korea", flag: "🇰🇷", duration: "4 years", budgetTier: "Budget" },
  { id: "kr-mech", title: "Mechanical Engineering", field: "Engineering", level: "Bachelor", countrySlug: "south-korea", countryName: "South Korea", flag: "🇰🇷", duration: "4 years", budgetTier: "Budget" },

  { id: "jp-lang", title: "Japanese Language (Intensive)", field: "Language & Humanities", level: "Diploma", countrySlug: "japan", countryName: "Japan", flag: "🇯🇵", duration: "1–2 years", budgetTier: "Mid-range" },
  { id: "jp-it", title: "Information Technology", field: "IT & Computer Science", level: "Diploma", countrySlug: "japan", countryName: "Japan", flag: "🇯🇵", duration: "2 years", budgetTier: "Mid-range" },
  { id: "jp-business", title: "Business & Administration", field: "Business", level: "Diploma", countrySlug: "japan", countryName: "Japan", flag: "🇯🇵", duration: "2 years", budgetTier: "Mid-range" },
  { id: "jp-hospitality", title: "Hospitality Management", field: "Hospitality", level: "Diploma", countrySlug: "japan", countryName: "Japan", flag: "🇯🇵", duration: "2 years", budgetTier: "Mid-range" },

  { id: "au-mba", title: "Master of Business Administration", field: "Business", level: "Master", countrySlug: "australia", countryName: "Australia", flag: "🇦🇺", duration: "2 years", budgetTier: "Premium" },
  { id: "au-it", title: "Information Technology", field: "IT & Computer Science", level: "Master", countrySlug: "australia", countryName: "Australia", flag: "🇦🇺", duration: "2 years", budgetTier: "Premium" },
  { id: "au-nursing", title: "Nursing & Health Sciences", field: "Health Sciences", level: "Bachelor", countrySlug: "australia", countryName: "Australia", flag: "🇦🇺", duration: "3 years", budgetTier: "Premium" },
  { id: "au-eng", title: "Civil & Mechanical Engineering", field: "Engineering", level: "Bachelor", countrySlug: "australia", countryName: "Australia", flag: "🇦🇺", duration: "4 years", budgetTier: "Premium" },
  { id: "au-acc", title: "Accounting", field: "Business", level: "Bachelor", countrySlug: "australia", countryName: "Australia", flag: "🇦🇺", duration: "3 years", budgetTier: "Premium" },

  { id: "uk-ds", title: "MSc Data Science", field: "IT & Computer Science", level: "Master", countrySlug: "united-kingdom", countryName: "United Kingdom", flag: "🇬🇧", duration: "1 year", budgetTier: "Premium" },
  { id: "uk-mba", title: "MBA", field: "Business", level: "Master", countrySlug: "united-kingdom", countryName: "United Kingdom", flag: "🇬🇧", duration: "1 year", budgetTier: "Premium" },
  { id: "uk-ib", title: "MSc International Business", field: "Business", level: "Master", countrySlug: "united-kingdom", countryName: "United Kingdom", flag: "🇬🇧", duration: "1 year", budgetTier: "Premium" },
  { id: "uk-law", title: "LLM Law", field: "Law", level: "Master", countrySlug: "united-kingdom", countryName: "United Kingdom", flag: "🇬🇧", duration: "1 year", budgetTier: "Premium" },
  { id: "uk-cs", title: "MSc Computer Science", field: "IT & Computer Science", level: "Master", countrySlug: "united-kingdom", countryName: "United Kingdom", flag: "🇬🇧", duration: "1 year", budgetTier: "Premium" },

  { id: "ca-business", title: "Business Management (Diploma/PGD)", field: "Business", level: "Diploma", countrySlug: "canada", countryName: "Canada", flag: "🇨🇦", duration: "2 years", budgetTier: "Premium" },
  { id: "ca-scm", title: "Supply Chain Management", field: "Business", level: "Diploma", countrySlug: "canada", countryName: "Canada", flag: "🇨🇦", duration: "2 years", budgetTier: "Premium" },
  { id: "ca-it", title: "Information Technology", field: "IT & Computer Science", level: "Diploma", countrySlug: "canada", countryName: "Canada", flag: "🇨🇦", duration: "2 years", budgetTier: "Premium" },
  { id: "ca-culinary", title: "Hospitality & Culinary Management", field: "Hospitality", level: "Diploma", countrySlug: "canada", countryName: "Canada", flag: "🇨🇦", duration: "2 years", budgetTier: "Premium" },

  { id: "us-cs", title: "MS Computer Science", field: "IT & Computer Science", level: "Master", countrySlug: "usa", countryName: "United States", flag: "🇺🇸", duration: "2 years", budgetTier: "Premium" },
  { id: "us-mba", title: "MBA", field: "Business", level: "Master", countrySlug: "usa", countryName: "United States", flag: "🇺🇸", duration: "2 years", budgetTier: "Premium" },
  { id: "us-analytics", title: "MS Data Analytics", field: "IT & Computer Science", level: "Master", countrySlug: "usa", countryName: "United States", flag: "🇺🇸", duration: "2 years", budgetTier: "Premium" },
  { id: "us-health", title: "Public Health", field: "Health Sciences", level: "Master", countrySlug: "usa", countryName: "United States", flag: "🇺🇸", duration: "2 years", budgetTier: "Premium" },

  { id: "de-mech", title: "Mechanical Engineering", field: "Engineering", level: "Bachelor", countrySlug: "germany", countryName: "Germany", flag: "🇩🇪", duration: "3–4 years", budgetTier: "Budget" },
  { id: "de-auto", title: "Automotive Engineering", field: "Engineering", level: "Master", countrySlug: "germany", countryName: "Germany", flag: "🇩🇪", duration: "2 years", budgetTier: "Budget" },
  { id: "de-cs", title: "Computer Science", field: "IT & Computer Science", level: "Bachelor", countrySlug: "germany", countryName: "Germany", flag: "🇩🇪", duration: "3 years", budgetTier: "Budget" },
  { id: "de-energy", title: "Renewable Energy Systems", field: "Engineering", level: "Master", countrySlug: "germany", countryName: "Germany", flag: "🇩🇪", duration: "2 years", budgetTier: "Budget" },

  { id: "fi-it", title: "Information Technology", field: "IT & Computer Science", level: "Bachelor", countrySlug: "finland", countryName: "Finland", flag: "🇫🇮", duration: "3.5 years", budgetTier: "Mid-range" },
  { id: "fi-business", title: "International Business", field: "Business", level: "Bachelor", countrySlug: "finland", countryName: "Finland", flag: "🇫🇮", duration: "3.5 years", budgetTier: "Mid-range" },
  { id: "fi-nursing", title: "Nursing", field: "Health Sciences", level: "Bachelor", countrySlug: "finland", countryName: "Finland", flag: "🇫🇮", duration: "3.5 years", budgetTier: "Mid-range" },
];

export const fields = Array.from(new Set(courses.map((c) => c.field)));
export const levels = ["Diploma", "Bachelor", "Master"] as const;
export const budgetTiers = ["Budget", "Mid-range", "Premium"] as const;
