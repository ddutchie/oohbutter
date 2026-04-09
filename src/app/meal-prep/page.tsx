import EnquiryForm from "@/components/EnquiryForm";
import BackLink from "@/components/BackLink";

const packages = [
  {
    name: "Solo",
    people: "1 person",
    meals: "5 meals / week",
    description:
      "Perfect for busy individuals who want fresh, balanced meals without the hassle.",
    color: "bg-[#BEAF96]",
  },
  {
    name: "Duo",
    people: "2 people",
    meals: "10 meals / week",
    description:
      "Great for couples or housemates. Two sets of everything, made fresh every week.",
    color: "bg-[#6D9B7A]",
    featured: true,
  },
  {
    name: "Family",
    people: "4 people",
    meals: "20 meals / week",
    description:
      "Feed the whole family well. Diverse, kid-friendly options available on request.",
    color: "bg-[#8EB0BA]",
  },
  {
    name: "Custom",
    people: "Any size",
    meals: "You decide",
    description:
      "Have specific dietary needs or a larger household? Let's build something just for you.",
    color: "bg-[#C97B62]",
  },
];

const howItWorks = [
  { step: "01", title: "Choose a package", body: "Pick one of our weekly packages or request a custom plan." },
  { step: "02", title: "Tell us about you", body: "Share any dietary preferences, allergies, or goals." },
  { step: "03", title: "We cook", body: "Imke and Megan prepare everything fresh each week." },
  { step: "04", title: "You enjoy", body: "Collect or receive your meals every week. Open fridge. Eat well." },
];

export default function MealPrepPage() {
  return (
    <>
      <BackLink variant="dark" />

      {/* ── Hero ── */}
      <section className="bg-[#F2D06B] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
            Services
          </p>
          <h1 className="font-[family-name:var(--font-alfa-slab)] text-[#3D4EC6] text-5xl md:text-7xl mb-6 leading-tight max-w-2xl">
            Meal Prep
          </h1>
          <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a] text-xl leading-relaxed max-w-xl">
            Fresh, weekly packages cooked by Imke and Megan — so you can eat
            well without the effort.
          </p>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-[#FAF7F2] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
            The process
          </p>
          <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#1a1a1a] text-4xl mb-16">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="flex flex-col gap-4">
                <span className="font-[family-name:var(--font-alfa-slab)] text-[#3D4EC6] text-5xl opacity-30">
                  {item.step}
                </span>
                <h3 className="font-[family-name:var(--font-advent-pro)] font-700 text-lg text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/60 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#F2D06B] mb-4">
            Packages
          </p>
          <h2 className="font-[family-name:var(--font-alfa-slab)] text-white text-4xl mb-16">
            Pick your plan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`${pkg.color} rounded-2xl p-8 flex flex-col gap-4 ${pkg.featured ? "ring-4 ring-[#F2D06B]" : ""}`}
              >
                {pkg.featured && (
                  <span className="font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-xs bg-[#F2D06B] text-[#3D4EC6] px-3 py-1 rounded-full self-start">
                    Popular
                  </span>
                )}
                <h3 className="font-[family-name:var(--font-alfa-slab)] text-white text-2xl">
                  {pkg.name}
                </h3>
                <div className="flex flex-col gap-1">
                  <span className="font-[family-name:var(--font-advent-pro)] font-600 text-white/80 text-sm">
                    {pkg.people}
                  </span>
                  <span className="font-[family-name:var(--font-advent-pro)] font-600 text-white text-lg">
                    {pkg.meals}
                  </span>
                </div>
                <p className="font-[family-name:var(--font-advent-pro)] text-white/70 text-sm leading-relaxed flex-1">
                  {pkg.description}
                </p>
                <a
                  href="#enquire"
                  className="font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-xs text-white border border-white/40 rounded-full px-4 py-2 text-center hover:bg-white hover:text-[#1a1a1a] transition-colors"
                >
                  Enquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry form ── */}
      <section id="enquire" className="bg-[#FAF7F2] py-24 px-6 scroll-mt-16">
        <div className="max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
            Get started
          </p>
          <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#1a1a1a] text-4xl mb-4">
            Book your meal prep
          </h2>
          <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/60 text-base mb-10">
            Fill in the form and we&apos;ll be in touch within 24 hours to sort
            out the details.
          </p>
          <EnquiryForm service="meal-prep" />
        </div>
      </section>
    </>
  );
}
