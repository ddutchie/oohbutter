import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import basePath from "@/lib/basePath";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#3D4EC6] min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
        {/* Decorative background dots */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #F2D06B 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl">
          <Logo size="lg" variant="light" />
          <p className="font-[family-name:var(--font-advent-pro)] text-[#F2D06B]/90 text-xl md:text-2xl max-w-2xl leading-relaxed">
            Two chefs. Real food. Weekly meal prep and bespoke event catering —
            made with love and a whole lot of butter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/meal-prep"
              className="bg-[#F2D06B] text-[#3D4EC6] font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-white transition-colors"
            >
              Meal Prep
            </Link>
            <Link
              href="/events"
              className="border-2 border-[#F2D06B] text-[#F2D06B] font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-[#F2D06B] hover:text-[#3D4EC6] transition-colors"
            >
              Events & Catering
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-[family-name:var(--font-advent-pro)] text-[#F2D06B]/60 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[#F2D06B]/60"
          >
            <path
              d="M8 3v10M3 8l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[#FAF7F2] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
            What we do
          </p>
          <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#1a1a1a] text-4xl md:text-5xl mb-16 max-w-lg leading-tight">
            Food that works around your life.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Meal Prep card */}
            <Link
              href="/meal-prep"
              className="group block rounded-3xl overflow-hidden bg-[#F2D06B] hover:bg-[#3D4EC6] transition-colors duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={`${basePath}/images/optimised/meal-prep-feature.webp`}
                  alt="OohButter meal prep — fresh weekly packages"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="font-[family-name:var(--font-alfa-slab)] text-[#3D4EC6] group-hover:text-[#F2D06B] text-3xl mb-3 transition-colors">
                  Meal Prep
                </h3>
                <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a] group-hover:text-[#F2D06B]/80 text-base leading-relaxed mb-6 transition-colors">
                  Fresh, nutritious weekly packages tailored to you. No more
                  Sunday stress — just open the fridge and eat well.
                </p>
                <span className="font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-xs text-[#3D4EC6] group-hover:text-[#F2D06B] transition-colors">
                  Explore packages →
                </span>
              </div>
            </Link>

            {/* Events card */}
            <Link
              href="/events"
              className="group block rounded-3xl overflow-hidden bg-[#6D9B7A] hover:bg-[#3D4EC6] transition-colors duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={`${basePath}/images/optimised/events_feature.webp`}
                  alt="OohButter events and catering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="font-[family-name:var(--font-alfa-slab)] text-white group-hover:text-[#F2D06B] text-3xl mb-3 transition-colors">
                  Events & Catering
                </h3>
                <p className="font-[family-name:var(--font-advent-pro)] text-white/80 group-hover:text-[#F2D06B]/80 text-base leading-relaxed mb-6 transition-colors">
                  Corporate lunches, private dinners, product launches. We
                  handle the food so you can focus on the moment.
                </p>
                <span className="font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-xs text-white group-hover:text-[#F2D06B] transition-colors">
                  Learn more →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="bg-[#F2D06B] py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
              The team
            </p>
            <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#3D4EC6] text-4xl md:text-5xl mb-6 leading-tight">
              Imke & Megan
            </h2>
            <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a] text-lg leading-relaxed mb-8 max-w-md">
              We&apos;re Imke Bekker and Megan Lightfoot — two chefs who believe
              food should be delicious, honest, and a little bit indulgent.
              OohButter is our way of sharing that belief with Toronto.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[#3D4EC6] text-[#F2D06B] font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors"
            >
              Meet the chefs
            </Link>
          </div>

          {/* Chef portraits */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl aspect-[3/4] relative overflow-hidden">
              <Image
                src={`${basePath}/images/optimised/imke_portrait.webp`}
                  alt="Imke Bekker — chef and co-founder of OohButter"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-2xl aspect-[3/4] relative overflow-hidden mt-8">
              <Image
                src={`${basePath}/images/optimised/megan_portrait.webp`}
                  alt="Megan Lightfoot — chef and co-founder of OohButter"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="bg-[#1a1a1a] py-20 px-6 text-center">
        <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#F2D06B] text-4xl md:text-5xl mb-6">
          Ready to eat well?
        </h2>
        <p className="font-[family-name:var(--font-advent-pro)] text-white/70 text-lg mb-10 max-w-md mx-auto">
          Whether it&apos;s your weekly meals or your next big event — we&apos;ve
          got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/meal-prep#enquire"
            className="bg-[#F2D06B] text-[#1a1a1a] font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-[#3D4EC6] hover:text-[#F2D06B] transition-colors"
          >
            Book Meal Prep
          </Link>
          <Link
            href="/events#enquire"
            className="border-2 border-[#F2D06B] text-[#F2D06B] font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-[#F2D06B] hover:text-[#1a1a1a] transition-colors"
          >
            Enquire About Events
          </Link>
        </div>
      </section>
    </>
  );
}
