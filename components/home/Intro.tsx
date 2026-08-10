import Image from "next/image";
import { Container } from "@/components/ui/Container";

const journey = ["Idea", "Strategy", "Identity", "Experience", "Engineering", "Launch", "Growth"];

export function Intro() {
  return <section className="manifesto section" id="manifesto"><Container>
    <p className="eyebrow reveal"><span />What we do</p>
    <div className="manifesto__layout">
      <div className="manifesto__copy reveal">
        <p className="manifesto__index">01 / One connected partner</p>
        <h2>You bring<br />the <em>idea.</em></h2>
        <p>Orivox brings strategy, identity, experience, engineering and growth together—so an ambitious idea can move forward without fragmented teams.</p>
        <p className="manifesto__line">From possibility to something people can see, use and believe in.</p>
      </div>
      <figure className="manifesto__visual reveal">
        <Image src="/Orivox Collage.png" alt="A collage of Orivox brand, digital product and identity applications" width={1350} height={1080} sizes="(max-width: 700px) 100vw, 58vw" />
        <figcaption><span>We build</span><strong>what comes <em>next.</em></strong></figcaption>
      </figure>
    </div>
    <div className="manifesto__journey reveal" aria-label="The Orivox end-to-end journey">{journey.map((step, index) => <span key={step}><small>0{index + 1}</small>{step}<i aria-hidden="true">→</i></span>)}</div>
  </Container><div className="manifesto__arc" aria-hidden="true" /></section>;
}
