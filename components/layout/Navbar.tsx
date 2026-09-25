"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth > 1024) setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const mobileMenu = open ? createPortal(
    <div
      id="mobile-menu"
      className="mobile-menu mobile-menu--open"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      style={{
        display: "block",
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        width: "100vw",
        height: "100dvh",
        minHeight: "100svh",
        overflowY: "auto",
        background: "#000",
        opacity: 1,
        visibility: "visible",
        pointerEvents: "auto",
        transform: "none",
        clipPath: "none",
      }}
    >
      <nav aria-label="Mobile navigation">{navigation.map((item, index) => <div key={item.label} className={item.label === "Services" ? "mobile-menu__group" : ""}>
        <Link href={item.href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{item.label}</Link>
        {item.label === "Services" ? <div className="mobile-menu__sub">{servicesIndex.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setOpen(false)}>{service.title}</Link>)}</div> : null}
      </div>)}</nav>
      <a href="mailto:hello@orivox.online">hello@orivox.online ↗</a>
    </div>,
    document.body,
  ) : null;

  return <>
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${open ? "navbar--menu-open" : ""}`}>
      <Container className="navbar__inner">
        <Link href="/" aria-label="Orivox home" className="navbar__logo"><Image src="/Orivox Main Logo 1.svg" alt="Orivox" width={1071} height={233} priority /></Link>
        <nav className="navbar__links" aria-label="Main navigation">{navigation.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}</nav>
        <Link href="/#contact" className="navbar__cta">Start a project <span aria-hidden="true">↗</span></Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}><span /><span /></button>
      </Container>
    </header>
    {mobileMenu}
  </>;
}
