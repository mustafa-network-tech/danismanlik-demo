import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | ${brand.metaAttribution}`,
    template: `%s | ${brand.name} | ${brand.metaAttribution}`,
  },
  description: brand.description,
  openGraph: {
    title: `${brand.name} | ${brand.metaAttribution}`,
    description: brand.description,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
