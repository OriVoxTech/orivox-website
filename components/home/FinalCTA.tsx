import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return <section className="final-cta section" id="contact"><Image className="final-cta__mark" src="/Orivox Brand Mark Coloured.svg" alt="" width={6064} height={5516} aria-hidden="true" /><Container className="final-cta__inner">
    <p className="eyebrow reveal"><span />Start something ambitious</p><h2 className="reveal">Have an idea<br />worth <em>building?</em></h2><div className="final-cta__bottom reveal"><p>Tell us what you’re building. We’ll help you take it from possibility to product.</p><div><Button href="mailto:hello@orivox.online">Start a project</Button><a href="mailto:hello@orivox.online">hello@orivox.online</a></div></div>
  </Container></section>;
}
