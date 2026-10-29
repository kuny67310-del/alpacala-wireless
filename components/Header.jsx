"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/bulk-sim", label: "Bulk SIM" },
  { href: "/activation", label: "Activation" },
  { href: "/carriers", label: "Carriers" },
  { href: "/partnership", label: "Partnership" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="siteHeader">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Alpacala Wireless home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-mark" src="/assets/img/logo.svg" alt="Alpacala Wireless logo" />
          <span className="brand-text">
            Alpacala<span className="brand-accent"> Wireless</span>
          </span>
        </Link>

        <nav className={`main-nav${open ? " open" : ""}`} id="mainNav" aria-label="Main navigation">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${isActive(l.href) ? " active" : ""}`}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="btn btn-primary btn-sm">
            Get a Quote
          </Link>
          <button
            className={`nav-toggle${open ? " open" : ""}`}
            id="navToggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
