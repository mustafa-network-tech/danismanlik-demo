import { demo } from "@/lib/site-config";

/** Sample-project notice shared by every MK portfolio demo. */
export function DemoBar() {
  return (
    <aside
      aria-label="Örnek proje bildirimi"
      className="flex h-8 items-center gap-3 border-b border-white/10 bg-[#0b1e26] px-4 text-[11px] text-[#c9d5d8] sm:px-6 sm:text-xs"
    >
      <b className="shrink-0 border-r border-white/20 pr-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d7b98b]">
        Örnek proje
      </b>
      <p className="hidden min-w-0 flex-1 truncate sm:block">
        Mavi Danışmanlık gerçek bir işletme değildir; MK Digital Systems’in danışmanlık işletmeleri için hazırladığı bir web sitesi demosudur.
      </p>
      <a href={demo.mkHome} className="ml-auto shrink-0 border-b border-white/40 text-white hover:border-[#d7b98b] hover:text-[#d7b98b]">
        <span className="sm:hidden">MK Digital Systems demosu ↗</span>
        <span className="hidden sm:inline">MK Digital Systems ↗</span>
      </a>
    </aside>
  );
}
