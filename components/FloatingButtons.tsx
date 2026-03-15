"use client";

import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const whatsappUrl = `https://wa.me/${contact.whatsappNumber.replace(/\D/g, "")}`;
const telUrl = `tel:${contact.phoneNumber.replace(/\s/g, "")}`;

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
        aria-label="WhatsApp ile yazın"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={telUrl}
        className={cn(
          "fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mavi-600 text-white shadow-lg",
          "md:bottom-6 md:left-auto md:right-24",
          "hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-mavi-600"
        )}
        aria-label="Telefon ile arayın"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}
