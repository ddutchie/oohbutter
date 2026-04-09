"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface EnquiryFormProps {
  service: "meal-prep" | "events";
}

type Status = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm({ service }: EnquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  const formId =
    service === "meal-prep"
      ? process.env.NEXT_PUBLIC_FORMSPREE_MEAL_PREP
      : process.env.NEXT_PUBLIC_FORMSPREE_EVENTS;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formId) {
      console.error("Formspree form ID is not set.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#F2D06B] rounded-2xl p-10 text-center">
        <p className="font-[family-name:var(--font-alfa-slab)] text-[#3D4EC6] text-3xl mb-3">
          Thanks!
        </p>
        <p className="font-[family-name:var(--font-advent-pro)] text-[#1a1a1a] text-lg">
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 md:p-10 shadow-sm flex flex-col gap-5"
    >
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <p className="font-[family-name:var(--font-advent-pro)] text-red-700 text-sm">
            Something went wrong — please try again or email us directly on
            Instagram{" "}
            <a
              href="https://instagram.com/ooh.butter"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ooh.butter
            </a>
            .
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="font-[family-name:var(--font-advent-pro)] font-600 text-xs uppercase tracking-widest text-[#1a1a1a]/60">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            required
            placeholder="Jane"
            className="border border-[#D4CFC9] rounded-lg px-4 py-3 font-[family-name:var(--font-advent-pro)] text-sm focus:outline-none focus:border-[#3D4EC6] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-[family-name:var(--font-advent-pro)] font-600 text-xs uppercase tracking-widest text-[#1a1a1a]/60">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            required
            placeholder="Smith"
            className="border border-[#D4CFC9] rounded-lg px-4 py-3 font-[family-name:var(--font-advent-pro)] text-sm focus:outline-none focus:border-[#3D4EC6] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-[family-name:var(--font-advent-pro)] font-600 text-xs uppercase tracking-widest text-[#1a1a1a]/60">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="jane@example.com"
          className="border border-[#D4CFC9] rounded-lg px-4 py-3 font-[family-name:var(--font-advent-pro)] text-sm focus:outline-none focus:border-[#3D4EC6] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-[family-name:var(--font-advent-pro)] font-600 text-xs uppercase tracking-widest text-[#1a1a1a]/60">
          Phone (optional)
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="+1 416 000 0000"
          className="border border-[#D4CFC9] rounded-lg px-4 py-3 font-[family-name:var(--font-advent-pro)] text-sm focus:outline-none focus:border-[#3D4EC6] transition-colors"
        />
      </div>

      {service === "events" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="font-[family-name:var(--font-advent-pro)] font-600 text-xs uppercase tracking-widest text-[#1a1a1a]/60">
              Event Type
            </label>
            <select
              name="eventType"
              required
              defaultValue=""
              className="border border-[#D4CFC9] rounded-lg px-4 py-3 font-[family-name:var(--font-advent-pro)] text-sm focus:outline-none focus:border-[#3D4EC6] transition-colors bg-white"
            >
              <option value="" disabled>
                Select…
              </option>
              <option>Corporate Event</option>
              <option>Private Dining</option>
              <option>Product Launch</option>
              <option>Birthday / Celebration</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-[family-name:var(--font-advent-pro)] font-600 text-xs uppercase tracking-widest text-[#1a1a1a]/60">
              Guest Count
            </label>
            <input
              type="number"
              name="guestCount"
              min="1"
              placeholder="e.g. 40"
              className="border border-[#D4CFC9] rounded-lg px-4 py-3 font-[family-name:var(--font-advent-pro)] text-sm focus:outline-none focus:border-[#3D4EC6] transition-colors"
            />
          </div>
        </div>
      )}

      {service === "meal-prep" && (
        <div className="flex flex-col gap-1.5">
          <label className="font-[family-name:var(--font-advent-pro)] font-600 text-xs uppercase tracking-widest text-[#1a1a1a]/60">
            Package Interest
          </label>
          <select
            name="package"
            required
            defaultValue=""
            className="border border-[#D4CFC9] rounded-lg px-4 py-3 font-[family-name:var(--font-advent-pro)] text-sm focus:outline-none focus:border-[#3D4EC6] transition-colors bg-white"
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Solo (1 person)</option>
            <option>Duo (2 people)</option>
            <option>Family (4 people)</option>
            <option>Custom</option>
          </select>
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label className="font-[family-name:var(--font-advent-pro)] font-600 text-xs uppercase tracking-widest text-[#1a1a1a]/60">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us a bit about what you're looking for…"
          className="border border-[#D4CFC9] rounded-lg px-4 py-3 font-[family-name:var(--font-advent-pro)] text-sm focus:outline-none focus:border-[#3D4EC6] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-[#3D4EC6] text-[#F2D06B] font-[family-name:var(--font-advent-pro)] font-700 uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-[#F2D06B] hover:text-[#3D4EC6] transition-colors self-start disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {status === "submitting" && <Loader2 size={14} className="animate-spin" />}
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
