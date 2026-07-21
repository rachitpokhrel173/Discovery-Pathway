import { ProcessStage } from "@/types";

export const processStages: ProcessStage[] = [
  {
    id: "guidance",
    stage: 1,
    title: "Free Guidance & Destination Fit",
    duration: "1–3 days",
    description:
      "A no-obligation consultation where we map your academic background, budget, and long-term goals against realistic country and university options.",
    whatWeDo: [
      "Assess academic history and eligibility",
      "Recommend 2–3 realistic destination/university combinations",
      "Give an honest, upfront cost estimate",
    ],
    whatYouNeed: ["Academic transcripts (SEE/+2/Bachelor's)", "A clear sense of your budget range"],
  },
  {
    id: "test-prep",
    stage: 2,
    title: "Test Preparation",
    duration: "4–12 weeks",
    description:
      "Structured coaching in IELTS, TOPIK, or Japanese language fundamentals depending on your destination, run by dedicated in-house instructors.",
    whatWeDo: [
      "Diagnostic assessment and personalized study plan",
      "Weekly instruction with mock tests",
      "Writing Task 1/2 and speaking mock interviews",
    ],
    whatYouNeed: ["Consistent attendance", "Practice time outside class"],
  },
  {
    id: "documentation",
    stage: 3,
    title: "Documentation & Admission Forms",
    duration: "2–4 weeks",
    description:
      "We prepare and verify every document your target institution requires, including notarization and translation where needed.",
    whatWeDo: [
      "Prepare and review admission forms",
      "Coordinate notarization/apostille/translation",
      "Quality-check every document before submission",
    ],
    whatYouNeed: ["Original academic certificates", "Passport and photographs"],
  },
  {
    id: "admission",
    stage: 4,
    title: "University Application & Offer",
    duration: "2–6 weeks",
    description:
      "Applications are submitted to matched institutions, and we negotiate scholarship consideration where available.",
    whatWeDo: [
      "Submit applications to selected universities",
      "Track admission decisions and follow up proactively",
      "Apply for eligible scholarships on your behalf",
    ],
    whatYouNeed: ["Timely response to any university queries"],
  },
  {
    id: "visa",
    stage: 5,
    title: "Visa Filing & Interview Preparation",
    duration: "3–8 weeks",
    description:
      "The highest-stakes stage. We build your financial documentation, statement of purpose, and — where relevant — disclosure strategy for any prior refusal history, then run mock interviews.",
    whatWeDo: [
      "Prepare financial and supporting documentation",
      "Draft and refine Statement of Purpose / GTE statement",
      "Run mock visa interviews",
      "File the visa application and track status",
    ],
    whatYouNeed: ["Financial documents (own or sponsor)", "Full honesty about any prior visa history"],
  },
  {
    id: "departure",
    stage: 6,
    title: "Pre-Departure Orientation",
    duration: "1–2 weeks before flight",
    description:
      "Practical preparation for life abroad — accommodation, banking, local transport, part-time work rules, and what to pack.",
    whatWeDo: [
      "Confirm accommodation arrangements",
      "Brief on banking, SIM, transport, and campus orientation",
      "Share part-time work rules specific to your destination",
    ],
    whatYouNeed: ["Flight booking confirmation", "Final document checklist sign-off"],
  },
];

export const commonRefusalReasons = [
  {
    reason: "Weak or generic Statement of Purpose",
    mitigation:
      "We draft every SOP specific to your academic history and the exact program, never from a template.",
  },
  {
    reason: "Insufficient or unclear financial evidence",
    mitigation:
      "Financial documents are checked against each embassy's specific threshold and formatting requirements before submission.",
  },
  {
    reason: "Undisclosed or poorly explained prior visa refusal",
    mitigation:
      "We build a dedicated disclosure strategy addressing the original refusal reason directly, rather than hoping it's overlooked.",
  },
  {
    reason: "Weak ties to home country (immigration intent concerns)",
    mitigation:
      "We help document genuine ties — family, assets, career plans in Nepal — that support a credible return-intent narrative.",
  },
];
