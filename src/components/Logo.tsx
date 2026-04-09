"use client";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { ooh: "text-2xl", butter: "text-2xl" },
  md: { ooh: "text-4xl", butter: "text-4xl" },
  lg: { ooh: "text-6xl", butter: "text-6xl" },
};

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const oohColor =
    variant === "dark" ? "text-[#3D4EC6]" : "text-[#F2D06B]";
  const butterColor =
    variant === "dark" ? "text-[#3D4EC6]" : "text-[#F2D06B]";

  return (
    <span className="inline-flex items-baseline gap-1 leading-none">
      <span
        className={`font-[family-name:var(--font-advent-pro)] font-700 tracking-widest uppercase ${oohColor} ${sizes[size].ooh}`}
      >
        OOH
      </span>
      <span
        className={`font-[family-name:var(--font-alfa-slab)] ${butterColor} ${sizes[size].butter}`}
      >
        Butter!
      </span>
    </span>
  );
}
