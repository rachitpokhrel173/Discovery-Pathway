"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import { destinations } from "@/data/destinations";

const intakeOptions = [
  { value: "next-3-months", label: "Within 3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-12-months", label: "6–12 months" },
  { value: "exploring", label: "Just exploring" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        toast.error(json.message ?? "Something went wrong. Please try again.");
        return;
      }

      toast.success(json.message);
      setSubmitted(true);
      reset();
    } catch {
      toast.error("Network error — please check your connection and try again.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-pass border-2 border-dashed border-route/40 bg-route/5 px-6 py-16 text-center">
        <CheckCircle2 size={40} className="text-route" />
        <h3 className="mt-4 font-display text-2xl text-ink">Request received.</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-60">
          We&rsquo;ll reach out within one business day to schedule your free consultation.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-secondary mt-6">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-pass border border-ink/10 bg-paper p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between border-b border-dashed border-ink/15 pb-4">
        <span className="mono-label text-ink-60">Consultation Request</span>
        <span className="mono-label rounded-full bg-brass/15 px-3 py-1 text-brass-dark">Free</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-ink">
            Full Name
          </label>
          <input
            id="fullName"
            {...register("fullName")}
            className="min-h-[44px] w-full rounded-lg border border-ink/15 bg-paper px-4 text-sm focus:border-brass focus:outline-none"
            placeholder="Your full name"
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="min-h-[44px] w-full rounded-lg border border-ink/15 bg-paper px-4 text-sm focus:border-brass focus:outline-none"
            placeholder="you@email.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="min-h-[44px] w-full rounded-lg border border-ink/15 bg-paper px-4 text-sm focus:border-brass focus:outline-none"
            placeholder="98XXXXXXXX"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="destination" className="mb-1.5 block text-sm font-medium text-ink">
            Preferred Destination
          </label>
          <select
            id="destination"
            {...register("destination")}
            defaultValue=""
            className="min-h-[44px] w-full rounded-lg border border-ink/15 bg-paper px-4 text-sm focus:border-brass focus:outline-none"
            aria-invalid={!!errors.destination}
          >
            <option value="" disabled>
              Select a destination
            </option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.flag} {d.name}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
          {errors.destination && <p className="mt-1 text-xs text-red-600">{errors.destination.message}</p>}
        </div>

        <div>
          <label htmlFor="intake" className="mb-1.5 block text-sm font-medium text-ink">
            Study Intake
          </label>
          <select
            id="intake"
            {...register("intake")}
            defaultValue=""
            className="min-h-[44px] w-full rounded-lg border border-ink/15 bg-paper px-4 text-sm focus:border-brass focus:outline-none"
            aria-invalid={!!errors.intake}
          >
            <option value="" disabled>
              Select a timeframe
            </option>
            {intakeOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.intake && <p className="mt-1 text-xs text-red-600">{errors.intake.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
            Message <span className="text-ink-60">(optional)</span>
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-brass focus:outline-none"
            placeholder="Tell us anything relevant — academic background, budget, questions…"
          />
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary mt-6 w-full disabled:opacity-60">
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={16} /> Request Free Consultation
          </>
        )}
      </button>
    </form>
  );
}
