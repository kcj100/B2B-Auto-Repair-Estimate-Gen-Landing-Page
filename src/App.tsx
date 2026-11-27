import { useState, useRef, forwardRef } from 'react';
import {
  Wrench,
  ClipboardCheck,
  ShieldCheck,
  FileText,
  Phone,
  Mail,
  User,
  Car,
  ArrowDown,
  Upload,
  X,
  CheckCircle2,
  Clock,
  ShieldHalf,
  BadgeCheck,
  MapPin,
} from 'lucide-react';
import { Reveal } from './components/Reveal';
import { SampleEstimateCard } from './components/SampleEstimateCard';

function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen bg-ink-900 text-neutral-200 font-sans antialiased">
      {/* Global grain overlay */}
      <div
        aria-hidden="true"
        className="bg-noise pointer-events-none fixed inset-0 z-40 opacity-[0.035]"
      />
      <Header onCta={scrollToForm} />
      <main>
        <Hero onCta={scrollToForm} />
        <TrustBar />
        <WhatEstimateIncludes />
        <ProcessSteps />
        <EstimateForm ref={formRef} />
        <FinalCta onCta={scrollToForm} />
      </main>
      <Footer />
    </div>
  );
}

/* ─────────────────────────── Header ─────────────────────────── */

function Header({ onCta }: { onCta: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <Wrench className="h-5 w-5 text-amber-400" strokeWidth={2.5} />
          <span className="text-base font-bold tracking-tight text-white">Northline Collision</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+15551234567"
            className="hidden items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white sm:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            (555) 123-4567
          </a>
          <button
            onClick={onCta}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-neutral-200 transition-all hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
          >
            Free Estimate
          </button>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative overflow-hidden">
      {/* Hero photo with layered scrims */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src="/images/hero-shop.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-20 grayscale-[15%]"
        />
        {/* Horizontal scrim: dark left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/90 to-ink-900/40" />
        {/* Vertical edge fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 via-transparent to-ink-900/80" />
      </div>

      {/* Atmospheric layer: grid + glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid-dark mask-radial-fade absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[760px] -translate-x-1/2 animate-ambient-drift rounded-full bg-amber-500/[0.07] blur-[120px]" />
        <div className="absolute top-16 -left-24 h-[360px] w-[500px] rounded-full bg-amber-400/[0.04] blur-[110px]" />
        <div className="absolute top-24 -right-24 h-[340px] w-[440px] rounded-full bg-white/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36 lg:py-44">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <div className="max-w-xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
              Collision Repair Shop
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Collision repair done right,
              <span className="block text-neutral-400">backed by a clear estimate.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
              We inspect the damage, explain what needs fixing, and give you a written breakdown
              before any work begins. Bring it in, and we'll take it from there.
            </p>
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                onClick={onCta}
                className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-base font-semibold text-ink-900 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
              >
                Request a Free Estimate
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
              <p className="text-sm text-neutral-500">No obligation. No cost.</p>
            </div>
          </div>

          {/* Sample estimate card — right column desktop, hidden on mobile */}
          <div className="hidden lg:block">
            <SampleEstimateCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Trust Bar ─────────────────────────── */

const TRUST_ITEMS = [
  { icon: Clock, label: 'Reply within 1 business day' },
  { icon: ShieldHalf, label: 'Direct insurance coordination' },
  { icon: BadgeCheck, label: '12-month workmanship warranty' },
  { icon: MapPin, label: 'Springfield, MA · Serving Western MA' },
] as const;

function TrustBar() {
  return (
    <div className="border-y border-white/5 bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-between">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm text-neutral-400">
              <Icon className="h-4 w-4 shrink-0 text-amber-400/80" strokeWidth={2} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─────────────────────────── What Estimate Includes ─────────────────────────── */

const ESTIMATE_ITEMS = [
  {
    icon: ClipboardCheck,
    title: 'Physical vehicle inspection',
    body: 'We look over the vehicle in person at the shop to understand the full scope of the damage.',
  },
  {
    icon: ShieldCheck,
    title: 'Visible and structural assessment',
    body: 'Beyond surface dents, we check for structural and safety-related damage that may not be obvious.',
  },
  {
    icon: Wrench,
    title: 'Repair review and reasoning',
    body: 'We walk you through what repairs are needed and why each one matters for a proper fix.',
  },
  {
    icon: FileText,
    title: 'Written breakdown of the work',
    body: 'You receive a clear, itemized summary of the work involved so there are no surprises later.',
  },
];

function WhatEstimateIncludes() {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.03] blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
              The Estimate
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              What the free estimate includes
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-400">
              Every estimate is a real inspection, not a guess. Here is exactly what happens when you
              bring your vehicle in.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
          {ESTIMATE_ITEMS.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 60}>
              <div className="h-full bg-ink-800 p-8 transition-colors hover:bg-ink-700/60 lg:p-10">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 transition-colors hover:bg-amber-400/20">
                  <item.icon className="h-5 w-5 text-amber-400" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-400">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Process Steps ─────────────────────────── */

const STEPS = [
  {
    n: '01',
    title: 'You submit the estimate request',
    body: 'Fill out the form below with your contact details, vehicle information, and a short description of the damage. Photos help but are optional.',
  },
  {
    n: '02',
    title: 'We schedule a shop inspection',
    body: 'We reach out within one business day to set up an in-person inspection appointment at a time that works for your schedule.',
  },
  {
    n: '03',
    title: 'We walk you through the estimate',
    body: 'At the shop, we review the written estimate with you in plain language. If insurance is involved, we coordinate directly with your provider.',
  },
];

function ProcessSteps() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-ink-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-[420px] w-[520px] rounded-full bg-amber-500/[0.03] blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
              The Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              What happens next
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-400">
              Three straightforward steps from request to a written estimate in your hands.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/10">
          {/* Animated connector line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[2.9rem] top-0 hidden h-full w-px bg-gradient-to-b from-amber-400/30 via-amber-400/15 to-transparent sm:block"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 80}>
              <div className="flex flex-col gap-5 border-b border-white/5 bg-ink-900 p-8 last:border-b-0 transition-colors hover:bg-ink-800/50 sm:flex-row sm:items-start sm:gap-8 lg:p-10">
                <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-start sm:gap-0">
                  <span className="font-mono text-2xl font-bold text-amber-400/70 sm:text-3xl">
                    {step.n}
                  </span>
                </div>
                <div className="max-w-xl">
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-400">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-lg font-medium text-neutral-300">
          After that, you decide what you want to do. No obligation.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── Estimate Form ─────────────────────────── */

interface FileChip {
  name: string;
  id: string;
}

const EstimateForm = forwardRef<HTMLDivElement>((_props, ref) => {
  const [files, setFiles] = useState<FileChip[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const newChips: FileChip[] = Array.from(fileList).map((f) => ({
      name: f.name,
      id: `${f.name}-${f.size}-${f.lastModified}`,
    }));
    setFiles((prev) => {
      const existing = new Set(prev.map((c) => c.id));
      return [...prev, ...newChips.filter((c) => !existing.has(c.id))];
    });
  };

  const removeFile = (id: string) => setFiles((prev) => prev.filter((c) => c.id !== id));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={ref} className="relative overflow-hidden border-t border-white/5 scroll-mt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-56 h-[460px] w-[640px] -translate-x-1/2 rounded-full bg-amber-500/[0.04] blur-[130px]"
      />
      <section className="relative mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <Reveal>
          <div className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
              Request Your Estimate
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Request a free estimate
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
              Tell us about your vehicle and the damage. We'll take it from there.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-ink-800/95 shadow-2xl shadow-black/40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent"
          />

          {submitted ? (
            /* ── Confirmation state ── */
            <div className="flex flex-col items-center px-6 py-20 text-center sm:px-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10">
                <CheckCircle2 className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Request received</h3>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-400">
                We'll follow up within one business day to schedule your in-shop inspection. Keep an
                eye on your phone or inbox.
              </p>
              <div className="mt-8 flex flex-col items-center gap-2 text-sm text-neutral-500">
                <div className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-amber-400/60" />
                  <a href="tel:+15551234567" className="transition-colors hover:text-white">
                    (555) 123-4567
                  </a>
                </div>
                <p>or reply to our email to reach us sooner.</p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-10 text-sm text-neutral-500 underline-offset-2 hover:text-neutral-300 hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-10">
              <Field label="Full name" htmlFor="name">
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jordan Avery"
                    className="w-full rounded-xl border border-white/10 bg-ink-900 py-3 pl-10 pr-4 text-base text-white placeholder:text-neutral-600 transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                  />
                </div>
              </Field>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Phone number" htmlFor="phone">
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                      className="w-full rounded-xl border border-white/10 bg-ink-900 py-3 pl-10 pr-4 text-base text-white placeholder:text-neutral-600 transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                    />
                  </div>
                </Field>

                <Field label="Email address" htmlFor="email">
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-white/10 bg-ink-900 py-3 pl-10 pr-4 text-base text-white placeholder:text-neutral-600 transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                    />
                  </div>
                </Field>
              </div>

              <Field label="Vehicle details" htmlFor="vehicle">
                <div className="relative">
                  <Car className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                  <input
                    id="vehicle"
                    type="text"
                    required
                    placeholder="Year, make, model — e.g. 2019 Honda Civic"
                    className="w-full rounded-xl border border-white/10 bg-ink-900 py-3 pl-10 pr-4 text-base text-white placeholder:text-neutral-600 transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                  />
                </div>
              </Field>

              <Field label="Brief description of the damage" htmlFor="damage">
                <textarea
                  id="damage"
                  rows={4}
                  required
                  placeholder="Describe what happened and what you can see — dents, scratches, alignment issues, etc."
                  className="w-full resize-none rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-base text-white placeholder:text-neutral-600 transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                />
              </Field>

              <Field label="Damage photos (optional)" htmlFor="photos">
                <label
                  htmlFor="photos"
                  className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/15 bg-ink-900 px-4 py-8 text-center transition-colors hover:border-amber-400/40 hover:bg-ink-700"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-amber-400/10">
                    <Upload className="h-5 w-5 text-neutral-400 group-hover:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Click to upload photos</p>
                    <p className="mt-1 text-xs text-neutral-500">PNG or JPG. Multiple files accepted.</p>
                  </div>
                  <input
                    ref={fileInputRef}
                    id="photos"
                    type="file"
                    multiple
                    accept="image/png,image/jpeg"
                    className="hidden"
                    onChange={(e) => addFiles(e.target.files)}
                  />
                </label>

                {/* File chips */}
                {files.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {files.map((chip) => (
                      <li
                        key={chip.id}
                        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900 py-1 pl-3 pr-2 text-xs text-neutral-300"
                      >
                        {chip.name}
                        <button
                          type="button"
                          aria-label={`Remove ${chip.name}`}
                          onClick={() => removeFile(chip.id)}
                          className="flex h-4 w-4 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </Field>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-amber-400 px-6 py-4 text-base font-semibold text-ink-900 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
                >
                  Submit Estimate Request
                </button>
                <p className="mt-4 text-center text-sm text-neutral-500">
                  We'll follow up within one business day to schedule your inspection.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
});

EstimateForm.displayName = 'EstimateForm';

/* ─────────────────────────── Field ─────────────────────────── */

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2.5 block text-sm font-medium text-neutral-300">
        {label}
      </label>
      {children}
    </div>
  );
}

/* ─────────────────────────── Final CTA ─────────────────────────── */

function FinalCta({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid-dark mask-radial-center absolute inset-0 opacity-75" />
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.05] blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Start with a free estimate
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            Bring your vehicle in for an honest inspection and a clear written breakdown. No
            pressure, no cost.
          </p>
          <button
            onClick={onCta}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-base font-semibold text-ink-900 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
          >
            Request a Free Estimate
            <ArrowDown className="h-4 w-4" />
          </button>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-1.5 transition-colors hover:text-neutral-300"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400/60" />
              (555) 123-4567
            </a>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-amber-400/60" />
              Springfield, MA
            </span>
            <span aria-hidden="true">·</span>
            <span>Mon–Fri 8am–5pm</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Footer ─────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Wrench className="h-5 w-5 text-amber-400" strokeWidth={2.5} />
            <span className="text-sm font-bold text-white">Northline Collision</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-sm text-neutral-500 sm:items-end">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-1.5 transition-colors hover:text-neutral-300"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400/60" />
              (555) 123-4567
            </a>
            <p className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-amber-400/60" />
              Springfield, MA · Mon–Fri 8am–5pm
            </p>
          </div>
        </div>
        <div className="mt-6 border-t border-white/5 pt-6 text-center text-xs text-neutral-600">
          Professional collision repair. Free estimates, every time.
        </div>
      </div>
    </footer>
  );
}

export default App;
