export function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return <header className={`section-heading ${light ? "section-heading--light" : ""}`}><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2></header>;
}
