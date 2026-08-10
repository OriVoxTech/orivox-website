"use client";

import Image from "next/image";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const visual = useRef<HTMLDivElement>(null);
  function moveMark(event: React.PointerEvent<HTMLElement>) {
    if (!visual.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 16;
    const y = (event.clientY / window.innerHeight - 0.5) * 12;
    visual.current.style.setProperty("--parallax-x", `${x}px`);
    visual.current.style.setProperty("--parallax-y", `${y}px`);
  }

  return <section className="hero" id="home" onPointerMove={moveMark}>
    <div className="hero__grid" aria-hidden="true" />
    <div className="hero__rings" aria-hidden="true"><i /><i /><i /></div>
    <Container className="hero__inner">
      <div className="hero__copy">
        <p className="hero__kicker"><span /> Strategy · Design · Technology · Growth</p>
        <h1><span>Building</span><br /><span>what’s <em>next.</em></span></h1>
        <p className="hero__statement">We turn ambitious ideas into products, brands and digital experiences built to move businesses forward.</p>
        <div className="hero__actions"><Button href="#contact">Start a project</Button><Button href="#work" variant="secondary">Explore our work</Button></div>
      </div>
      <div ref={visual} className="hero__visual" aria-label="Orivox three-dimensional brand mark">
        <div className="hero__brand-frame" aria-hidden="true">
          <Image src="/Orivox Collage.png" alt="" width={1350} height={1080} sizes="34vw" />
          <span>Brand / Product / Technology</span>
        </div>
        <div className="hero__orb" />
        <Image src="/Orivox 3D.png" alt="Sculptural green Orivox brand mark" width={1254} height={1254} priority sizes="(max-width: 768px) 95vw, 56vw" />
        <div className="hero__glass-note" aria-hidden="true"><small>From possibility</small><strong>to product.</strong></div>
      </div>
      <a href="#manifesto" className="scroll-cue"><span>Scroll to explore</span><i aria-hidden="true" /></a>
      <p className="hero__index">Ideas, made real — 2026</p>
    </Container>
  </section>;
}
