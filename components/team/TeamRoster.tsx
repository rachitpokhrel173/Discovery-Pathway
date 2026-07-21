"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Facebook } from "lucide-react";
import { team } from "@/data/team";

function Avatar({ name, photo }: { name: string; photo?: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  if (photo && !failed) {
    return (
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-dashed border-brass sm:h-32 sm:w-32">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="128px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-brass bg-paper-dim font-display text-2xl text-brass-dark sm:h-32 sm:w-32 sm:text-3xl">
      {initials}
    </div>
  );
}

export default function TeamRoster() {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {team.map((member, i) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
          className={`flex flex-col gap-6 py-8 sm:items-center sm:gap-10 sm:py-10 ${
            i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
          }`}
        >
          <Avatar name={member.name} photo={member.photo} />
          <div className="flex-1">
            <h3 className="text-xl text-ink sm:text-2xl">{member.name}</h3>
            <p className="mono-label mt-1 text-brass-dark">{member.role}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-60 sm:text-base">
              {member.bio}
            </p>
            <div className="mt-4 flex gap-3">
              {member.whatsapp && (
                
                  <a href={`https://wa.me/${member.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${member.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-60 transition-colors hover:border-route hover:text-route"
                >
                  <MessageCircle size={16} />
                </a>
              )}
              {member.facebook && (
                
                 <a href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on Facebook`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-60 transition-colors hover:border-sky hover:text-sky"
                >
                  <Facebook size={16} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}