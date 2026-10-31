"use client";
import { useState } from "react";
import { ArrowDownRight, Menu, X } from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Tushar Garg home">
          <span className="brand-mark">TG</span>
          <span>
            TUSHAR GARG<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {[
            ["About", "about"],
            ["Experience", "experience"],
            ["Projects", "projects"],
            ["Skills", "skills"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-resume" href="/TusharGarg_FullStack_Ai.pdf" download>
            Resume <ArrowDownRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}
