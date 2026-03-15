import { pricing } from "@/lib/site-config";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
      {pricing.map((pkg) => (
        <div
          key={pkg.id}
          className={cn(
            "relative rounded-2xl border bg-white p-6 shadow-sm sm:p-8",
            pkg.badge
              ? "border-mavi-300 shadow-mavi-100 ring-1 ring-mavi-200"
              : "border-gray-200"
          )}
        >
          {pkg.badge && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-mavi-600 px-3 py-1 text-xs font-medium text-white">
              {pkg.badge}
            </span>
          )}
          <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
            <span className="text-gray-500">{pkg.currency}</span>
            {pkg.note && (
              <span className="ml-2 text-sm text-gray-500">({pkg.note})</span>
            )}
          </div>
          <ul className="mt-6 space-y-3">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <Check className="h-5 w-5 shrink-0 text-mavi-600 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
