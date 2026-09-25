import { Section } from "@/components/Section";

export const metadata = {
  title: "Gizlilik",
  description: "Mavi Danışmanlık gizlilik politikası.",
};

export default function GizlilikPage() {
  return (
    <Section className="py-16">
      <div className="mx-auto max-w-3xl prose prose-gray">
        <h1 className="text-2xl font-bold text-gray-900">Gizlilik Politikası</h1>
        <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
          Örnek metindir. Mavi Danışmanlık gerçek bir işletme değildir ve bu sayfa yasal bir taahhüt içermez.
        </p>
        <p className="mt-4 text-gray-600">
          Bu sayfa gizlilik politikası için ayrılmıştır. İçerik yasal danışmanlık
          sonrası eklenebilir.
        </p>
      </div>
    </Section>
  );
}
