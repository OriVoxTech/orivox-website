import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { dominionWell } from "@/data/projects";
import { DominionVisual } from "./WorkVisuals";

export function DominionCaseStudy() {
  return <main className="case-study">
    <section className="case-hero section"><Container>
      <p className="eyebrow"><span />DOMINION WELL</p>
      <div className="case-hero__meta"><span>Healthcare / Digital Experience</span><span>Web Experience</span></div>
      <h1>Better care begins with the right connection.</h1>
      <p className="case-hero__subtitle">Healthcare, made clearer.</p>
      <DominionVisual />
    </Container></section>
    <section className="case-sections section"><Container>
      {[
        ["The challenge", "Dominion Well needed a digital healthcare experience that reduced friction in the patient journey and created a clearer path to discovery, booking and ongoing care."],
        ["The approach", "The work focused on a calmer product experience: simplifying the journey, clarifying care information and creating a more trusted digital path between patients and doctors."],
        ["The experience", "The interface centers on discovery, appointment booking and a patient dashboard designed to keep care information organised and easy to navigate."],
        ["The technology", "The implementation used the Dominion Well project stack, including Next.js, TypeScript, React, Tailwind CSS, Redux, NestJS and MongoDB."],
        ["The result", "The project delivered a modern healthcare digital experience and supporting technology foundation designed to make care easier to understand and access."],
      ].map(([title, copy], index) => <article key={title} className="reveal"><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p></article>)}
    </Container></section>
    <section className="case-next section"><Container>
      <h2 className="reveal">A simpler path to care.</h2>
      <Button href="/work">Back to work</Button>
    </Container></section>
  </main>;
}
