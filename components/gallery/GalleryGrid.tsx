"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryImages, galleryCategories } from "@/data/gallery";

export default function GalleryGrid() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(
    () => (category === "All" ? galleryImages : galleryImages.filter((g) => g.category === category)),
    [category]
  );

  const activeImage = galleryImages.find((g) => g.id === lightbox);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`min-h-[40px] rounded-full border px-4 text-sm font-medium transition-colors ${
              category === c ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink hover:bg-ink/5"
            }`}
          >
            {c}{" "}
            <span className="ml-1 font-mono text-xs opacity-60">
              {c === "All" ? galleryImages.length : galleryImages.filter((g) => g.category === c).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((img, i) => (
          <motion.button
            key={img.id}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            onClick={() => setLightbox(img.id)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-paper-dim"
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-left text-xs text-paper">{img.caption}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper/20"
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-pass"
            >
              <Image src={activeImage.src} alt={activeImage.caption} fill className="object-cover" />
            </motion.div>
            <p className="absolute bottom-6 text-sm text-paper/80">{activeImage.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
