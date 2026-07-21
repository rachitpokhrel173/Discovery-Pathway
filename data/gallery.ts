export interface GalleryImage {
  id: string;
  category: "Team" | "Student Flights" | "University Visits" | "Events" | "Office";
  src: string;
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "Team", src: "/images/gallery/team-1.jpg", caption: "The Discovery Pathway team at our Banepa office" },
  { id: "g2", category: "Team", src: "/images/gallery/team-2.jpg", caption: "Counselors reviewing visa applications" },
  { id: "g3", category: "Team", src: "/images/gallery/team-3.jpg", caption: "IELTS class in session" },
  { id: "g4", category: "Student Flights", src: "/images/gallery/flight-1.jpg", caption: "Send-off for students departing to South Korea" },
  { id: "g5", category: "Student Flights", src: "/images/gallery/flight-2.jpg", caption: "Tribhuvan International Airport departure" },
  { id: "g6", category: "Student Flights", src: "/images/gallery/flight-3.jpg", caption: "Students bound for Australia with their visas" },
  { id: "g7", category: "University Visits", src: "/images/gallery/university-1.jpg", caption: "Partner university representative visit" },
  { id: "g8", category: "University Visits", src: "/images/gallery/university-2.jpg", caption: "Campus tour briefing session" },
  { id: "g9", category: "Events", src: "/images/gallery/event-1.jpg", caption: "Study abroad seminar in Banepa" },
  { id: "g10", category: "Events", src: "/images/gallery/event-2.jpg", caption: "TOPIK preparation workshop" },
  { id: "g11", category: "Events", src: "/images/gallery/event-3.jpg", caption: "Education fair booth" },
  { id: "g12", category: "Office", src: "/images/gallery/office-1.jpg", caption: "Reception area at Discovery Pathway" },
  { id: "g13", category: "Office", src: "/images/gallery/office-2.jpg", caption: "Consultation room" },
  { id: "g14", category: "Office", src: "/images/gallery/office-3.jpg", caption: "Document processing desk" },
];

export const galleryCategories = ["All", "Team", "Student Flights", "University Visits", "Events", "Office"] as const;
