import Link from "next/link";
import { projectPlaceholders } from "@/data/site";
import { Container } from "@/components/ui/Container";

function ProductVisual() {
  return <div className="concept-product" aria-hidden="true"><div className="concept-product__copy"><span>Concept 01</span><strong>Wellness,<br />in rhythm.</strong><i /></div><div className="phone phone--one"><div><small>Today</small><b>82</b><p>Daily balance</p><i /></div></div><div className="phone phone--two"><div><small>Your rhythm</small><span /><span /><span /></div></div></div>;
}
function BrandVisual() {
  return <div className="concept-brand" aria-hidden="true"><div className="brand-sheet"><small>FORM / 02</small><b>mōra</b><span>Objects for slower living.</span></div><div className="brand-disc"><i /></div><div className="brand-card"><span>M</span><small>Natural form.<br />Considered function.</small></div></div>;
}
function WebVisual() {
  return <div className="concept-web" aria-hidden="true"><div className="browser"><div className="browser__bar"><i /><i /><i /><span /></div><div className="browser__body"><small>ATLAS / DIGITAL INFRASTRUCTURE</small><strong>Systems that<br />move the world.</strong><span>Explore the network ↗</span><div className="browser__orb" /></div></div></div>;
}

export function SelectedWork() {
  return <section className="work section" id="work"><Container>
    <header className="work__head reveal"><p className="eyebrow"><span />Concept laboratory</p><h2>Built with<br /><em>purpose.</em></h2><div className="work__disclaimer"><strong>Independent concept studies</strong><p>These explorations demonstrate Orivox’s design approach. They are not client work or published case studies.</p></div></header>
    <div className="projects">{projectPlaceholders.map((project, index) => <article key={project.number} className={`project project--${project.tone} ${index === 0 ? "project--wide" : ""} reveal`}>
      <div className="project__visual">{index === 0 ? <ProductVisual /> : index === 1 ? <BrandVisual /> : <WebVisual />}<p className="project__concept-label">Concept study</p></div>
      <div className="project__meta"><div><p>{project.title}</p><span>{project.format}</span></div><span aria-hidden="true">↗</span></div>
    </article>)}</div>
    <Link href="/work" className="text-link">View all work <span aria-hidden="true">↗</span></Link>
  </Container></section>;
}
