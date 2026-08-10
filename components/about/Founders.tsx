import { Container } from "@/components/ui/Container";

const founders = [
  { initials: "JA", name: "Joy Ojoma Aruna", role: "Co-Founder / Software & Product Engineering", bio: "Software and mobile developer with 6+ years of professional experience building digital products and applications." },
  { initials: "EO", name: "Emmanuel Damilola Omoladun", role: "Co-Founder / Creative & Brand Design", bio: "Graphics designer working across visual identity, branding and UI/UX design." },
];

export function Founders() {
  return <section className="founders section"><Container>
    <header className="founders__head reveal"><p className="eyebrow"><span />The founders</p><h2>Built from both<br />sides of the work.</h2><p>Engineering and creative leadership, connected from the beginning.</p></header>
    <div className="founders__grid">{founders.map((founder, index) => <article key={founder.name} className="founder reveal">
      <div className="founder__portrait" role="img" aria-label={`Portrait placeholder for ${founder.name}`}><span>{founder.initials}</span><i aria-hidden="true" /><small>Portrait to be added</small></div>
      <div className="founder__info"><span>0{index + 1}</span><h3>{founder.name}</h3><p className="founder__role">{founder.role}</p><p>{founder.bio}</p></div>
    </article>)}</div>
  </Container></section>;
}
