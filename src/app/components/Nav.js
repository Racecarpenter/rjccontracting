"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Request a Quote", href: "/contact", cta: true },
  ];

  return (
    <>
      <nav>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={link.cta ? "nav-cta" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="hamburger"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={link.cta ? "nav-cta-mobile" : ""}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}