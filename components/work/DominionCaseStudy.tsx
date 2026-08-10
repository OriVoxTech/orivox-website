import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { dominionWell } from "@/data/projects";
import { DominionVisual } from "./WorkVisuals";

export function DominionCaseStudy() {
  return <main className="case-study">
    <section className="case-hero"><Container>
      <p className="eyebrow"><span />Dominion Well</p>
      <h1>Designing a clearer digital experience for healthcare.</h1>
      <div className="case-hero__meta"><span>{dominionWell.category}</span><span>{dominionWell.type}</span></div>
      <DominionVisual />
    </Container></section>
    <section className="case-sections section"><Container>
      {[
        ["The challenge", "Dominion Well needed a modern digital healthcare platform experience that made it easier for patients to discover healthcare services and connect with medical professionals."],
        ["The approach", "The work focused on shaping a clearer digital experience, organizing healthcare information and supporting the interaction between patients and medical professionals."],
        ["The experience", "The experience centers on service discovery, professional connection and a more confident path through healthcare information."],
        ["The technology", "The project involved the design and development of the digital experience and supporting technology. No specific implementation stack is listed here because the confirming project codebase is not present in this website repository."],
        ["The result", "Orivox delivered the digital healthcare platform experience and supporting technology foundation for Dominion Well."],
      ].map(([title, copy], index) => <article key={title} className="reveal"><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p></article>)}
    </Container></section>
    <section className="case-next section"><Container>
      <h2 className="reveal">A platform built for clearer access.</h2>
      <Button href="/work">Back to work</Button>
    </Container></section>
  </main>;
}
