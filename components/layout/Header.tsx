"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ChevronDown, Phone, Search } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { siteConfig, cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import MobileNav from "@/components/layout/MobileNav";
import SearchOverlay from "@/components/layout/SearchOverlay";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[var(--header-height)] bg-paper/90 backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-[0_1px_0_rgba(14,27,43,0.08)]"
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Discovery Pathway — home">
            <Image
              src="/images/brand/logo-full-color.png"
              alt="Discovery Pathway"
              width={352}
              height={80}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={handleLeave}>
            {primaryNav.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => handleEnter(item.label)}>
                <Link
                  href={item.href ?? "#"}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
                >
                  {item.label}
                  {item.columns && <ChevronDown size={14} className={cn("transition-transform", openMenu === item.label && "rotate-180")} />}
                </Link>

                <AnimatePresence>
                  {item.columns && openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full mt-2 w-[640px] -translate-x-1/2 rounded-pass border border-ink/10 bg-paper p-6 shadow-panel"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {item.columns.map((col) => (
                          <div key={col.heading}>
                            <p className="mono-label mb-3 text-ink-60">{col.heading}</p>
                            <ul className="space-y-3">
                              {col.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="group block"
                                  >
                                    <span className="block text-sm font-semibold text-ink group-hover:text-brass-dark">
                                      {link.label}
                                    </span>
                                    {link.description && (
                                      <span className="block text-xs text-ink-60">{link.description}</span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
            >
              <Search size={18} />
            </button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-ink transition-colors hover:bg-ink/5 md:flex"
            >
              <Phone size={16} />
              <span className="mono-label">{siteConfig.phone}</span>
            </a>
            <Link href="/contact" className="btn-primary hidden sm:inline-flex">
              Book Free Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
