"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

type Slide = {
  src: string;
  alt: string;
  caption: string;
  location: string;
};

const slides: Slide[] = [
  {
    src: "/images/slider/slide-1-team.jpg",
    alt: "Discovery Pathway counselling team",
    caption: "Meet the counsellors behind every visa success",
    location: "Discovery Pathway, Banepa",
  },
  {
    src: "/images/slider/slide-2-team.jpg",
    alt: "Discovery Pathway staff at the branch office",
    caption: "747+ visas approved by a team that knows the pathway",
    location: "Discovery Pathway, Banepa",
  },
  {
    src: "/images/slider/slide-3-korea.jpg",
    alt: "Pre-departure certificate ceremony for Korea-bound students",
    caption: "Pre-departure send-off for our Japan, Korea-bound batch",
    location: "Pre-Departure Session, Nepal",
  },
  {
    src: "/images/slider/slide-4-japan.jpg",
    alt: "Study in Japan branding at Discovery Pathway",
    caption: "Guiding students toward Japan, the USA, the UK and beyond",
    location: "Discovery Pathway Branch",
  },
  {
    src: "/images/slider/slide-5-korea.jpg",
    alt: "Students holding pre-departure certificates outdoors",
    caption: "Another batch, certificates in hand, ready to fly",
    location: "Pre-Departure Session, Nepal",
  },
  {
    src: "/images/slider/slide-6-korea.jpg",
    alt: "Students arriving at Incheon International Airport, Korea",
    caption: "Landed. Our students touching down in South Korea",
    location: "Incheon International Airport, Korea",
  },
];

const AUTOPLAY_MS = 5000;

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section
      aria-label="Discovery Pathway highlights"
      className="relative bg-ink py-16 sm:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="mono-label text-paper/60">In the field</span>
            <h2 className="mt-2 text-3xl text-paper sm:text-4xl">
              Moments from the pathway
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper transition hover:border-brass hover:text-brass-light"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper transition hover:border-brass hover:text-brass-light"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-pass shadow-panel">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={slide.src} className="relative w-full shrink-0">
                <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <p className="mono-label text-brass-light">{slide.location}</p>
                  <p className="mt-2 max-w-xl text-lg text-paper sm:text-2xl">
                    {slide.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-paper backdrop-blur transition hover:bg-ink/70 sm:hidden"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-paper backdrop-blur transition hover:bg-ink/70 sm:hidden"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-brass" : "w-1.5 bg-paper/30 hover:bg-paper/50"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
