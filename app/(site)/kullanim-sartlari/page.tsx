import { Section } from "@/components/Section";

export const metadata = {
  title: "Kullanım Şartları",
  description: "Mavi Danışmanlık kullanım şartları.",
};

export default function KullanimSartlariPage() {
  return (
    <Section className="py-16">
      <div className="mx-auto max-w-3xl prose prose-gray">
        <h1 className="text-2xl font-bold text-gray-900">Kullanım Şartları</h1>
        <p className="mt-4 text-gray-600">
          Bu sayfa kullanım şartları için ayrılmıştır. İçerik yasal danışmanlık
          sonrası eklenebilir.
        </p>
      </div>
    </Section>
  );
}
