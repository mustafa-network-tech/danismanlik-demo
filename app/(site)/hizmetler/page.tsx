import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTAButtons } from "@/components/CTAButtons";
import { servicesConfig } from "@/lib/site-config";

export const metadata = {
  title: "Hizmetler",
  description:
    "Kariyer yönlendirme, hedef belirleme, iletişim, zaman yönetimi, stres ve denge, karar verme netliği danışmanlık hizmetleri.",
};

export default function HizmetlerPage() {
  return (
    <>
      <section className="border-b border-gray-100 bg-mavi-50/30 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {servicesConfig.sectionTitle}
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {servicesConfig.sectionSubtitle}
          </p>
        </div>
      </section>

      <Section className="pb-24 sm:pb-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesConfig.items.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              variant="full"
            />
          ))}
        </div>
      </Section>

      {/* Sticky CTA bar - visible on mobile */}
      <div className="fixed bottom-20 left-0 right-0 z-30 flex justify-center gap-3 border-t border-gray-200 bg-white/95 px-4 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden">
        <CTAButtons variant="inline" showRandevu={false} />
      </div>
    </>
  );
}
