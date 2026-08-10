import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutCTA() {
  return <section className="about-cta section" id="contact">
    <div className="about-cta__ring" aria-hidden="true" />
    <Image src="/Orivox 3D.png" alt="" width={1254} height={1254} className="about-cta__mark" aria-hidden="true" />
    <Container className="about-cta__inner">
      <p className="eyebrow reveal"><span />A good place to begin</p>
      <h2 className="reveal">Ready to build<br /><em>what’s next?</em></h2>
      <div className="about-cta__footer reveal"><p>Bring us the idea. We’ll help shape what it can become.</p><div><Button href="mailto:hello@orivox.online">Start a project</Button><a href="mailto:hello@orivox.online">hello@orivox.online</a></div></div>
    </Container>
  </section>;
}
