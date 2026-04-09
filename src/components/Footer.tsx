import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#3D4EC6] text-[#F2D06B]">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Logo size="md" variant="light" />
          <p className="font-[family-name:var(--font-advent-pro)] text-[#F2D06B]/80 text-sm leading-relaxed max-w-xs">
            Two chefs. Real food. Made with love and a whole lot of butter.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-xs text-[#F2D06B]/60 mb-2">
            Navigate
          </h3>
          {[
            { label: "Home", href: "/" },
            { label: "Meal Prep", href: "/meal-prep" },
            { label: "Events & Catering", href: "/events" },
            { label: "About", href: "/about" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-advent-pro)] font-500 text-sm hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-xs text-[#F2D06B]/60 mb-2">
            Say Hello
          </h3>
          <a
            href="https://instagram.com/ooh.butter"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-advent-pro)] font-500 text-sm hover:text-white transition-colors"
          >
            @ooh.butter
          </a>
          <p className="font-[family-name:var(--font-advent-pro)] text-[#F2D06B]/80 text-sm">
            Toronto, Canada
          </p>
        </div>
      </div>

      <div className="border-t border-[#F2D06B]/20">
        <p className="max-w-6xl mx-auto px-6 py-4 text-center font-[family-name:var(--font-advent-pro)] text-xs text-[#F2D06B]/50">
          © {new Date().getFullYear()} OohButter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
