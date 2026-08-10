import { Container } from "@/components/ui/Container";

const principles = [
  ["Clarity before complexity", "The best solutions start with understanding the real problem."],
  ["Design is not decoration", "Design shapes how people understand, trust and use a product."],
  ["Technology should move the business", "We build for outcomes, not features for their own sake."],
  ["Quality is a system", "Great work comes from discipline, collaboration and attention to detail."],
  ["Build for what comes next", "Products and brands should be designed to evolve."],
];

export function StoryAndPrinciples() {
  return <>
    <section className="about-story section"><Container>
      <p className="eyebrow reveal"><span />Why Orivox exists</p>
      <div className="about-story__grid">
        <h2 className="reveal">Great ideas need<br /><em>connected thinking.</em></h2>
        <div className="about-story__copy reveal"><p>Great ideas often fail because the people shaping the brand, product, technology and launch are working separately.</p><p>Orivox was created to bring those disciplines together. We help businesses move from idea to execution with one connected team across strategy, design, engineering, branding and growth.</p></div>
      </div>
      <p className="about-story__statement reveal"><span>One idea.</span><span>One partner.</span><span><em>One standard.</em></span></p>
    </Container></section>
    <section className="beliefs section"><Container>
      <header className="beliefs__head reveal"><p className="eyebrow"><span />What we believe</p><h2>Principles behind<br />the work.</h2><p>Clear standards create work that lasts beyond the launch.</p></header>
      <ol className="beliefs__list">{principles.map(([title, copy], index) => <li key={title} className="reveal"><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    </Container></section>
  </>;
}
