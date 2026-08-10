import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function AboutHero() {
  return <section className="about-hero">
    <div className="about-hero__rings" aria-hidden="true"><i /><i /><i /></div>
    <Container className="about-hero__inner">
      <p className="eyebrow"><span />About Orivox</p>
      <h1>We build<br />the things<br /><em>businesses become.</em></h1>
      <div className="about-hero__footer">
        <p>Technology, design and strategy brought together to move ambitious ideas forward.</p>
        <Image src="/Orivox Brand Mark Coloured.svg" alt="Orivox brand mark" width={6064} height={5516} priority />
        <span>Technology × Design × Growth</span>
      </div>
    </Container>
  </section>;
}
