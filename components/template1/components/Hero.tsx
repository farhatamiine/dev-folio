"use client";

import React, { LegacyRef, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface HeroProps {}

function Hero({}: HeroProps) {
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const triggerRef = useRef<HTMLDivElement>(null);

  function useLetterRefs() {
    const refs = useRef<HTMLSpanElement[]>([]);
    return [
      refs,
      (ref: HTMLSpanElement | null) =>
        ref &&
        (refs as React.MutableRefObject<HTMLSpanElement[]>).current.push(ref),
    ];
  }
  const text =
    "I'm Amine, a passionate software engineer with a knack for building user-friendly and robust web applications.";
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#2A2A2A",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <section className={"p-5 md:p-24 "} id={"about"}>
      <div className={"font-bold max-w-7xl mx-auto reveal"}>
        <div className="w-full" ref={triggerRef}>
          {text.split("").map((word, index) => (
            <span
              key={index}
              className={"reveal-text"}
              ref={(ref) => {
                if (ref) lettersRef.current.push(ref);
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
