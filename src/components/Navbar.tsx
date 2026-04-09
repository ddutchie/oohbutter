"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "Meal Prep", href: "/meal-prep" },
  { label: "Events & Catering", href: "/events" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#FAF7F2] border-b border-[#D4CFC9] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" aria-label="OohButter home">
          <Logo size="sm" variant="dark" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-advent-pro)] font-600 text-sm uppercase tracking-widest text-[#1a1a1a] hover:text-[#3D4EC6] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/meal-prep#enquire"
            className="bg-[#3D4EC6] text-[#F2D06B] font-[family-name:var(--font-advent-pro)] font-700 text-sm uppercase tracking-widest px-5 py-2 rounded-full hover:bg-[#F2D06B] hover:text-[#3D4EC6] transition-colors"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#FAF7F2] border-t border-[#D4CFC9] px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-advent-pro)] font-600 text-sm uppercase tracking-widest text-[#1a1a1a] hover:text-[#3D4EC6] transition-colors pt-4"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/meal-prep#enquire"
            onClick={() => setOpen(false)}
            className="bg-[#3D4EC6] text-[#F2D06B] font-[family-name:var(--font-advent-pro)] font-700 text-sm uppercase tracking-widest px-5 py-3 rounded-full text-center hover:bg-[#F2D06B] hover:text-[#3D4EC6] transition-colors"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
