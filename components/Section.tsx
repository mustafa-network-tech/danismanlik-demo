import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  containerClass,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-14 sm:py-20", className)}
    >
      <div className={cn("mx-auto max-w-6xl px-4 sm:px-6", containerClass)}>
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
