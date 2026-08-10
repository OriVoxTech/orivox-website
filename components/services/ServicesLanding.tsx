import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { serviceStages, servicesIndex } from "@/data/services";

export function ServicesHero() {
  return <section className="services-hero">
    <div className="services-hero__rings" aria-hidden="true"><i /><i /><i /></div>
    <Container className="services-hero__inner">
      <p className="eyebrow"><span />What we do</p>
      <h1>From idea<br /><em>to what&apos;s next.</em></h1>
      <div className="services-hero__bottom">
        <p>We bring strategy, design, technology and creative thinking together to build digital products, brands and experiences that move businesses forward.</p>
        <div><Button href="/#contact">Start a project</Button><Button href="/#work" variant="secondary">View our work</Button></div>
      </div>
    </Container>
  </section>;
}

export function ServicesApproach() {
  return <section className="services-approach section"><Container>
    <div className="services-approach__head reveal">
      <p className="eyebrow"><span />The Orivox approach</p>
      <h2>One partner.<br /><em>Every stage.</em></h2>
    </div>
    <ol className="services-timeline">{serviceStages.map(([title, copy], index) => <li key={title} className="reveal">
      <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
    </li>)}</ol>
  </Container></section>;
}

export function ServicesDirectory() {
  return <section className="services-directory section"><Container>
    <header className="services-directory__head reveal"><p className="eyebrow"><span />Services</p><h2>What we build.</h2></header>
    <div className="services-directory__grid">{servicesIndex.map((service, index) => <article key={service.slug} className={`service-row service-row--${index % 3} reveal`}>
      <div className="service-row__number">{service.number}</div>
      <div>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <Link href={`/services/${service.slug}`}>{service.cta} <span aria-hidden="true">↗</span></Link>
    </article>)}</div>
  </Container></section>;
}

export function ServicesEntryPoints() {
  const stages = [
    ["I have an idea", "You have a concept and need help turning it into something real."],
    ["I need a brand", "You have a business but need a stronger identity and presence."],
    ["I need to build", "You know what you need and need the design and engineering team to make it happen."],
    ["I need to grow", "You already have a product or brand and need creative, technology or marketing support."],
  ];
  return <section className="entry-points section"><Container>
    <div className="entry-points__intro reveal"><p className="eyebrow"><span />How we can work with you</p><h2>Come to us<br /><em>at any stage.</em></h2></div>
    <div className="entry-points__list">{stages.map(([title, copy], index) => <article key={title} className="reveal"><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
  </Container></section>;
}

export function ServicesEngagement() {
  const types = [
    ["Design only", "Branding, UI/UX or creative design."],
    ["Design + development", "Product design combined with engineering."],
    ["End-to-end", "Strategy -> design -> development -> launch."],
    ["Ongoing partnership", "Continuous product, technology, creative or marketing support."],
  ];
  return <section className="service-engagement section"><Container className="service-engagement__grid">
    <div className="reveal"><p className="eyebrow"><span />Engagement</p><h2>Built around<br /><em>the problem.</em></h2><p>Projects can involve one discipline or several. The shape of the work depends on what the business actually needs.</p></div>
    <div>{types.map(([title, copy]) => <article key={title} className="reveal"><h3>{title}</h3><p>{copy}</p></article>)}</div>
  </Container></section>;
}

export function ServicesCTA() {
  return <section className="services-final section">
    <Image src="/Orivox 3D.png" alt="" width={1254} height={1254} aria-hidden="true" />
    <Container>
      <p className="eyebrow reveal"><span />Start here</p>
      <h2 className="reveal">Have something<br /><em>worth building?</em></h2>
      <div className="services-final__bottom reveal"><p>Tell us what you&apos;re working on. We&apos;ll help figure out what comes next.</p><div><Button href="mailto:hello@orivox.online">Start a project</Button><a href="mailto:hello@orivox.online">hello@orivox.online</a></div></div>
    </Container>
  </section>;
}
