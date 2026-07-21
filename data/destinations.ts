import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    slug: "south-korea",
    name: "South Korea",
    flag: "🇰🇷",
    countryCode: "kr",
    tagline: "Nepal's most trusted pathway — top-tier TVET and D-2/D-4 visa expertise.",
    heroImage: "/images/destinations/south-korea.jpg",
    visaType: "D-2 (Degree) / D-4 (Language)",
    mostPopular: true,
    intakes: ["March", "September"],
    currency: "KRW",
    quickFacts: {
      avgTuitionPerYear: "NPR 4,00,000 – 8,00,000",
      avgLivingPerMonth: "NPR 45,000 – 65,000",
      prPathway: true,
      workRights: "Up to 20 hrs/week (D-2), part-time from term 2",
      visaSuccessRate: "96%",
    },
    whyStudyHere: [
      "Highest visa approval rate among our destinations, with the deepest institutional partner network we manage.",
      "TOPIK-based scholarships can cover 30–100% of tuition at partner universities.",
      "Strong part-time work culture lets students offset living costs legally from their second semester.",
      "Direct flights and an established Nepali student community across Busan, Seoul, and Daegu.",
    ],
    universities: [
      { name: "Tongmyong University", city: "Busan" },
      { name: "Dongeui University", city: "Busan" },
      { name: "Silla University", city: "Busan" },
      { name: "Busan University of Foreign Studies", city: "Busan" },
      { name: "Far East University", city: "Eumseong" },
    ],
    popularCourses: [
      "Business Administration",
      "Computer Science & IT",
      "Hotel & Tourism Management",
      "Korean Language & Literature",
      "Mechanical Engineering",
    ],
    scholarships: [
      { name: "TOPIK Tuition Waiver", coverage: "30–100% tuition", eligibility: "TOPIK Level 3+ at application" },
      { name: "GKS (Global Korea Scholarship)", coverage: "Full tuition + stipend", eligibility: "Top academic record, government-sponsored" },
    ],
    visaRequirements: [
      "Confirmed admission (Certificate of Admission) from a D-2/D-4 accredited institution",
      "Proof of financial capability (bank statement, sponsor documents)",
      "Academic transcripts and certificates, apostilled/notarized",
      "TOPIK score (if applying with language exemption)",
      "Statement of Purpose and study plan",
      "Clean visa history disclosure — prior refusals must be declared accurately",
    ],
    documentsRequired: [
      "Valid passport (min. 6 months validity)",
      "SLC/SEE, +2, and Bachelor's transcripts & certificates",
      "Bank statement (own or sponsor, per embassy threshold)",
      "Sponsor's income/tax documents",
      "Passport-size photos (as per embassy spec)",
      "Certificate of Admission from university",
    ],
    careerOpportunities: [
      "IT & software development roles in Busan/Seoul tech hubs",
      "Hospitality and tourism management",
      "Manufacturing and mechanical engineering",
      "Korean-Nepali trade and business liaison roles",
    ],
    faqs: [
      {
        question: "Can I apply to South Korea if I have a prior visa refusal from another country?",
        answer:
          "Yes. Prior refusals (including Australia or Korea itself) don't automatically disqualify you, but they must be disclosed accurately and explained with supporting documentation. We build a disclosure strategy specifically for this before submission.",
      },
      {
        question: "Do I need TOPIK before I apply?",
        answer:
          "Not always. Many D-4 language-track programs accept zero-level Korean and teach it on campus. D-2 degree-track programs at some universities require TOPIK 3+, though this varies by institution — we match you to universities based on your current level.",
      },
      {
        question: "How much can I realistically earn from part-time work?",
        answer:
          "Most students earn enough to cover 40–60% of monthly living costs once part-time work rights activate in term two, working within the legal 20-hour weekly limit.",
      },
    ],
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    countryCode: "jp",
    tagline: "Rigorous language-first pathway with strong post-study work outcomes.",
    heroImage: "/images/destinations/japan.jpg",
    visaType: "Student Visa (Ryugaku)",
    intakes: ["April", "October"],
    currency: "JPY",
    quickFacts: {
      avgTuitionPerYear: "NPR 6,00,000 – 9,50,000",
      avgLivingPerMonth: "NPR 55,000 – 80,000",
      prPathway: true,
      workRights: "Up to 28 hrs/week with permission",
      visaSuccessRate: "91%",
    },
    whyStudyHere: [
      "World-class language schools (including our partner Ginza World Academy in Tokyo) build genuine fluency before degree study.",
      "Highly structured, discipline-focused education culture with excellent graduate employment outcomes.",
      "Points-based PR system is achievable within 5 years for skilled graduates.",
      "One of the safest countries globally for international students living independently.",
    ],
    universities: [
      { name: "Ginza World Academy", city: "Tokyo" },
      { name: "ISI Language School", city: "Tokyo (Shinjuku)" },
      { name: "Partner technical colleges (Senmon Gakko)", city: "Various" },
    ],
    popularCourses: [
      "Japanese Language (Intensive)",
      "Information Technology",
      "Business & Administration",
      "Hospitality Management",
      "Engineering (Senmon Gakko tracks)",
    ],
    scholarships: [
      { name: "MEXT-affiliated partial waivers", coverage: "Up to 30% tuition", eligibility: "Strong JLPT performance + academic record" },
    ],
    visaRequirements: [
      "Certificate of Eligibility (CoE) issued by Japanese immigration",
      "Proof of financial capability covering full course duration",
      "Academic transcripts and graduation certificates",
      "Statement of purpose tailored to the institution",
      "Accurate disclosure of any prior visa refusal history",
    ],
    documentsRequired: [
      "Valid passport",
      "Academic transcripts (SEE, +2, Bachelor's if applicable)",
      "Bank statements and sponsor financial documents",
      "CoE application form (school-issued)",
      "Passport photos as per Japanese immigration spec",
    ],
    careerOpportunities: [
      "IT and software engineering (high demand for language + technical skill combo)",
      "Hospitality ahead of major tourism growth",
      "Manufacturing and technical trades via Senmon Gakko pathways",
      "Translation and cross-border business roles",
    ],
    faqs: [
      {
        question: "How much Japanese do I need before applying?",
        answer:
          "Most language schools accept beginners (N5 or even zero level) and teach intensively from day one — we currently guide students through Minna no Nihongo as standard preparation before departure.",
      },
      {
        question: "What's the ISI Language School October intake process?",
        answer:
          "It includes application completion, an interview assessing basic conversational Japanese and motivation, CoE processing, and visa filing — we manage each stage and prepare you specifically for the interview.",
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    countryCode: "au",
    tagline: "Globally ranked universities with a clear post-study work visa pathway.",
    heroImage: "/images/destinations/australia.jpg",
    visaType: "Subclass 500 (Student)",
    intakes: ["February", "July", "November"],
    currency: "AUD",
    quickFacts: {
      avgTuitionPerYear: "NPR 25,00,000 – 40,00,000",
      avgLivingPerMonth: "NPR 1,20,000 – 1,60,000",
      prPathway: true,
      workRights: "48 hrs/fortnight during term, unlimited on breaks",
      visaSuccessRate: "82%",
    },
    whyStudyHere: [
      "Multiple globally ranked universities across business, IT, health, and engineering.",
      "Post-Study Work visa (subclass 485) offers 2–4 years of work rights after graduation.",
      "Large, established Nepali diaspora across Sydney, Melbourne, and regional cities.",
      "Regional campuses offer lower costs and additional migration points.",
    ],
    universities: [
      { name: "Sydney Metropolitan University", city: "Sydney" },
      { name: "Victoria University", city: "Melbourne" },
      { name: "Federation University", city: "Ballarat" },
    ],
    popularCourses: [
      "Master of Business Administration",
      "Information Technology",
      "Nursing & Health Sciences",
      "Civil & Mechanical Engineering",
      "Accounting",
    ],
    scholarships: [
      { name: "University Merit Scholarships", coverage: "10–30% tuition", eligibility: "GPA 3.0+ or equivalent" },
      { name: "Regional Campus Incentive", coverage: "Up to 15% tuition", eligibility: "Enrollment at regional campus" },
    ],
    visaRequirements: [
      "Confirmation of Enrolment (CoE) from a CRICOS-registered institution",
      "Genuine Temporary Entrant (GTE) statement",
      "Proof of financial capacity (living costs + tuition + travel)",
      "Overseas Student Health Cover (OSHC)",
      "English proficiency (IELTS/PTE) meeting institution threshold",
      "Full and honest disclosure of prior visa refusals — critical for subclass 500 assessment",
    ],
    documentsRequired: [
      "Valid passport",
      "IELTS/PTE score report",
      "Academic transcripts and certificates",
      "GTE statement (drafted with our guidance)",
      "Financial evidence (bank statements, education loan sanction, or sponsor documents)",
      "OSHC policy confirmation",
    ],
    careerOpportunities: [
      "Healthcare and aged care (high-demand skilled occupation list presence)",
      "IT and cybersecurity",
      "Engineering and construction management",
      "Accounting and finance",
    ],
    faqs: [
      {
        question: "I've had an Australian visa refused before. Can I still apply?",
        answer:
          "Yes — this is one of our specialties. A prior refusal requires a carefully constructed GTE statement directly addressing the reason for refusal, along with strengthened financial and academic evidence. We've successfully reapplied for students with this exact history.",
      },
      {
        question: "What IELTS score do I need?",
        answer:
          "Most bachelor's programs require 6.0 overall (no band below 5.5); competitive master's programs often need 6.5. We run structured IELTS Writing Task 1 and Task 2 preparation in-house.",
      },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    countryCode: "gb",
    tagline: "One-year master's degrees and a fast, points-based visa system.",
    heroImage: "/images/destinations/uk.jpg",
    visaType: "Student Route (formerly Tier 4)",
    intakes: ["September/October", "January"],
    currency: "GBP",
    quickFacts: {
      avgTuitionPerYear: "NPR 20,00,000 – 35,00,000",
      avgLivingPerMonth: "NPR 1,00,000 – 1,40,000",
      prPathway: false,
      workRights: "20 hrs/week during term",
      visaSuccessRate: "89%",
    },
    whyStudyHere: [
      "One-year master's degrees mean lower total cost and faster return on investment than most countries.",
      "Graduate Route visa grants 2 years of post-study work (3 for PhD) with no sponsor required.",
      "Globally recognized qualifications across every major field of study.",
      "Rich multicultural student life across London, Manchester, and mid-size university cities.",
    ],
    universities: [
      { name: "University of East London", city: "London" },
      { name: "BPP University", city: "London/Manchester" },
      { name: "Ulster University", city: "Belfast" },
    ],
    popularCourses: [
      "MSc Data Science",
      "MBA",
      "MSc International Business",
      "LLM Law",
      "MSc Computer Science",
    ],
    scholarships: [
      { name: "Vice-Chancellor's International Scholarship", coverage: "Up to £4,000", eligibility: "Strong academic record, early application" },
    ],
    visaRequirements: [
      "Confirmation of Acceptance for Studies (CAS) from a licensed sponsor institution",
      "Proof of funds held for 28 consecutive days covering tuition + living costs",
      "Tuberculosis (TB) test certificate (for applicants from listed countries)",
      "Academic Technology Approval Scheme (ATAS) clearance if required by course",
      "English proficiency (IELTS UKVI or equivalent)",
    ],
    documentsRequired: [
      "Valid passport",
      "CAS reference number",
      "Bank statements (28-day rule)",
      "IELTS UKVI score report",
      "TB test certificate",
      "Academic transcripts and certificates",
    ],
    careerOpportunities: [
      "Financial and business services in London",
      "Data science and technology",
      "Healthcare (with NMC/professional registration where applicable)",
      "Law and legal consulting",
    ],
    faqs: [
      {
        question: "Is the UK visa process fast?",
        answer:
          "Yes — decisions are typically issued within 3 weeks of biometric appointment, making it one of the fastest processes among our destinations once your CAS and financials are in order.",
      },
      {
        question: "Do I need to show funds for the full course or just one year?",
        answer:
          "For courses up to 9 months you show the full course cost; for longer courses, you typically show one year of tuition plus living costs, held for the required 28-day period.",
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    countryCode: "ca",
    tagline: "Best-in-class post-graduation work permit and PR pipeline.",
    heroImage: "/images/destinations/canada.jpg",
    visaType: "Study Permit",
    intakes: ["January", "May", "September"],
    currency: "CAD",
    quickFacts: {
      avgTuitionPerYear: "NPR 18,00,000 – 30,00,000",
      avgLivingPerMonth: "NPR 1,00,000 – 1,30,000",
      prPathway: true,
      workRights: "24 hrs/week during term, full-time on breaks",
      visaSuccessRate: "78%",
    },
    whyStudyHere: [
      "Post-Graduation Work Permit (PGWP) valid up to 3 years — one of the strongest PR pipelines available to students.",
      "Diploma and degree pathways through public colleges are more budget-accessible than most Western destinations.",
      "Express Entry and Provincial Nominee Programs give graduates a structured PR route.",
      "Safe, welcoming, and increasingly large Nepali student community in Ontario and BC.",
    ],
    universities: [
      { name: "Fraser Valley partner colleges", city: "British Columbia" },
      { name: "Georgian College (partner pathway)", city: "Ontario" },
    ],
    popularCourses: [
      "Business Management (Diploma/PGD)",
      "Supply Chain Management",
      "Information Technology",
      "Hospitality & Culinary Management",
      "Early Childhood Education",
    ],
    scholarships: [
      { name: "College Entrance Scholarship", coverage: "CAD 1,000–3,000", eligibility: "Merit-based, varies by college" },
    ],
    visaRequirements: [
      "Letter of Acceptance from a Designated Learning Institution (DLI)",
      "Proof of financial support (GIC or bank statement + tuition receipt)",
      "Statement of Purpose explaining study plan and ties to Nepal",
      "Medical exam (if required)",
      "Biometrics",
    ],
    documentsRequired: [
      "Valid passport",
      "Letter of Acceptance (DLI)",
      "GIC certificate or equivalent financial proof",
      "Academic transcripts and certificates",
      "Statement of Purpose",
      "IELTS/language test results",
    ],
    careerOpportunities: [
      "Business administration and supply chain",
      "IT and software development",
      "Hospitality and food service management",
      "Early childhood and community services",
    ],
    faqs: [
      {
        question: "Why is Canada's visa success rate lower than other destinations?",
        answer:
          "Canada's study permit assessment weighs 'dual intent' and ties to home country heavily, and processing standards have tightened in recent years. We focus heavily on building a strong, well-documented Statement of Purpose to address this directly.",
      },
      {
        question: "What is a GIC and do I need one?",
        answer:
          "A Guaranteed Investment Certificate is a Canadian bank product that proves you can support yourself; it's not mandatory for every applicant but strongly improves visa outcomes and is standard practice in our applications.",
      },
    ],
  },
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    countryCode: "us",
    tagline: "The world's largest higher education system, for well-prepared applicants.",
    heroImage: "/images/destinations/usa.jpg",
    visaType: "F-1 Student Visa",
    intakes: ["August/September", "January"],
    currency: "USD",
    quickFacts: {
      avgTuitionPerYear: "NPR 25,00,000 – 55,00,000",
      avgLivingPerMonth: "NPR 1,30,000 – 1,80,000",
      prPathway: false,
      workRights: "On-campus only (20 hrs/week); OPT after graduation",
      visaSuccessRate: "74%",
    },
    whyStudyHere: [
      "Unmatched breadth of programs and globally top-ranked institutions across every field.",
      "Optional Practical Training (OPT) — and STEM OPT extension — provide up to 3 years of post-study work for STEM graduates.",
      "Extensive scholarship and assistantship culture, especially at the graduate level.",
      "Strong outcomes for STEM, business, and health sciences graduates specifically.",
    ],
    universities: [
      { name: "Partner network of SEVP-certified institutions", city: "Multiple states" },
    ],
    popularCourses: [
      "MS Computer Science",
      "MBA",
      "MS Data Analytics",
      "Public Health",
      "Electrical Engineering",
    ],
    scholarships: [
      { name: "Graduate Assistantships", coverage: "Full tuition + stipend", eligibility: "Strong GRE/academic profile, research fit" },
    ],
    visaRequirements: [
      "Form I-20 from a SEVP-certified institution",
      "SEVIS fee payment confirmation",
      "Proof of sufficient funds for one year of study",
      "Strong ties to Nepal demonstrating non-immigrant intent",
      "DS-160 form and visa interview at the US Embassy",
    ],
    documentsRequired: [
      "Valid passport",
      "I-20 form",
      "SEVIS fee receipt",
      "Financial documents (bank statements, sponsor affidavit)",
      "Academic transcripts, GRE/GMAT/TOEFL scores as required",
      "DS-160 confirmation page",
    ],
    careerOpportunities: [
      "Technology and software engineering (STEM OPT advantage)",
      "Business analytics and consulting",
      "Public health and biomedical research",
      "Engineering across sectors",
    ],
    faqs: [
      {
        question: "Is the F-1 visa interview difficult?",
        answer:
          "It's the single most decisive step — a short, high-pressure interview focused on your study plan and intent to return to Nepal. We run mock interview sessions specifically calibrated to common F-1 refusal patterns.",
      },
      {
        question: "Can I work off-campus during my studies?",
        answer:
          "Generally no — F-1 status restricts work to on-campus roles during the first year, with CPT/OPT options opening up later tied directly to your field of study.",
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    countryCode: "de",
    tagline: "Low or no tuition at public universities, for the right academic profile.",
    heroImage: "/images/destinations/germany.jpg",
    visaType: "National (D) Visa for Study Purposes",
    intakes: ["April", "October"],
    currency: "EUR",
    quickFacts: {
      avgTuitionPerYear: "NPR 0 – 3,00,000 (public universities)",
      avgLivingPerMonth: "NPR 90,000 – 1,20,000",
      prPathway: true,
      workRights: "120 full or 240 half days per year",
      visaSuccessRate: "80%",
    },
    whyStudyHere: [
      "Most public universities charge zero or minimal tuition, even for international students.",
      "18-month post-study job-seeker visa extension after graduation.",
      "World-leading engineering, automotive, and applied sciences programs.",
      "EU Blue Card pathway offers a strong, structured route to permanent residency.",
    ],
    universities: [
      { name: "Public Universities of Applied Sciences (partner network)", city: "Multiple cities" },
    ],
    popularCourses: [
      "Mechanical Engineering",
      "Automotive Engineering",
      "Computer Science",
      "Renewable Energy Systems",
      "International Business",
    ],
    scholarships: [
      { name: "DAAD-aligned guidance", coverage: "Varies (stipend-based)", eligibility: "Strong academic record, research alignment" },
    ],
    visaRequirements: [
      "University admission letter (Zulassungsbescheid)",
      "Blocked account (Sperrkonto) proof of funds",
      "APS certificate (for Nepali applicants, where required)",
      "German language proficiency or English-taught program confirmation",
      "Health insurance confirmation",
    ],
    documentsRequired: [
      "Valid passport",
      "University admission letter",
      "Blocked account confirmation",
      "APS certificate",
      "Academic transcripts (with certified translations)",
      "Health insurance proof",
    ],
    careerOpportunities: [
      "Automotive and mechanical engineering",
      "Renewable energy and sustainability sectors",
      "IT and software development",
      "Manufacturing and applied sciences",
    ],
    faqs: [
      {
        question: "Is a blocked account mandatory?",
        answer:
          "Yes, for most applicants — you deposit a set annual amount into a blocked account releasing fixed monthly withdrawals, which German authorities treat as proof you can support yourself.",
      },
      {
        question: "Do I need German language skills?",
        answer:
          "Not for English-taught programs, though basic German (A1/A2) significantly helps with daily life and part-time work opportunities — we recommend starting early where possible.",
      },
    ],
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    countryCode: "fi",
    tagline: "Tuition-friendly Nordic education with a calm, high-quality student life.",
    heroImage: "/images/destinations/finland.jpg",
    visaType: "Residence Permit for Studies",
    intakes: ["August/September", "January"],
    currency: "EUR",
    quickFacts: {
      avgTuitionPerYear: "NPR 8,00,000 – 15,00,000",
      avgLivingPerMonth: "NPR 90,000 – 1,10,000",
      prPathway: true,
      workRights: "30 hrs/week during term",
      visaSuccessRate: "83%",
    },
    whyStudyHere: [
      "Consistently ranked among the world's top education systems and safest countries.",
      "Extended 2-year residence permit for job-seeking after graduation.",
      "Strong scholarship culture for high-performing applicants at Universities of Applied Sciences.",
      "Growing Nepali student community in Helsinki and Tampere.",
    ],
    universities: [
      { name: "Universities of Applied Sciences (partner network)", city: "Helsinki / Tampere" },
    ],
    popularCourses: [
      "Information Technology",
      "International Business",
      "Nursing",
      "Environmental Engineering",
      "Hospitality Management",
    ],
    scholarships: [
      { name: "Tuition Fee Scholarship", coverage: "Up to 50% tuition", eligibility: "First-year academic performance" },
    ],
    visaRequirements: [
      "Study place confirmation from a Finnish institution",
      "Proof of sufficient funds (approx. EUR 800/month for the residence permit)",
      "Valid health insurance",
      "Accommodation arrangement in Finland",
      "Residence permit application submitted via Enter Finland",
    ],
    documentsRequired: [
      "Valid passport",
      "Study place confirmation letter",
      "Bank statement or scholarship decision letter",
      "Health insurance certificate",
      "Academic transcripts and certificates",
    ],
    careerOpportunities: [
      "IT and software development",
      "Nursing and healthcare",
      "Environmental and clean-tech engineering",
      "International business and logistics",
    ],
    faqs: [
      {
        question: "How much does Finland actually cost compared to Korea or Japan?",
        answer:
          "Tuition tends to run higher than Korea but living costs are broadly comparable to Japan — Finland suits students prioritizing education quality and a Nordic PR pathway over lowest up-front cost.",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}