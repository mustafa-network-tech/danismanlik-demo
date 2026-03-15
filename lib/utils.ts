import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Randevu / lead formu verisinden WhatsApp için Türkçe metin oluşturur.
 */
export function buildLeadMessage(data: Record<string, unknown>): string {
  const lines: string[] = [
    "Merhaba, randevu talebim var.",
    "",
    `Ad Soyad: ${data.adSoyad ?? "-"}`,
    `Telefon: ${data.telefon ?? "-"}`,
    `E-posta: ${data.eposta ?? "-"}`,
    `İlgilendiğim hizmet: ${data.hizmet ?? "-"}`,
    `İletişim tercihim: ${data.iletisimTercihi ?? "-"}`,
  ];
  if (data.mesaj) {
    lines.push("", "Mesajım:", String(data.mesaj));
  }
  return lines.join("\n");
}

/**
 * WhatsApp deep link — numara sadece rakam olmalı (90...).
 */
export function getWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}

/**
 * mailto: fallback — aynı mesajı e-posta gövdesi olarak kullanır.
 */
export function getMailtoUrl(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
