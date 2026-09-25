import Link from "next/link";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { demoWhatsappUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const whatsappUrl = demoWhatsappUrl();

interface CTAButtonsProps {
  variant?: "hero" | "inline" | "dark";
  showRandevu?: boolean;
  className?: string;
}

export function CTAButtons({
  variant = "inline",
  showRandevu = true,
  className,
}: CTAButtonsProps) {
  const isHero = variant === "hero";
  const isDark = variant === "dark";
  const sizeClass = isHero ? "px-6 py-3.5 text-base" : "px-4 py-2.5 text-sm";
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3",
        isHero && "flex-col sm:flex-row",
        className
      )}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          base,
          "bg-[#25D366] text-white hover:bg-[#20BD5A] focus-visible:ring-[#25D366]",
          isDark && "bg-white text-[#25D366] hover:bg-mavi-50",
          sizeClass
        )}
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        WhatsApp
      </a>
      <Link
        href="/iletisim"
        className={cn(
          base,
          !isDark && "bg-white text-mavi-600 border border-mavi-200 hover:bg-mavi-50 focus-visible:ring-mavi-600",
          isDark && "bg-mavi-500 text-white border border-mavi-400 hover:bg-mavi-600 focus-visible:ring-white",
          sizeClass
        )}
      >
        <Phone className="h-5 w-5 shrink-0" />
        İletişim
      </Link>
      {showRandevu && (
        <Link
          href="/iletisim#randevu"
          className={cn(
            base,
            !isDark && "bg-mavi-600 text-white hover:bg-mavi-700 focus-visible:ring-mavi-600",
            isDark && "bg-white text-mavi-600 hover:bg-mavi-50 focus-visible:ring-white",
            sizeClass
          )}
        >
          <Calendar className="h-5 w-5 shrink-0" />
          Randevu Talebi
        </Link>
      )}
    </div>
  );
}
