import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Taahhüdü",
  description: "Mavi Danışmanlık gizlilik ve veri koruma taahhüdü.",
};

export default function TaahhutPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Gizlilik Taahhüdümüz
          </h1>
          <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
            Örnek metindir. Mavi Danışmanlık gerçek bir işletme değildir ve bu sayfa yasal bir taahhüt içermez.
          </p>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Bilgileriniz bizim için emanet niteliğindedir.
          </p>
        </header>

        <div className="space-y-8 border-t border-gray-200 pt-8 text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              1) Gizlilik İlkesi
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Mavi Danışmanlık ile paylaştığınız tüm kişisel verileriniz ve
              paylaşımlarınız gizlilik ilkemiz kapsamında korunur. Web sitemiz
              üzerindeki formlar, WhatsApp, telefon veya e-posta aracılığıyla
              ilettiğiniz bilgiler üçüncü kişilerin erişimine kapalı tutulur ve
              yalnızca yetkili kişi veya kişiler tarafından görülür. Danışanlarımızın
              kendilerini güven içinde ifade edebilmeleri için, paylaşılan her
              bilginin mahrem olduğu kabul edilir.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              2) Veri Kullanımı
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Bizimle paylaştığınız kişisel verileriniz; yalnızca sizinle
              iletişime geçmek, randevu planlamak, danışmanlık sürecinizi
              organize etmek ve size daha iyi hizmet sunmak amacıyla kullanılır.
              İzin ve bilginiz dışında pazarlama amaçlı kullanılmaz, gereğinden
              fazla saklanmaz ve amacını tamamlamış veriler uygun süre sonunda
              silinir veya anonim hale getirilir.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              3) Üçüncü Taraf Paylaşımı
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Kişisel verileriniz hiçbir koşulda üçüncü taraf kişi, kurum veya
              kuruluşlarla paylaşılmaz. Yasal bir zorunluluk doğmadığı sürece
              veya açık rızanız bulunmadıkça, kimliğinizi ortaya çıkarabilecek
              herhangi bir bilgi aktarımı yapılmaz. Gerekmesi halinde teknik
              altyapı sağlayıcılarıyla yalnızca hizmetin sürdürülebilmesi için
              asgari düzeyde ve anonimleştirilmiş veri paylaşımı yapılabilir.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              4) Güvenli İletişim
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Kullandığımız iletişim kanallarının güvenli ve güncel olmasına
              özen gösteririz. Web sitemiz, barındırma ve iletişim altyapısı
              güvenlik güncellemeleri takip edilerek işletilir. Bununla birlikte,
              internet üzerinden yapılan hiçbir iletişimin yüzde yüz güvenlik
              garantisi olmadığı bilinciyle, sizin de kişisel verilerinizi
              üçüncü kişilerle paylaşmaktan kaçınmanız ve cihaz güvenliğinize
              dikkat etmeniz önemlidir.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              5) KVKK Uyumu
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Mavi Danışmanlık olarak 6698 sayılı Kişisel Verilerin Korunması
              Kanunu (&quot;KVKK&quot;) başta olmak üzere ilgili tüm mevzuata
              uyum sağlamayı taahhüt ederiz. Kişisel verilerin işlenmesi,
              saklanması ve imhası süreçlerimizi KVKK çerçevesinde yürütür,
              danışanlarımızın kişisel verilerine ilişkin başvuru ve taleplerini
              ciddiyetle ele alırız. Haklarınız ve detaylı bilgi için KVKK
              aydınlatma metnimize başvurabilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

