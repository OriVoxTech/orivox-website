import { Container } from "@/components/ui/Container";

export function BrandRail() {
  return <section className="brand-rail" aria-label="Our disciplines"><Container><div className="brand-rail__track">{["Strategy", "Design", "Engineering", "Branding", "Growth"].map((word) => <span key={word}>{word}<i aria-hidden="true" /></span>)}</div></Container></section>;
}
