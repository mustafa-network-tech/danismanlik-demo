"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { demoWhatsappUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const whatsappUrl = demoWhatsappUrl();

export function FloatingButtons() {
  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg",
          "hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-mavi-600"
        )}
        aria-label="WhatsApp ile MK Digital Systems'e yazın"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <Link
        href="/iletisim"
        className={cn(
          "fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mavi-600 text-white shadow-lg",
          "md:bottom-6 md:left-auto md:right-24",
          "hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-mavi-600"
        )}
        aria-label="İletişim bilgileri"
      >
        <Phone className="h-6 w-6" />
      </Link>
    </>
  );
}
