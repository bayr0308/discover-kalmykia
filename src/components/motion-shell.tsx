"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

import { MotionPreference } from "./motion-preference";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MotionShell({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(true);
  useGSAP(
    () => {
      if (!enabled) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from("[data-hero-image]", { scale: 1.065, duration: 2.2 }, 0)
          .fromTo(
            "[data-header-entrance]",
            { y: -16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.07 },
            0.1,
          )
          .from("[data-hero-line]", { yPercent: 105, duration: 1.15, stagger: 0.12 }, 0.15)
          .fromTo(
            "[data-hero-support], [data-hero-action]",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
            0.55,
          );
        gsap.to("[data-hero-media]", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero]",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to("[data-hero-copy]", {
          y: 70,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero]",
            start: "top top",
            end: "bottom 20%",
            scrub: true,
          },
        });
        root.current?.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 32, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 93%", once: true },
            },
          );
        });
        root.current?.querySelectorAll<HTMLElement>("[data-image-reveal]").forEach((el) => {
          const image = el.querySelector("img");
          if (image)
            gsap.from(image, {
              scale: 1.08,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            });
        });
        gsap.from("[data-footer-word]", {
          yPercent: 18,
          scale: 0.96,
          transformOrigin: "left bottom",
          ease: "none",
          scrollTrigger: {
            trigger: "[data-footer]",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [enabled], revertOnUpdate: true },
  );

  return (
    <MotionPreference.Provider value={enabled}>
      <div ref={root} data-motion={enabled ? "on" : "off"}>
        {children}
        <div className="flex flex-col items-start justify-between px-page pt-4 pb-6 text-small text-muted md:flex-row md:items-center md:gap-6 md:pt-6 md:pb-8 wide:mx-auto wide:max-w-[2000px]">
          <button
            className="min-h-11 bg-transparent py-2 text-left text-inherit hover:text-ink"
            type="button"
            aria-pressed={!enabled}
            onClick={() => setEnabled((v) => !v)}
          >
            {enabled ? "Отключить анимацию" : "Включить анимацию"}
          </button>
          <span>Создано для неспешных открытий</span>
        </div>
      </div>
    </MotionPreference.Provider>
  );
}
