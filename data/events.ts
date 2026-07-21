import { EventItem } from "@/types";

export const events: EventItem[] = [
  {
    id: "ev-1",
    slug: "korea-ielts-scholarship-seminar-sept-2026",
    title: "South Korea IELTS Scholarship Seminar",
    type: "seminar",
    date: "2026-09-05",
    time: "11:00 AM",
    location: "Discovery Pathway Office, Banepa",
    description:
      "A walkthrough of IELTS-linked tuition waivers, which partner universities offer the strongest scholarships, and how to time your application around your current TOPIK level.",
    image: "/images/events/korea-seminar.jpg",
    isPast: false,
    registrationOpen: true,
  },
  {
    id: "ev-2",
    slug: "australia-gte-webinar-oct-2026",
    title: "Australia Visa Webinar: Writing a GTE That Works",
    type: "webinar",
    date: "2026-10-12",
    time: "5:00 PM",
    location: "Online (Zoom)",
    description:
      "Live session breaking down what a strong Genuine Temporary Entrant statement actually needs, including a live Q&A for students with prior refusals.",
    image: "/images/events/gte-webinar.jpg",
    isPast: false,
    registrationOpen: true,
  },
  {
    id: "ev-3",
    slug: "study-abroad-fair-november-2026",
    title: "Kavrepalanchok Study Abroad Fair",
    type: "fair",
    date: "2026-11-08",
    time: "10:00 AM – 4:00 PM",
    location: "Banepa Municipality Hall",
    description:
      "Meet representatives from partner universities across Korea, Japan, and Australia in one place, with on-the-spot counseling sessions available.",
    image: "/images/events/study-fair.jpg",
    isPast: false,
    registrationOpen: false,
  },
  {
    id: "ev-4",
    slug: "japanese-language-workshop-march-2026",
    title: "Japanese Language Foundations Workshop",
    type: "workshop",
    date: "2026-03-14",
    time: "1:00 PM",
    location: "Discovery Pathway Office, Banepa",
    description:
      "An introductory session covering hiragana, katakana, and what to expect from language school interviews for students considering Japan.",
    image: "/images/events/japanese-workshop.jpg",
    isPast: true,
    registrationOpen: false,
  },
  {
    id: "ev-5",
    slug: "ielts-bootcamp-january-2026",
    title: "IELTS Weekend Bootcamp",
    type: "workshop",
    date: "2026-01-24",
    time: "9:00 AM – 3:00 PM",
    location: "Discovery Pathway Office, Banepa",
    description:
      "An intensive weekend covering Writing Task 1 and Task 2 structure ahead of the February intake application deadlines.",
    image: "/images/events/ielts-bootcamp.jpg",
    isPast: true,
    registrationOpen: false,
  },
];
