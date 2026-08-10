import Image from "next/image";
import { Container } from "@/components/ui/Container";

const disciplines = ["Engineering", "Product", "Design", "Brand", "Growth"];

export function BuiltDifferently() {
  return <section className="different section"><Container>
    <header className="different__head reveal"><p className="eyebrow"><span />Built differently</p><h2>Different disciplines.<br /><em>One standard.</em></h2><p>Strategy, design, engineering and growth work as one team with one goal: creating work worthy of the Orivox name.</p></header>
    <div className="different__visual reveal">
      <div className="different__rings" aria-hidden="true"><i /><i /><i /></div>
      <Image src="/Orivox Brand Mark Coloured.svg" alt="Orivox brand mark" width={6064} height={5516} />
      {disciplines.map((word, index) => <span key={word} className={`different__word different__word--${index + 1}`}>{word}</span>)}
    </div>
  </Container></section>;
}
