"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Process() {
  const [active, setActive] = useState(0);
  const list = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const nodes = list.current?.querySelectorAll("li");
    if (!nodes) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
    }), { rootMargin: "-35% 0px -45%", threshold: 0 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <section className="process section" id="about"><Container className="process__grid">
    <div className="process__intro reveal"><p className="eyebrow"><span />How we work</p><h2>From idea<br />to <em>impact.</em></h2><p>A considered process that turns ambiguity into momentum.</p><div className="process__monogram" aria-hidden="true"><i /><i /><i /></div></div>
    <ol className="process__steps" ref={list}>{processSteps.map(([title, description], index) => <li key={title} data-index={index} className={active === index ? "is-active" : ""}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
  </Container></section>;
}
