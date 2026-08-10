import Image from "next/image";
import { Container } from "@/components/ui/Container";

const disciplines = ["Engineering", "Design", "Strategy", "Brand", "Growth"];

export function Collaboration() {
  return <section className="collaboration section"><Container>
    <div className="collaboration__head reveal"><p className="eyebrow"><span />How we work together</p><h2>Different skills.<br /><em>One point of view.</em></h2><div><p>Technology and design are not separate departments at Orivox.</p><p>They influence each other from the beginning. That means products are technically sound, coherent, usable, memorable and ready to grow.</p></div></div>
    <div className="collaboration__visual reveal">
      <div className="collaboration__orbit" aria-hidden="true"><i /><i /><i /></div>
      <Image src="/Orivox Brand Mark Coloured.svg" alt="Orivox brand mark at the intersection of the company disciplines" width={6064} height={5516} />
      {disciplines.map((item, index) => <span className={`collaboration__word collaboration__word--${index + 1}`} key={item}>{item}</span>)}
    </div>
  </Container></section>;
}
