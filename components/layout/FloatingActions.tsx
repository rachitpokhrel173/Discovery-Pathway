"use client";

import { MessageCircle, Phone, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/utils";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href="/contact"
        aria-label="Book a free consultation"
        className="hidden h-14 w-14 items-center justify-center rounded-full bg-brass text-paper shadow-panel transition-transform hover:scale-105 sm:flex"
      >
        <CalendarCheck size={22} />
      </a>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-route text-paper shadow-panel transition-transform hover:scale-105"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="Call Discovery Pathway"
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink/10 bg-paper text-ink shadow-panel backdrop-blur transition-transform hover:scale-105"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}
