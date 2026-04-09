import EnquiryForm from "@/components/EnquiryForm";
import Link from "next/link";
import Image from "next/image";
import basePath from "@/lib/basePath";

const eventTypes = [
  {
    icon: "🏢",
    title: "Corporate Events",
    description:
      "Team lunches, boardroom dinners, company celebrations and product launches. We make your brand look (and taste) good.",
    color: "bg-[#3D4EC6]",
    textColor: "text-white",
  },
  {
    icon: "🕯️",
    title: "Private Dining",
    description:
      "Intimate dinner parties, birthday celebrations and private gatherings. A bespoke menu designed around you and your guests.",
    color: "bg-[#F2D06B]",
    textColor: "text-[#3D4EC6]",
  },
  {
    icon: "🚀",
    title: "Product Launches",
    description:
      "Make a statement. We create food experiences that complement your brand and keep guests talking long after the event.",
    color: "bg-[#6D9B7A]",
    textColor: "text-white",
  },
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend at least 2–3 weeks for smaller events and 4–6 weeks for larger corporate functions, though we'll always try our best for last-minute requests.",
  },
  {
    q: "Do you cater to dietary requirements?",
    a: "Absolutely. We accommodate vegetarian, vegan, gluten-free and most other dietary needs. Just let us know when you enquire.",
  },
  {
    q: "What areas do you cover?",
    a: "We're based in Toronto and typically cater within the greater Toronto area. Speak to us about events further afield.",
  },
  {
    q: "Do you provide staff and equipment?",
    a: "Yes — we can provide serving staff and all the necessary equipment for your event. All the details are confirmed during your consultation.",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#3D4EC6] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#F2D06B] mb-10 hover:opacity-70 transition-opacity"
          >
            ← Back home
          </Link>
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#F2D06B]/60 mb-4">
            Services
          </p>
          <h1 className="font-[family-name:var(--font-alfa-slab)] text-[#F2D06B] text-5xl md:text-7xl mb-6 leading-tight max-w-2xl">
            Events & Catering
          </h1>
          <p className="font-[family-name:var(--font-advent-pro)] text-white/80 text-xl leading-relaxed max-w-xl">
            Corporate lunches, private dinners, product launches. We handle
            every last detail so you can be fully present.
          </p>
        </div>
      </section>

      {/* ── What we cater ── */}
      <section className="bg-[#FAF7F2] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
            Event types
          </p>
          <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#1a1a1a] text-4xl mb-16 max-w-lg leading-tight">
            We cater for every occasion.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((evt) => (
              <div
                key={evt.title}
                className={`${evt.color} rounded-3xl p-10 flex flex-col gap-4`}
              >
                <span className="text-4xl">{evt.icon}</span>
                <h3
                  className={`font-[family-name:var(--font-alfa-slab)] text-2xl ${evt.textColor}`}
                >
                  {evt.title}
                </h3>
                <p
                  className={`font-[family-name:var(--font-advent-pro)] text-sm leading-relaxed ${evt.textColor} opacity-80`}
                >
                  {evt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why OohButter ── */}
      <section className="bg-[#F2D06B] py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
              Why us
            </p>
            <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#3D4EC6] text-4xl mb-8 leading-tight">
              More than just catering.
            </h2>
            <ul className="flex flex-col gap-6">
              {[
                ["Bespoke menus", "Every event gets a menu designed from scratch around your brief, guests and vibe."],
                ["Two-chef team", "Imke and Megan work every event together — no outsourcing, no surprises."],
                ["Honest ingredients", "Seasonal, local produce where possible. Real food, not factory food."],
                ["White-glove service", "From planning to plating, we handle every detail with care."],
              ].map(([title, body]) => (
                <li key={title} className="flex gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#3D4EC6] mt-2 shrink-0" />
                  <div>
                    <p className="font-[family-name:var(--font-advent-pro)] font-700 text-[#3D4EC6] text-base mb-1">
                      {title}
                    </p>
                    <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/70 text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl aspect-[5/6] relative overflow-hidden">
            <Image
              src={`${basePath}/images/events_editorial.jpg`}
              alt="OohButter catering in action"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-[#FAF7F2] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#3D4EC6] mb-4">
            FAQs
          </p>
          <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#1a1a1a] text-4xl mb-12">
            Good to know
          </h2>
          <div className="flex flex-col divide-y divide-[#D4CFC9]">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8">
                <p className="font-[family-name:var(--font-advent-pro)] font-700 text-[#1a1a1a] text-lg mb-3">
                  {faq.q}
                </p>
                <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a]/60 text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry form ── */}
      <section id="enquire" className="bg-[#3D4EC6] py-24 px-6 scroll-mt-16">
        <div className="max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-advent-pro)] font-600 uppercase tracking-widest text-xs text-[#F2D06B]/60 mb-4">
            Get in touch
          </p>
          <h2 className="font-[family-name:var(--font-alfa-slab)] text-[#F2D06B] text-4xl mb-4">
            Tell us about your event
          </h2>
          <p className="font-[family-name:var(--font-advent-pro)] text-white/70 text-base mb-10">
            Send us the details and we&apos;ll come back to you within 24 hours
            with a proposal.
          </p>
          <EnquiryForm service="events" />
        </div>
      </section>
    </>
  );
}
