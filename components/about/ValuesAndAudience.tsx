import { Container } from "@/components/ui/Container";

const values = [
  ["Excellence", "We hold the details and the whole experience to the same high standard."],
  ["Innovation", "We look for better ways to solve meaningful problems."],
  ["Integrity", "We communicate honestly and make decisions we can stand behind."],
  ["Partnership", "The strongest outcomes come from shared context and close collaboration."],
  ["Simplicity", "We remove friction and make complex things clear."],
  ["Growth", "We design every engagement with progress and evolution in mind."],
];
const audiences = ["Startups", "Growing businesses", "Established companies", "Organizations", "Founders with new ideas"];

export function ValuesAndAudience() {
  return <>
    <section className="about-values section"><Container>
      <div className="about-values__intro reveal"><p className="eyebrow"><span />What guides us</p><h2>Values made<br />visible in the work.</h2></div>
      <div className="about-values__list">{values.map(([name, text], index) => <article key={name} className="reveal"><span>0{index + 1}</span><h3>{name}</h3><p>{text}</p></article>)}</div>
    </Container></section>
    <section className="audience section"><Container className="audience__grid">
      <div className="reveal"><p className="eyebrow"><span />Who we work with</p><h2>Built for<br /><em>ambitious teams.</em></h2><p>Orivox supports new products and existing businesses navigating change, growth and digital transformation.</p></div>
      <ul>{audiences.map((audience, index) => <li key={audience} className="reveal"><span>0{index + 1}</span>{audience}<i aria-hidden="true">↗</i></li>)}</ul>
    </Container></section>
  </>;
}
