import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/Container";
import joyPortrait from "@/public/images/founders/joy-ojoma-aruna.png";
import emmanuelPortrait from "@/public/images/founders/emmanuel-damilola-omoladun.png";

const founders: Array<{
  name: string;
  role: string;
  bio: string;
  portrait: StaticImageData;
  portraitPosition?: string;
}> = [
  { name: "Joy Ojoma Aruna", role: "Co-Founder / Software & Product Engineering", bio: "Software and mobile developer with 6+ years of professional experience building digital products and applications.", portrait: joyPortrait, portraitPosition: "center 10%" },
  { name: "Emmanuel Damilola Omoladun", role: "Co-Founder / Creative & Brand Design", bio: "Graphics designer working across visual identity, branding and UI/UX design.", portrait: emmanuelPortrait, portraitPosition: "center 18%" },
];

export function Founders() {
  return <section className="founders section"><Container>
    <header className="founders__head reveal"><p className="eyebrow"><span />The founders</p><h2>Built from both<br />sides of the work.</h2><p>Engineering and creative leadership, connected from the beginning.</p></header>
    <div className="founders__grid">{founders.map((founder, index) => <article key={founder.name} className="founder reveal">
      <div className="founder__portrait">
        <Image
          src={founder.portrait}
          alt={`Portrait of ${founder.name}`}
          fill
          sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 320px, 310px"
          quality={95}
          placeholder="blur"
          style={{ objectPosition: founder.portraitPosition }}
        />
      </div>
      <div className="founder__info"><span>0{index + 1}</span><h3>{founder.name}</h3><p className="founder__role">{founder.role}</p><p>{founder.bio}</p></div>
    </article>)}</div>
  </Container></section>;
}
