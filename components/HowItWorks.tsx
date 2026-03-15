import { howItWorks } from "@/lib/site-config";

export function HowItWorks() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {howItWorks.map((step) => (
        <div
          key={step.step}
          className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mavi-100 text-sm font-bold text-mavi-600">
            {step.step}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            {step.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
