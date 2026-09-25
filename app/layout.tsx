import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/lib/site-config";
import { DemoBar } from "@/components/DemoBar";

const title = `${brand.name} — Danışmanlık Web Sitesi Demosu | MK Digital Systems`;
const description =
  "MK Digital Systems'in danışmanlık işletmeleri için hazırladığı örnek web sitesi: hizmet sayfaları, randevu talebi akışı ve iletişim kanalları. Mavi Danışmanlık gerçek bir işletme değildir.";

// Demo site: kept out of search results so it is never mistaken for a real business (X-Robots-Tag in next.config.js too).
export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${brand.name} (Demo)`,
  },
  description,
  openGraph: {
    title: `${brand.name} · Danışmanlık web sitesi demosu`,
    description: "Danışmanlık işletmeleri için hazırlanmış örnek web sitesi. MK Digital Systems portföy projesi.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <DemoBar />
        {children}
      </body>
    </html>
  );
}
