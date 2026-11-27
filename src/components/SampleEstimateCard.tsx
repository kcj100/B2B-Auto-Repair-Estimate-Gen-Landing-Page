import { CheckCircle2, FileText } from 'lucide-react';

const SAMPLE_LINE_ITEMS = [
  { label: 'Physical & structural frame check', tag: 'Included' },
  { label: 'Rear bumper cover — R&I / refinish', tag: 'Itemized' },
  { label: 'Quarter panel metal & color blend', tag: 'Itemized' },
  { label: 'Safety sensor & alignment review', tag: 'Reviewed' },
] as const;

/**
 * Visualizes a real written collision estimate beside the hero copy.
 */
export function SampleEstimateCard() {
  return (
    <aside
      aria-label="Sample written estimate preview"
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/90 p-6 shadow-2xl shadow-black/50 backdrop-blur-sm transition-colors hover:border-white/20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/35 to-transparent"
      />

      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/10">
            <FileText className="h-4 w-4 text-amber-400" strokeWidth={2} />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
              Written Breakdown
            </p>
            <p className="font-mono text-xs text-neutral-500">REF #NL-2048</p>
          </div>
        </div>
        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-300">
          Sample View
        </span>
      </div>

      <div className="mt-4 rounded-xl border border-white/5 bg-ink-900/70 px-3.5 py-2.5">
        <p className="text-xs text-neutral-500">Inspection Scope</p>
        <p className="mt-0.5 text-sm font-medium text-neutral-200">
          2021 Sedan · Rear Quarter &amp; Bumper Impact
        </p>
      </div>

      <ul className="mt-4 divide-y divide-white/5">
        {SAMPLE_LINE_ITEMS.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-3 py-2.5">
            <span className="flex items-center gap-2 text-sm text-neutral-300">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-amber-400/80" />
              {item.label}
            </span>
            <span className="shrink-0 font-mono text-xs text-neutral-400">{item.tag}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <div>
          <p className="text-xs font-medium text-neutral-300">In-Shop Estimate Fee</p>
          <p className="text-xs text-neutral-500">Insurance coordination included</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-lg font-bold text-amber-400">$0.00</p>
          <p className="text-[11px] text-neutral-500">No obligation</p>
        </div>
      </div>
    </aside>
  );
}
