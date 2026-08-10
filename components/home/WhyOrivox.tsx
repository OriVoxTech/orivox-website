import Image from "next/image";
import { Container } from "@/components/ui/Container";

const pillars = [
  ["One team", <>No fragmented vendors.<br />One coordinated partner across every discipline.</>],
  ["End-to-end", <>From the first idea through launch and growth.</>],
  ["Built around your business", <>No one-size-fits-all solutions.</>],
  ["Made to evolve", <>Products and brands designed for what comes next.</>],
];

export function WhyOrivox() {
  return <section className="why section"><Container>
    <div className="why__head reveal"><div><p className="eyebrow"><span />Why Orivox</p><h2>One partner.<br />Every stage.</h2></div><div><p>Great digital products require more than great code.</p><Image src="/Orivox Main Logo Black.svg" alt="Orivox" width={1071} height={233} /></div></div>
    <p className="why__formula reveal">Strategy <span>+</span> Design <span>+</span> Technology <span>+</span> Brand <span>+</span> Growth</p>
    <div className="why__pillars">{pillars.map(([title, text], index) => <article key={title as string} className="reveal"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
  </Container></section>;
}
