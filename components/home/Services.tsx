"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Services() {
  const [active, setActive] = useState(0);
  const visuals = [
    { src: "/Orivox Collage.png", alt: "Orivox product and brand experience collage" },
    { src: "/Signage design.png", alt: "Orivox three-dimensional brand signage design" },
    { src: "/IG Stories.png", alt: "Orivox mobile story interface designs" },
    { src: "/Orivox Flyer 2.png", alt: "Orivox brand campaign flyer" },
    { src: "/IG Posts.png", alt: "Orivox social campaign post designs" },
    { src: "/Orivox Collage.png", alt: "Orivox technology and digital experience collage" },
  ];
  return <section className="capabilities section" id="services"><Container>
    <header className="capabilities__head reveal">
      <p className="eyebrow"><span />Capabilities</p>
      <h2>One team.<br /><em>Every discipline.</em></h2>
      <div><p>Everything you need to build what’s next.</p><span>Strategy, creativity and technology working as one.</span></div>
    </header>
    <div className="capabilities__system">
      <div className="capabilities__list" role="tablist" aria-label="Orivox capabilities">
        {services.map((service, index) => <button key={service.title} role="tab" id={`capability-tab-${index}`} aria-selected={active === index} aria-controls={`capability-panel-${index}`} onClick={() => setActive(index)} onPointerEnter={() => setActive(index)}>
          <span>0{index + 1}</span><strong>{service.title}</strong><i aria-hidden="true">↗</i>
        </button>)}
      </div>
      <div className="capabilities__stage">
        {services.map((service, index) => <article key={service.title} role="tabpanel" id={`capability-panel-${index}`} aria-labelledby={`capability-tab-${index}`} hidden={active !== index}>
          <Image src={visuals[index].src} alt={visuals[index].alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
          <div className="capabilities__scrim" />
          <div className="capabilities__details"><span>Capability / 0{index + 1}</span><p>{service.summary}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </article>)}
      </div>
    </div>
  </Container></section>;
}
