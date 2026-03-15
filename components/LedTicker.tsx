"use client";

const TICKER_TEXT =
  "Bu web sitesi gösterim amacıyla hazırlanmış bir demo sayfasıdır — Mustafa Öner | MK Digital Systems";

export function LedTicker() {
  return (
    <div
      className="relative z-30 w-full overflow-hidden bg-black py-2 font-mono text-sm tracking-wider text-amber-400"
      role="marquee"
      aria-live="polite"
    >
      <div className="led-ticker-inner flex w-max items-center gap-8">
        <span className="whitespace-nowrap text-shadow-led">
          {TICKER_TEXT}
        </span>
        <span className="whitespace-nowrap text-shadow-led" aria-hidden>
          {TICKER_TEXT}
        </span>
      </div>
    </div>
  );
}
