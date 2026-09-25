import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import { contact, demo, demoWhatsappUrl } from "@/lib/site-config";
import { MessageCircle, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "İletişim",
  description:
    "Mavi Danışmanlık ile iletişime geçin. WhatsApp, telefon veya e-posta ile bize ulaşın; randevu talebi formunu doldurun.",
};

const whatsappUrl = demoWhatsappUrl();

export default function IletisimPage() {
  return (
    <>
      <section className="border-b border-gray-100 bg-mavi-50/30 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            İletişim
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Sorularınız veya randevu talebiniz için bize ulaşın.
          </p>
        </div>
      </section>

      <Section className="pb-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              İletişim kanalları
            </h2>
            <div className="mt-6 space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:border-mavi-200 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">WhatsApp</p>
                  <p className="text-sm text-gray-600">Demo: mesajınız MK Digital Systems’e iletilir</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mavi-600 text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Telefon</p>
                  <p className="text-sm text-gray-600">{contact.phoneNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-mavi-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">E-posta</p>
                  <p className="text-sm text-gray-600">{contact.email}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">{demo.contactNote}</p>
              <div className="rounded-2xl border border-mavi-100 bg-mavi-50/40 p-4">
                <p className="font-medium text-gray-900">İşletmeniz için benzer bir site</p>
                <p className="mt-1 text-sm text-gray-600">
                  Mavi Danışmanlık, MK Digital Systems’in hazırladığı bir örnek projedir.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-mavi-700 hover:underline"
                >
                  WhatsApp’tan MK Digital Systems ile görüşün →
                </a>
              </div>
            </div>
            {/* Map placeholder - hidden by default, can be shown with a div */}
            <div className="mt-8 hidden rounded-2xl border border-gray-200 bg-gray-100 h-48 items-center justify-center text-gray-500 text-sm">
              Harita (isteğe bağlı)
            </div>
          </div>

          <div id="randevu">
            <h2 className="text-lg font-semibold text-gray-900">
              Randevu talebi
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Demo randevu akışı: formu deneyebilirsiniz, ancak gerçek bir randevu oluşturulmaz ve bilgileriniz gönderilmez.
            </p>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <LeadForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
