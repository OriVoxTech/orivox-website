import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/data/site";

export function Footer() {
  return <footer className="footer"><Container>
    <div className="footer__top">
      <div><Image src="/Orivox Main Logo White.svg" alt="Orivox" width={1071} height={233} /><p>Building what’s next.</p></div>
      <div><p className="footer__label">Company</p><Link href="/about">About</Link><Link href="/#work">Work</Link><Link href="/#services">Services</Link><Link href="/#contact">Contact</Link></div>
      <div><p className="footer__label">Connect</p>{socialLinks.map((x) => <a key={x.label} href={x.href} aria-label={`${x.label} — link placeholder`}>{x.label}</a>)}</div>
      <div><p className="footer__label">Contact</p><a href="mailto:hello@orivox.online">hello@orivox.online</a><a href="mailto:info@orivox.online">info@orivox.online</a><a href="https://orivox.online">orivox.online</a></div>
    </div>
    <div className="footer__bottom"><p>© {new Date().getFullYear()} Orivox. All rights reserved.</p><div><Link href="#">Privacy</Link><Link href="#">Terms</Link></div></div>
  </Container></footer>;
}
