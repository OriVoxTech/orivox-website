"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import { servicesIndex } from "@/data/services";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
    <Container className="navbar__inner">
      <Link href="/" aria-label="Orivox home" className="navbar__logo"><Image src="/Orivox Main Logo 1.svg" alt="Orivox" width={1071} height={233} priority /></Link>
      <nav className="navbar__links" aria-label="Main navigation">{navigation.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}</nav>
      <Link href="/#contact" className="navbar__cta">Start a project <span aria-hidden="true">↗</span></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}><span /><span /></button>
    </Container>
    <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
      <nav aria-label="Mobile navigation">{navigation.map((item, index) => <div key={item.label} className={item.label === "Services" ? "mobile-menu__group" : ""}>
        <Link href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}><small>0{index + 1}</small>{item.label}</Link>
        {item.label === "Services" ? <div className="mobile-menu__sub">{servicesIndex.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{service.title}</Link>)}</div> : null}
      </div>)}</nav>
      <a href="mailto:hello@orivox.online" tabIndex={open ? 0 : -1}>hello@orivox.online ↗</a>
    </div>
  </header>;
}
