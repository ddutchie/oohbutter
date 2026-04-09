import Link from "next/link";
import Image from "next/image";
import basePath from "@/lib/basePath";
import BackLink from "@/components/BackLink";

const values = [
  {
    title: "Real ingredients",
    body: "Seasonal, local produce wherever possible. We know where our food comes from and we think you should too.",
    color: "bg-[#6D9B7A]",
  },
  {
    title: "Made from scratch",
    body: "Every sauce, marinade and side — prepared by hand. Always. No shortcuts, no exceptions.",
    color: "bg-[#3D4EC6]",
  },
  {
    title: "Personal service",
    body: "You deal directly with Imke. No middlemen, no account managers. Just a straight conversation with the person making your food.",
    color: "bg-[#C97B62]",
  },
  {
    title: "Excellence by default",
    body: "From the first enquiry to the last bite, we hold ourselves to a high standard — because you deserve nothing less.",
    color: "bg-[#8EB0BA]",
  },
];

export default function AboutPage() {
  return (
    <>
      <BackLink variant="dark" />

      {/* ── Hero ── */}
      <section className="bg-[#FAF7F2] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
            About us
          </p>
          <h1 className="font-[family-name:var(--font-alfa-slab)] text-[#1a1a1a] text-5xl md:text-7xl mb-6 leading-tight max-w-2xl">
            The people behind the food.
          </h1>
          <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/60 text-xl leading-relaxed max-w-xl">
            OohButter is founded and led by Imke Bekker, with Sous Chef Megan
            Lightfoot bringing it all to life in the kitchen. Small team.
            Big flavour.
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
                src={`${basePath}/images/optimised/imke_portrait.webp`}
                alt="Imke Bekker — founder of OohButter"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
                Founder & Head Chef
              </p>
              <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#3D4EC6] text-4xl md:text-5xl mb-6 leading-tight">
                Imke Bekker
              </h2>
              <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a] text-lg leading-relaxed mb-4">
                Imke&apos;s path to food wasn&apos;t a straight line — and
                that&apos;s exactly what makes her so good at it. With a
                background spanning political science, banking and over seven
                years in hospitality, she brings a sharpness to OohButter that
                goes well beyond the kitchen.
              </p>
              <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/70 text-base leading-relaxed mb-4">
                She has trained chefs, managed teams, designed culinary
                programmes and overseen everything from food costing to event
                coordination. She knows how a kitchen runs, how a business
                runs, and how to make sure clients feel looked after at every
                step.
              </p>
              <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/70 text-base leading-relaxed">
                Her food philosophy is simple: be solutions-focused, lead with
                quality and never cut corners. That applies to the food on your
                plate and the experience around it.
              </p>
            </div>
          </div>

          {/* Megan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2">
              <div className="rounded-3xl aspect-[4/5] relative overflow-hidden">
                <Image
                  src={`${basePath}/images/optimised/megan_portrait.webp`}
                  alt="Megan Lightfoot — Sous Chef at OohButter"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="md:order-1">
              <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
                Sous Chef
              </p>
              <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#3D4EC6] text-4xl md:text-5xl mb-6 leading-tight">
                Megan Lightfoot
              </h2>
              <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a] text-lg leading-relaxed mb-4">
                Megan grew up with food at the centre of everything — and it
                shows. Now studying Culinary Management at George Brown
                Polytechnic, she brings both formal training and a lifelong
                instinct for hospitality to every dish she prepares.
              </p>
              <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/70 text-base leading-relaxed mb-4">
                Her background is impressively varied. From high-volume bistro
                kitchens to life as a flight attendant — where multicultural
                communication and staying calm under pressure are non-negotiable
                — Megan has learned to adapt, perform and elevate the experience
                around her wherever she goes.
              </p>
              <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/70 text-base leading-relaxed">
                She approaches cooking like an art form — curious, precise and
                always looking for ways to make the next dish a little better
                than the last.
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
            and Megan had been cooking side by side before they decided to make
            it official.
          </p>
          <p className="font-[family-name:var(--font-advent-pro)] text-white/80 text-lg leading-relaxed mb-6">
            The name came naturally. It&apos;s what someone said the first time
            they tasted one of Megan&apos;s sauces. It stuck.
          </p>
          <p className="font-[family-name:var(--font-advent-pro)] text-white/80 text-lg leading-relaxed">
            Today, OohButter serves Toronto with weekly meal prep and bespoke
            event catering. The team is small by design — because that&apos;s
            how you keep the quality high and the experience personal.
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
