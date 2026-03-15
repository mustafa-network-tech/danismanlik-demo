import { Section } from "@/components/Section";
import { aboutConfig } from "@/lib/site-config";

export const metadata = {
  title: "Hakkımızda",
  description:
    "Mavi Danışmanlık — Net yol, sakin zihin. Kişisel ve kariyer danışmanlığında değerlerimiz ve yaklaşımımız.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <section className="border-b border-gray-100 bg-mavi-50/30 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hakkımızda
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Danışmanlık yaklaşımımız ve değerlerimiz.
          </p>
        </div>
      </section>

      <Section title={aboutConfig.story.title}>
        <div className="mx-auto max-w-3xl space-y-4 text-gray-600">
          {aboutConfig.story.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section
        title="Değerlerimiz"
        className="bg-gray-50/50"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutConfig.values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={aboutConfig.credentials.title}>
        <ul className="mx-auto max-w-2xl list-inside list-disc space-y-2 text-gray-600">
          {aboutConfig.credentials.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>
    </>
  );
}
