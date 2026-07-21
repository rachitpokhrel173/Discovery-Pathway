export interface CostProfile {
  slug: string;
  name: string;
  flag: string;
  countryCode: string;
  tuitionPerYear: { diploma: number; bachelor: number; master: number };
  livingPerMonthBase: number;
  oneTimeFees: number; // visa fee, health insurance, application fees, flight estimate (NPR)
}

// Figures are representative planning estimates in NPR, based on typical ranges
// for Nepali students at partner institutions — confirmed exactly during consultation.
export const costProfiles: CostProfile[] = [
  {
    slug: "south-korea",
    name: "South Korea",
    flag: "🇰🇷",
    countryCode: "kr",
    tuitionPerYear: { diploma: 350000, bachelor: 550000, master: 700000 },
    livingPerMonthBase: 50000,
    oneTimeFees: 180000,
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    countryCode: "jp",
    tuitionPerYear: { diploma: 500000, bachelor: 750000, master: 900000 },
    livingPerMonthBase: 65000,
    oneTimeFees: 220000,
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    countryCode: "au",
    tuitionPerYear: { diploma: 1800000, bachelor: 2800000, master: 3400000 },
    livingPerMonthBase: 140000,
    oneTimeFees: 350000,
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    countryCode: "gb",
    tuitionPerYear: { diploma: 1600000, bachelor: 2600000, master: 2800000 },
    livingPerMonthBase: 120000,
    oneTimeFees: 320000,
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    countryCode: "ca",
    tuitionPerYear: { diploma: 1400000, bachelor: 2200000, master: 2600000 },
    livingPerMonthBase: 115000,
    oneTimeFees: 300000,
  },
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    countryCode: "us",
    tuitionPerYear: { diploma: 2000000, bachelor: 3200000, master: 4500000 },
    livingPerMonthBase: 155000,
    oneTimeFees: 400000,
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    countryCode: "de",
    tuitionPerYear: { diploma: 100000, bachelor: 150000, master: 200000 },
    livingPerMonthBase: 105000,
    oneTimeFees: 380000,
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    countryCode: "fi",
    tuitionPerYear: { diploma: 700000, bachelor: 1000000, master: 1200000 },
    livingPerMonthBase: 100000,
    oneTimeFees: 300000,
  },
];

export const accommodationMultiplier: Record<string, number> = {
  dormitory: 0.75,
  shared: 1,
  private: 1.5,
};

export const cityTierMultiplier: Record<string, number> = {
  "tier-1": 1.2,
  "tier-2": 1,
  "tier-3": 0.85,
};