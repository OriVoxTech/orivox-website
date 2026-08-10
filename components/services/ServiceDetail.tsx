import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { servicePages, servicesIndex, type ServiceSlug } from "@/data/services";

export function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const service = servicePages[slug];
  const current = servicesIndex.find((item) => item.slug === slug);
  const related = servicesIndex.filter((item) => item.slug !== slug).slice(0, 3);

  return <main className="service-page">
    <section className={`service-detail-hero service-detail-hero--${slug}`}>
      <div className="service-detail-hero__rings" aria-hidden="true"><i /><i /></div>
      <Container className="service-detail-hero__inner">
        <p className="eyebrow"><span />{current?.number ?? "01"} / {service.title}</p>
        <h1>{service.hero.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
        <div className="service-detail-hero__bottom">
          <p>{service.intro}</p>
          <Image src={service.visual} alt={`${service.title} visual reference`} width={1350} height={1080} priority />
        </div>
      </Container>
    </section>

    <section className="service-overview section"><Container className="service-overview__grid">
      <div className="reveal"><p className="eyebrow"><span />What we do</p><h2>Focused work.<br /><em>Connected thinking.</em></h2><p>{service.intro}</p></div>
      <ul>{service.capabilities.map((item) => <li key={item} className="reveal">{item}</li>)}</ul>
    </Container></section>

    <section className="service-process section"><Container>
      <header className="service-process__head reveal"><p className="eyebrow"><span />Approach</p><h2>How we shape<br />the work.</h2></header>
      <ol>{service.process.map(([title, copy], index) => <li key={title} className="reveal"><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    </Container></section>

    <section className="service-deliverables section"><Container className="service-deliverables__grid">
      <div className="reveal"><p className="eyebrow"><span />Deliverables</p><h2>What can come<br /><em>out of it.</em></h2></div>
      <div>{service.deliverables.map((item, index) => <span key={item} className="reveal">0{index + 1} / {item}</span>)}</div>
    </Container></section>

    <section className="service-fit section"><Container>
      <p className="eyebrow reveal"><span />Where this fits</p>
      <div className="service-fit__track">{["Think", "Design", "Build", "Launch"].map((stage) => <span key={stage} className={service.fit.includes(stage) ? "is-active" : ""}>{stage}</span>)}</div>
    </Container></section>

    <section className="service-related section"><Container>
      <header className="service-related__head reveal"><p className="eyebrow"><span />Keep exploring</p><h2>Related services.</h2></header>
      <div>{related.map((item) => <Link key={item.slug} href={`/services/${item.slug}`} className="reveal"><span>{item.number}</span>{item.title}<i aria-hidden="true">↗</i></Link>)}</div>
      <div className="service-detail-cta reveal"><h2>{service.cta}.</h2><Button href="mailto:hello@orivox.online">{service.cta}</Button></div>
    </Container></section>
  </main>;
}
