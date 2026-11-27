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
} from 'lucide-react';

function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-ink-900 text-neutral-200 font-sans antialiased">
      <Header onCta={scrollToForm} />
      <main>
        <Hero onCta={scrollToForm} />
        <WhatEstimateIncludes />
        <ProcessSteps />
        <EstimateForm ref={formRef} />
        <FinalCta onCta={scrollToForm} />
      </main>
      <Footer />
    </div>
  );
}

function Header({ onCta }: { onCta: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <Wrench className="h-5 w-5 text-amber-400" strokeWidth={2.5} />
          <span className="text-base font-bold tracking-tight text-white">Northline Collision</span>
        </div>
        <button
          onClick={onCta}
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-white/40 hover:text-white"
        >
          Free Estimate
        </button>
      </div>
    </header>
  );
}

function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36 lg:py-44">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
            Collision Repair Shop
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Collision repair done right,
            <span className="block text-neutral-400">backed by a clear estimate.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
            We inspect the damage, explain what needs fixing, and give you a written breakdown before
            any work begins. Bring it in, and we'll take it from there.
          </p>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              onClick={onCta}
              className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-base font-semibold text-ink-900 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/20"
            >
              Request a Free Estimate
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <p className="text-sm text-neutral-500">No obligation. No cost.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
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

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
          {ESTIMATE_ITEMS.map((item) => (
            <div key={item.title} className="bg-ink-800 p-8 lg:p-10">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10">
                <item.icon className="h-5 w-5 text-amber-400" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-400">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
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

        <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-white/10">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-5 bg-ink-900 p-8 sm:flex-row sm:items-start sm:gap-8 lg:p-10"
            >
              <span className="font-mono text-2xl font-bold text-amber-400/70 sm:text-3xl">
                {step.n}
              </span>
              <div className="max-w-xl">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-400">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-lg font-medium text-neutral-300">
          After that, you decide what you want to do. No obligation.
        </p>
      </div>
    </section>
  );
}

const EstimateForm = forwardRef<HTMLDivElement>((_props, ref) => {
  const [fileName, setFileName] = useState<string | null>(null);

    return (
      <div ref={ref} className="border-t border-white/5 scroll-mt-20">
        <section className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
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

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 space-y-6 rounded-3xl border border-white/10 bg-ink-800 p-6 sm:p-10"
          >
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
                  <p className="text-sm font-medium text-white">
                    {fileName ? fileName : 'Click to upload photos'}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    PNG or JPG. Multiple files accepted.
                  </p>
                </div>
                <input
                  id="photos"
                  type="file"
                  multiple
                  accept="image/png,image/jpeg"
                  className="hidden"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      setFileName(
                        files.length === 1 ? files[0].name : `${files.length} files selected`
                      );
                    }
                  }}
                />
              </label>
            </Field>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-amber-400 px-6 py-4 text-base font-semibold text-ink-900 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Submit Estimate Request
              </button>
              <p className="mt-4 text-center text-sm text-neutral-500">
                We'll follow up within one business day to schedule your inspection.
              </p>
            </div>
          </form>
        </section>
      </div>
    );
  }
);

EstimateForm.displayName = 'EstimateForm';

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
      <label
        htmlFor={htmlFor}
        className="mb-2.5 block text-sm font-medium text-neutral-300"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function FinalCta({ onCta }: { onCta: () => void }) {
  return (
    <section className="border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Start with a free estimate
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
          Bring your vehicle in for an honest inspection and a clear written breakdown. No pressure,
          no cost.
        </p>
        <button
          onClick={onCta}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-base font-semibold text-ink-900 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/20"
        >
          Request a Free Estimate
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Wrench className="h-5 w-5 text-amber-400" strokeWidth={2.5} />
          <span className="text-sm font-bold text-white">Northline Collision</span>
        </div>
        <p className="text-sm text-neutral-500">
          Professional collision repair. Free estimates, every time.
        </p>
      </div>
    </footer>
  );
}

export default App;
