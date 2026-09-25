/**
 * Mavi Danışmanlık — Tüm site içeriği bu dosyadan düzenlenebilir.
 */

export const brand = {
  name: "Mavi Danışmanlık",
  tagline: "Net yol, sakin zihin.",
  description:
    "Kişisel ve kariyer gelişiminiz için profesyonel danışmanlık hizmetleri. Hedeflerinize net bir yol haritası ile ulaşın.",
} as const;

/**
 * Portföy demosu: Mavi Danışmanlık gerçek bir işletme değildir.
 * Sitedeki bütün etkileşimler çalışır, ancak hiçbiri kurgusal işletmeye ulaşmaz:
 * WhatsApp aksiyonları demo adını içeren hazır mesajla MK Digital Systems'e gider,
 * telefon ve e-posta tıklanamaz örnek değerlerdir, randevu formu hiçbir veri göndermez.
 */
export const demo = {
  // Yeni domain yayına girince https://mk-digitalsystems.com olarak değiştirin.
  mkHome: "https://mk-digital-systems-seven.vercel.app/tr",
  mkWhatsappNumber: "905456597551",
  intro: "Merhaba MK Digital Systems, Mavi Danışmanlık demo sitesini inceledim.",
  contactNote: "Örnek iletişim bilgileridir; canlı bir projede işletmenin kendi kanalları yer alır.",
  sampleNote: "Örnek içeriktir; gerçek bir işletmenin taahhüdü değildir.",
} as const;

/** WhatsApp link to MK Digital Systems with a prefilled message that names this demo. */
export function demoWhatsappUrl(
  request = "İşletmem için benzer bir web sitesi hakkında görüşmek istiyorum."
): string {
  return `https://wa.me/${demo.mkWhatsappNumber}?text=${encodeURIComponent(`${demo.intro} ${request}`)}`;
}

export const contact = {
  phoneNumber: "+90 (000) 000 00 00",
  email: "info@mavi-danismanlik.example",
} as const;

// ——— Trust bar (ana sayfa) ———
export const trustBar = [
  {
    title: "Gizlilik",
    description: "Tüm görüşmeleriniz gizli tutulur.",
    icon: "shield",
  },
  {
    title: "Hızlı Dönüş",
    description: "24 saat içinde size dönüş yapıyoruz.",
    icon: "clock",
  },
  {
    title: "Net Plan",
    description: "Her adımda net ve uygulanabilir plan.",
    icon: "target",
  },
] as const;

// ——— Hizmetler (başlık + liste) ———
export const servicesConfig = {
  sectionTitle: "Hizmetlerimiz",
  sectionSubtitle: "İhtiyacınıza uygun danışmanlık alanlarında yanınızdayız.",
  items: [
    {
      id: "kariyer-yonlendirme",
      title: "Kariyer Yönlendirme",
      shortDesc:
        "Kariyer hedeflerinizi netleştirin, doğru adımları atın.",
      whoFor: "Kariyer değişikliği düşünenler, yeni mezunlar, terfi sürecindekiler",
      outcomes: [
        "Güçlü ve zayıf yönlerin netleşmesi",
        "Kariyer hedeflerine uygun yol haritası",
        "CV ve mülakat hazırlığı desteği",
      ],
    },
    {
      id: "hedef-belirleme-plan",
      title: "Hedef Belirleme & Plan",
      shortDesc:
        "Hedeflerinizi somut ve ölçülebilir hale getirin.",
      whoFor: "Hedefleri netleştirmek isteyen herkes",
      outcomes: [
        "SMART hedef belirleme",
        "Aksiyon planı ve takip",
        "Engelleri aşma stratejileri",
      ],
    },
    {
      id: "iletisim-ozguven",
      title: "İletişim & Özgüven",
      shortDesc:
        "İletişim becerilerinizi güçlendirin, özgüveninizi artırın.",
      whoFor: "Topluluk önünde konuşmakta zorlananlar, ilişki dinamiklerini geliştirmek isteyenler",
      outcomes: [
        "Etkili iletişim teknikleri",
        "Özgüven artırıcı egzersizler",
        "Zor konuşmalarda net ifade",
      ],
    },
    {
      id: "zaman-yonetimi",
      title: "Zaman Yönetimi",
      shortDesc:
        "Zamanınızı verimli kullanın, önceliklerinizi belirleyin.",
      whoFor: "Yoğun iş temposu olanlar, ertelemeyi bırakmak isteyenler",
      outcomes: [
        "Önceliklendirme ve planlama",
        "Dikkat dağınıklığı ile başa çıkma",
        "Sürdürülebilir çalışma ritmi",
      ],
    },
    {
      id: "stres-denge",
      title: "Stres & Denge",
      shortDesc:
        "Stresle başa çıkın, iş-yaşam dengesini kurun.",
      whoFor: "Stres ve tükenmişlik yaşayanlar",
      outcomes: [
        "Stres yönetimi teknikleri",
        "İş-yaşam dengesi stratejileri",
        "Sınır koyma ve hayır deme becerisi",
      ],
    },
    {
      id: "karar-verme-netligi",
      title: "Karar Verme Netliği",
      shortDesc:
        "Önemli kararları netlik ve güvenle alın.",
      whoFor: "Karar vermekte zorlanan, analiz felcine girenler",
      outcomes: [
        "Karar verme çerçevesi",
        "Seçenekleri değerlendirme yöntemleri",
        "Belirsizlikle başa çıkma",
      ],
    },
  ],
} as const;

// ——— Nasıl çalışır (3 adım) ———
export const howItWorks = [
  {
    step: 1,
    title: "İletişime Geçin",
    description:
      "Randevu talebi formunu doldurun veya WhatsApp üzerinden yazın; talep akışı buradan başlar.",
  },
  {
    step: 2,
    title: "Tanışma Görüşmesi",
    description:
      "Ücretsiz veya ücretli tanışma görüşmesinde ihtiyacınızı dinliyoruz, uygun paketi birlikte belirliyoruz.",
  },
  {
    step: 3,
    title: "Seanslara Başlayın",
    description:
      "Belirlenen plan doğrultusunda seanslara başlıyoruz. Her adımda net geri bildirim ve takip sunuyoruz.",
  },
] as const;

// ——— Müşteri yorumları ———
export const testimonials = [
  {
    quote:
      "Kariyer değişikliği sürecimde çok net bir yol haritası çıkardık. Şu an hayal ettiğim rolde çalışıyorum.",
    author: "A. K.",
    role: "Finans sektörü",
  },
  {
    quote:
      "Zaman yönetimi ve önceliklendirme konusunda pratik araçlar öğrendim. İş ve özel hayat dengesi belirgin şekilde iyileşti.",
    author: "M. S.",
    role: "Proje yöneticisi",
  },
  {
    quote:
      "Karar verme konusunda takılıyordum. Süreç sayesinde daha net ve hızlı karar alabiliyorum.",
    author: "E. Y.",
    role: "Girişimci",
  },
] as const;

// ——— Fiyatlandırma (2 paket) ———
export const pricing = [
  {
    id: "paket-1",
    name: "Temel Web Paketi",
    price: "4.500",
    currency: "TL",
    note: "Ödemesiz",
    badge: null as string | null,
    features: [
      "Ana sayfa + Hizmetler + Hakkımızda + İletişim",
      "WhatsApp ve Ara butonları",
      "Özelleştirilebilir lead formu",
      "Temel SEO",
    ],
  },
  {
    id: "paket-2",
    name: "Online Ödeme Entegrasyonlu",
    price: "7.500",
    currency: "TL",
    note: "Online Ödeme Entegrasyonlu",
    badge: "Önerilen",
    features: [
      "Temel paketteki her şey",
      "iyzico / PayTR / Stripe ile ödeme altyapısı",
      "Ödeme sağlayıcı hesabı müşteri tarafından açılır, entegrasyon proje bedeline dahildir.",
    ],
  },
] as const;

// ——— SSS ———
export const faqs = [
  {
    question: "Süreç nasıl işliyor?",
    answer:
      "Önce randevu talebi veya iletişim formu ile bize ulaşıyorsunuz. Kısa süre içinde size dönüş yapıp tanışma görüşmesi planlıyoruz. İhtiyacınıza göre seans sayısı ve konu belirlenir, ardından seanslara başlanır.",
  },
  {
    question: "Görüşmeler gizli mi?",
    answer:
      "Evet. Tüm görüşmeleriniz gizlilik ilkesi çerçevesinde yürütülür. Bilgileriniz üçüncü taraflarla paylaşılmaz.",
  },
  {
    question: "Ücretlendirme nasıl?",
    answer:
      "Seans bazlı veya paket bazlı ücretlendirme yapıyoruz. Tanışma görüşmesinde ihtiyacınıza uygun seçenekleri birlikte değerlendiriyoruz.",
  },
  {
    question: "Ödeme nasıl yapılır?",
    answer:
      "Havale/EFT veya (paket seçimine göre) online ödeme ile ödeme alabiliriz. Detaylar tanışma görüşmesinde paylaşılır.",
  },
  {
    question: "Bir seans ne kadar sürer?",
    answer:
      "Standart seans süresi 50–60 dakikadır. İhtiyaca göre kısa check-in veya uzun seanslar da planlanabilir.",
  },
  {
    question: "Randevu iptali nasıl yapılır?",
    answer:
      "En az 24 saat önceden bildirerek randevunuzu erteleyebilir veya iptal edebilirsiniz. Geç iptallerde seans hakkı düşebilir; detaylar sözleşmede yer alır.",
  },
] as const;

// ——— Randevu / Lead formu alanları (yapılandırılabilir) ———
export type LeadFormFieldType = "text" | "email" | "tel" | "select" | "textarea" | "radio";

export interface LeadFormFieldConfig {
  name: string;
  label: string;
  type: LeadFormFieldType;
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export const leadFormFields: LeadFormFieldConfig[] = [
  {
    name: "adSoyad",
    label: "Ad Soyad",
    type: "text",
    required: true,
    placeholder: "Adınız ve soyadınız",
  },
  {
    name: "telefon",
    label: "Telefon",
    type: "tel",
    required: true,
    placeholder: "5XX XXX XX XX",
  },
  {
    name: "eposta",
    label: "E-posta",
    type: "email",
    required: false,
    placeholder: "ornek@email.com",
  },
  {
    name: "hizmet",
    label: "İlgilendiğiniz Hizmet",
    type: "select",
    required: true,
    placeholder: "Seçiniz",
    options: servicesConfig.items.map((s) => ({ value: s.id, label: s.title })),
  },
  {
    name: "iletisimTercihi",
    label: "Tercih ettiğiniz iletişim",
    type: "radio",
    required: true,
    options: [
      { value: "whatsapp", label: "WhatsApp" },
      { value: "telefon", label: "Telefon" },
      { value: "eposta", label: "E-posta" },
    ],
  },
  {
    name: "mesaj",
    label: "Mesajınız (isteğe bağlı)",
    type: "textarea",
    required: false,
    placeholder: "Kısaca ne konuda destek almak istiyorsunuz?",
  },
];

// ——— Hakkımızda ———
export const aboutConfig = {
  story: {
    title: "Hikayemiz",
    paragraphs: [
      "Mavi Danışmanlık, kişisel ve kariyer gelişiminde net yol haritası sunan bir danışmanlık markasıdır. 'Net yol, sakin zihin' ifadesiyle; belirsizlikleri azaltmayı, hedefleri netleştirmeyi ve zihinsel dinginlikle ilerlemeyi hedefliyoruz.",
      "Danışanlarımızla bire bir çalışarak, onların güçlü yönlerini ortaya çıkarıyor ve adım adım ilerlemelerine eşlik ediyoruz. Her bireyin kendi hikayesi ve ihtiyacı vardır; bu yüzden hazır kalıplar yerine kişiye özel yaklaşım benimsiyoruz.",
    ],
  },
  values: [
    {
      title: "Gizlilik",
      description: "Tüm görüşmeler ve bilgiler gizlilik ilkesi çerçevesinde korunur.",
    },
    {
      title: "Netlik",
      description: "Belirsizlikleri azaltır, somut adımlar ve geri bildirim sunarız.",
    },
    {
      title: "Empati",
      description: "Danışanı anlamak ve ihtiyacına uygun çözüm üretmek önceliğimizdir.",
    },
    {
      title: "Sürdürülebilirlik",
      description: "Kısa vadeli değil, hayatınıza taşıyabileceğiniz beceriler kazandırmayı hedefliyoruz.",
    },
  ],
  credentials: {
    title: "Yetkinlikler",
    items: [
      "Kişisel ve kariyer danışmanlığı",
      "Hedef belirleme ve planlama",
      "İletişim ve liderlik becerileri",
    ],
  },
} as const;

// ——— Header (üst bar) ——— sadece bu linkler üst barda görünür
export const headerLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

// ——— Footer ——— Taahhüt sadece footer'da
export const footerConfig = {
  links: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/iletisim", label: "İletişim" },
    { href: "/taahhut", label: "Taahhüt" },
  ],
  legal: [
    { href: "/kvkk", label: "KVKK" },
    { href: "/gizlilik", label: "Gizlilik" },
    { href: "/kullanim-sartlari", label: "Kullanım Şartları" },
  ],
  copyright: "© Mavi Danışmanlık. Tüm hakları saklıdır.",
} as const;
