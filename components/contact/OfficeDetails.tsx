import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/utils";

export default function OfficeDetails() {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-pass border border-ink/10">
        <iframe
          title="Discovery Pathway office location"
          src="https://www.google.com/maps?q=Banepa,Kavrepalanchok,Nepal&output=embed"
          width="100%"
          height="280"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="space-y-5 rounded-pass border border-ink/10 bg-paper-dim p-6">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="mt-0.5 shrink-0 text-brass-dark" />
          <div>
            <p className="text-sm font-semibold text-ink">Office</p>
            <p className="text-sm text-ink-60">{siteConfig.address}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone size={18} className="mt-0.5 shrink-0 text-brass-dark" />
          <div>
            <p className="text-sm font-semibold text-ink">Phone</p>
            <a href={`tel:${siteConfig.phone}`} className="text-sm text-ink-60 hover:text-brass-dark">
              {siteConfig.phone}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MessageCircle size={18} className="mt-0.5 shrink-0 text-brass-dark" />
          <div>
            <p className="text-sm font-semibold text-ink">WhatsApp</p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-60 hover:text-brass-dark"
            >
              Chat with us directly
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail size={18} className="mt-0.5 shrink-0 text-brass-dark" />
          <div>
            <p className="text-sm font-semibold text-ink">Email</p>
            <a href={`mailto:${siteConfig.email}`} className="text-sm text-ink-60 hover:text-brass-dark">
              {siteConfig.email}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock size={18} className="mt-0.5 shrink-0 text-brass-dark" />
          <div>
            <p className="text-sm font-semibold text-ink">Office Hours</p>
            <p className="text-sm text-ink-60">Sunday – Friday, 10:00 AM – 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
