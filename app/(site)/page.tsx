import Link from "next/link";
import { Section } from "@/components/Section";
import { CTAButtons } from "@/components/CTAButtons";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { brand, servicesConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-mavi-50/40 to-white pt-12 pb-16 sm:pt-16 sm:pb-24">
        {/* Background visual */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div className="absolute -left-32 -top-24 h-80 w-80 rounded-full bg-mavi-300/60 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-mavi-400/50 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-mavi-300/55 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-mavi-400/35" />
          <div className="absolute right-1/4 top-20 h-3 w-3 rounded-full bg-mavi-500/70" />
          <div className="absolute bottom-20 left-1/4 h-3 w-3 rounded-full bg-mavi-500/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {brand.name}
          </h1>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto">
            {brand.tagline}
          </p>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            {brand.description}
          </p>
          <div className="mt-8">
            <CTAButtons variant="hero" />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <Section id="guven" className="py-12 sm:py-16 border-b border-gray-100">
        <TrustBar />
      </Section>

      {/* Services preview */}
      <Section
        id="hizmetler"
        title={servicesConfig.sectionTitle}
        subtitle={servicesConfig.sectionSubtitle}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesConfig.items.map((service) => (
            <ServiceCard key={service.id} service={service} variant="preview" />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 rounded-xl bg-mavi-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-mavi-700 transition-colors"
          >
            Tüm hizmetleri gör
          </Link>
        </div>
      </Section>

      {/* How it works */}
      <Section
        id="nasil-calisir"
        title="Nasıl Çalışırız?"
        subtitle="Üç basit adımda danışmanlık sürecinize başlayın."
        className="bg-gray-50/50"
      >
        <HowItWorks />
      </Section>

      {/* Testimonials */}
      <Section
        id="yorumlar"
        title="Danışan Yorumları"
        subtitle="Danışanlarımızdan gelen geri bildirimler."
      >
        <Testimonials />
      </Section>

      {/* FAQ */}
      <Section
        id="sss"
        title="Sıkça Sorulan Sorular"
        subtitle="Merak ettiklerinizin yanıtları."
      >
        <FAQAccordion />
      </Section>

      {/* Final CTA */}
      <section className="border-t border-gray-200 bg-mavi-600 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Hedeflerinize birlikte yürüyelim
          </h2>
          <p className="mt-4 text-mavi-100">
            Randevu talebinizi bırakın veya doğrudan WhatsApp / telefon ile
            iletişime geçin.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButtons variant="dark" showRandevu={true} />
          </div>
        </div>
      </section>
    </>
  );
}
