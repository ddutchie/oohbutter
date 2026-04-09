import Link from "next/link";
import Image from "next/image";
import basePath from "@/lib/basePath";

const values = [
  {
    title: "Real ingredients",
    body: "We source seasonal, local produce wherever possible. No shortcuts, no shortcuts.",
    color: "bg-[#6D9B7A]",
  },
  {
    title: "Made from scratch",
    body: "Everything is prepared by hand. Every sauce, every marinade, every side.",
    color: "bg-[#3D4EC6]",
  },
  {
    title: "Personal touch",
    body: "As a two-person team, every client gets our full attention — not an account manager.",
    color: "bg-[#C97B62]",
  },
  {
    title: "No fuss",
    body: "Good food doesn't need to be complicated. We keep it honest, delicious and stress-free for you.",
    color: "bg-[#8EB0BA]",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#FAF7F2] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-10 hover:opacity-70 transition-opacity"
          >
            ← Back home
          </Link>
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
            About us
          </p>
          <h1 className="font-[family-name:var(--font-alfa-slab)] text-[#1a1a1a] text-5xl md:text-7xl mb-6 leading-tight max-w-2xl">
            Meet the chefs behind the butter.
          </h1>
          <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/60 text-xl leading-relaxed max-w-xl">
            OohButter is Imke Bekker and Megan Lightfoot — a two-chef team
            cooking real food for real people in Toronto.
          </p>
        </div>
      </section>

      {/* ── Chef profiles ── */}
      <section className="bg-[#F2D06B] py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">

          {/* Imke */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl aspect-[4/5] relative overflow-hidden">
              <Image
                src={`${basePath}/images/imke_portrait.jpg`}
                alt="Imke Bekker — chef and co-founder of OohButter"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
                Co-founder & Chef
              </p>
              <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#3D4EC6] text-4xl md:text-5xl mb-6 leading-tight">
                Imke Bekker
              </h2>
              <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a] text-lg leading-relaxed mb-4">
                Imke brings a bold, unfussy approach to cooking — the kind that
                makes you feel full without feeling heavy. Her food is rooted in
                technique but driven by instinct.
              </p>
              <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/70 text-base leading-relaxed">
                Whether she&apos;s building a weekly meal prep menu or designing
                a dinner party spread, Imke&apos;s goal is always the same: food
                that makes people stop and say something.
              </p>
            </div>
          </div>

          {/* Megan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2">
              <div className="rounded-3xl aspect-[4/5] relative overflow-hidden">
                <Image
                  src={`${basePath}/images/megan_portrait.jpg`}
                  alt="Megan Lightfoot — chef and co-founder of OohButter"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="md:order-1">
              <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
                Co-founder & Chef
              </p>
              <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#3D4EC6] text-4xl md:text-5xl mb-6 leading-tight">
                Megan Lightfoot
              </h2>
              <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a] text-lg leading-relaxed mb-4">
                Megan is equal parts warmth and precision. She has a gift for
                balance — knowing exactly when a dish needs more acid, more
                fat, or just a little more time.
              </p>
              <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/70 text-base leading-relaxed">
                Her background spans intimate private dining to high-volume
                catering, which means she&apos;s just as comfortable feeding 6
                as she is feeding 60.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our story ── */}
      <section className="bg-[#3D4EC6] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#F2D06B]/60 mb-4">
            Our story
          </p>
          <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#F2D06B] text-4xl md:text-5xl mb-8 leading-tight">
            Two chefs, one big idea.
          </h2>
          <p className="font-[family-name:var(--font-advent-pro)] text-white/80 text-lg leading-relaxed mb-6">
            OohButter started the way most good things do — over a meal. Imke
            and Megan had been cooking side by side for years before they
            decided to make it official.
          </p>
          <p className="font-[family-name:var(--font-advent-pro)] text-white/80 text-lg leading-relaxed mb-6">
            The name came naturally. It&apos;s what someone said the first time
            they tasted one of Megan&apos;s sauces. It stuck.
          </p>
          <p className="font-[family-name:var(--font-advent-pro)] text-white/80 text-lg leading-relaxed">
            Today, OohButter serves Toronto with weekly meal prep and bespoke
            event catering. The team is still just the two of them — and
            they&apos;d like to keep it that way.
          </p>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-[#FAF7F2] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
            What we stand for
          </p>
          <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#1a1a1a] text-4xl mb-16">
            Our values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className={`${v.color} rounded-2xl p-8 flex flex-col gap-4`}
              >
                <h3 className="font-[family-name:var(--font-alfa-slab)] text-white text-xl">
                  {v.title}
                </h3>
                <p className="font-[family-name:var(--font-advent-pro)] text-white/80 text-sm leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1a1a1a] py-20 px-6 text-center">
        <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#F2D06B] text-4xl md:text-5xl mb-6">
          Let&apos;s cook together.
        </h2>
        <p className="font-[family-name:var(--font-advent-pro)] text-white/70 text-lg mb-10 max-w-md mx-auto">
          Whether it&apos;s weekly meals or a special event — we&apos;d love to
          hear from you.
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
