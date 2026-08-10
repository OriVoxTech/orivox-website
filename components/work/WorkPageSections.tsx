import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { dominionWell, projects } from "@/data/projects";
import { DominionVisual, ExplorationVisual } from "./WorkVisuals";

export function WorkHero() {
  return <section className="work-page-hero">
    <Container className="work-page-hero__inner">
      <p className="eyebrow"><span />Selected work</p>
      <h1>Work that moves<br /><em>ideas forward.</em></h1>
      <p>A growing collection of digital products, experiences and brands created by Orivox.</p>
    </Container>
  </section>;
}

export function FeaturedWork() {
  return <section className="featured-work section"><Container>
    <div className="featured-work__label reveal"><span>01 / Featured project</span><span>Real Orivox client project</span></div>
    <div className="featured-work__grid">
      <div className="featured-work__copy reveal">
        <p className="eyebrow"><span />{dominionWell.category}</p>
        <h2>{dominionWell.title}</h2>
        <p>{dominionWell.description}</p>
        <ul><li>Healthcare</li><li>Web Experience</li><li>Technology</li></ul>
        <Button href={dominionWell.caseStudyUrl}>View case study</Button>
      </div>
      <div className="reveal"><DominionVisual /></div>
    </div>
    <div className="featured-work__notes">
      {["Challenge", "Approach", "What we built"].map((title, index) => <article key={title} className="reveal">
        <span>0{index + 1}</span><h3>{title}</h3>
        <p>{index === 0 ? "Healthcare discovery and professional connection needed a clearer digital experience." : index === 1 ? "Orivox shaped the product experience, interface and supporting technology around patient clarity." : "A digital healthcare platform experience for discovering services and connecting with medical professionals."}</p>
      </article>)}
    </div>
  </Container></section>;
}

export function Explorations() {
  const concepts = projects.filter((project) => !project.realProject);
  const variants = ["product", "brand", "web"] as const;
  return <section className="explorations section"><Container>
    <header className="explorations__head reveal"><p className="eyebrow"><span />Explorations</p><h2>More ideas are<br /><em>taking shape.</em></h2><p>Orivox is continuously exploring new digital products, identities and experiences. This space will grow as new projects come to life.</p></header>
    <div className="explorations__grid">{concepts.map((project, index) => <article key={project.slug} className="reveal">
      <ExplorationVisual variant={variants[index]} />
      <div><span>Concept exploration</span><h3>{project.title}</h3><p>{project.category}</p></div>
    </article>)}</div>
  </Container></section>;
}

export function WorkCTA() {
  return <section className="work-cta section"><Container>
    <p className="eyebrow reveal"><span />A growing portfolio</p>
    <h2 className="reveal">The first chapter<br /><em>is already in motion.</em></h2>
    <div className="work-cta__bottom reveal"><p>We do not need a huge portfolio to demonstrate quality. We need honest work, presented clearly, and room for what comes next.</p><Button href="mailto:hello@orivox.online">Start a project</Button></div>
  </Container></section>;
}
