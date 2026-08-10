import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { dominionWell, projects } from "@/data/projects";
import { DominionVisual, ExplorationVisual } from "./WorkVisuals";

export function WorkHero() {
  return <section className="work-page-hero section">
    <Container className="work-page-hero__inner">
      <p className="eyebrow"><span />Selected work</p>
      <h1>Thoughtful work.<br /><em>Built with intent.</em></h1>
      <p>We keep the portfolio focused on the work that best reflects our standards, clarity and product thinking.</p>
    </Container>
  </section>;
}

export function FeaturedWork() {
  return <section className="featured-work section"><Container>
    <div className="featured-work__label reveal"><span>01 / Featured project</span><span>Real client work</span></div>
    <div className="featured-work__grid">
      <div className="featured-work__copy reveal">
        <p className="eyebrow"><span />{dominionWell.category}</p>
        <h2>{dominionWell.title}</h2>
        <p className="featured-work__description">{dominionWell.description}</p>
        <ul><li>Healthcare</li><li>Web Experience</li><li>Technology</li></ul>
        <Button href={dominionWell.caseStudyUrl}>Visit Dominion Well</Button>
      </div>
      <div className="reveal"><DominionVisual /></div>
    </div>
    <div className="featured-work__notes reveal">
      {[
        ["Product clarity", "Healthcare discovery needs calm structure, credible hierarchy and a clearer path from interest to action."],
        ["Experience design", "The interface is shaped to feel trustworthy, intuitive and easy to navigate across the patient journey."],
        ["Brand confidence", "A premium digital presence helps healthcare services feel more established, accessible and worth engaging with."],
      ].map(([title, copy], index) => <article key={title}>
        <span>0{index + 1}</span>
        <h3>{title}</h3>
        <p>{copy}</p>
      </article>)}
    </div>
  </Container></section>;
}

export function Explorations() {
  const concepts = projects.filter((project) => !project.realProject);
  const variants = ["product", "brand", "web"] as const;
  return <section className="explorations section"><Container>
    <header className="explorations__head reveal">
      <p className="eyebrow"><span />Explorations</p>
      <h2>More ideas are<br /><em>taking shape.</em></h2>
      <p>Orivox is continuously exploring new digital products, identities and experiences. This space will grow as new projects come to life.</p>
    </header>
    <div className="explorations__grid">{concepts.map((project, index) => <article key={project.slug} className="reveal">
      <ExplorationVisual variant={variants[index]} />
      <div><span>Concept exploration</span><h3>{project.title}</h3><p>{project.category}</p></div>
    </article>)}</div>
  </Container></section>;
}

export function WorkCTA() {
  return <section className="work-cta section"><Container>
    <p className="eyebrow reveal"><span />A curated portfolio</p>
    <h2 className="reveal">We do not need a huge portfolio<br /><em>to demonstrate quality.</em></h2>
    <div className="work-cta__bottom reveal"><p>Orivox is building a portfolio with care — curating the work that reflects the standard, ambition and clarity we bring to digital products and experiences.</p><Button href="mailto:hello@orivox.online">Start a project</Button></div>
  </Container></section>;
}
