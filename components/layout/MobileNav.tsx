"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/lib/utils";

export default function MobileNav({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm lg:hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-paper shadow-panel"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-5">
          <span className="font-display text-lg text-ink">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-ink/5"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-4">
          {primaryNav.map((item) => (
            <div key={item.label} className="border-b border-ink/10 py-1">
              {item.columns ? (
                <>
                  <button
                    className="flex min-h-[44px] w-full items-center justify-between py-3 text-left text-base font-medium text-ink"
                    onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${openSection === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openSection === item.label && (
                    <div className="pb-3 pl-2">
                      {item.columns.map((col) => (
                        <div key={col.heading} className="mb-3">
                          <p className="mono-label mb-2 text-ink-60">{col.heading}</p>
                          <ul className="space-y-1">
                            {col.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={onClose}
                                  className="block min-h-[44px] py-2 text-sm text-ink/80"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  onClick={onClose}
                  className="flex min-h-[44px] items-center py-3 text-base font-medium text-ink"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="space-y-3 border-t border-ink/10 p-5">
          <Link href="/contact" onClick={onClose} className="btn-primary w-full">
            Book Free Consultation
          </Link>
          <div className="flex gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-secondary flex-1"
            >
              <Phone size={16} /> Call
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
