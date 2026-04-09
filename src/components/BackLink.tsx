import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  href?: string;
  label?: string;
  variant?: "dark" | "light"; // dark = on light bg, light = on dark/coloured bg
}

export default function BackLink({
  href = "/",
  label = "Back home",
  variant = "dark",
}: BackLinkProps) {
  const colours =
    variant === "dark"
      ? "text-[#3D4EC6] hover:text-[#1a1a1a] border-b border-[#D4CFC9]"
      : "text-[#F2D06B] hover:text-white border-b border-[#F2D06B]/20";

  return (
    <div className={`w-full ${colours}`}>
      <div className="max-w-6xl mx-auto px-6 py-3">
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs hover:gap-3 transition-all"
        >
          <ArrowLeft size={12} strokeWidth={2.5} />
          {label}
        </Link>
      </div>
    </div>
  );
}
