"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { events } from "@/data/events";

export default function EventsList() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const filtered = events.filter((e) => (tab === "upcoming" ? !e.isPast : e.isPast));

  return (
    <div>
      <div className="mb-10 inline-flex rounded-full border border-ink/15 p-1">
        {(["upcoming", "past"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`min-h-[40px] rounded-full px-5 text-sm font-medium capitalize transition-colors ${
              tab === t ? "bg-ink text-paper" : "text-ink hover:bg-ink/5"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink-60">No {tab} events right now.</p>
      ) : (
        <div className="space-y-5">
          {filtered.map((e) => (
            <div
              key={e.id}
              className={`flex flex-col gap-4 rounded-pass border p-6 sm:flex-row sm:items-center sm:justify-between ${
                e.isPast ? "border-ink/10 bg-paper-dim opacity-70" : "border-brass/40 bg-paper"
              }`}
            >
              <div>
                <span className="mono-label text-brass-dark">{e.type}</span>
                <h3 className="mt-1 text-lg text-ink sm:text-xl">{e.title}</h3>
                <p className="mt-2 max-w-lg text-sm text-ink-60">{e.description}</p>
                <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-ink-60">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {new Date(e.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {e.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} /> {e.location}
                  </span>
                </div>
              </div>
              {!e.isPast && (
                <a
                  href="/contact"
                  className={`btn-secondary shrink-0 ${!e.registrationOpen ? "pointer-events-none opacity-50" : ""}`}
                >
                  {e.registrationOpen ? "Register Interest" : "Registration Opens Soon"}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
