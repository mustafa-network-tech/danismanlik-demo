import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { servicesConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ServiceItem = (typeof servicesConfig.items)[number];

interface ServiceCardProps {
  service: ServiceItem;
  variant?: "preview" | "full";
  className?: string;
}

export function ServiceCard({
  service,
  variant = "preview",
  className,
}: ServiceCardProps) {
  if (variant === "preview") {
    return (
      <Link
        href={`/hizmetler#${service.id}`}
        className={cn(
          "group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-mavi-200 hover:shadow-md",
          className
        )}
      >
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-mavi-600 transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {service.shortDesc}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-mavi-600">
          Detaylar
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    );
  }

  return (
    <article
      id={service.id}
      className={cn(
        "rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm scroll-mt-24",
        className
      )}
    >
      <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
        {service.title}
      </h2>
      <p className="mt-2 text-gray-600">{service.shortDesc}</p>
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-800">Kimler için?</h4>
        <p className="mt-1 text-sm text-gray-600">{service.whoFor}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-800">Kazanımlar</h4>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-600">
          {service.outcomes.map((outcome, i) => (
            <li key={i}>{outcome}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
