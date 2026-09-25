"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { DemoNote } from "@/components/DemoNote";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-2xl space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpenId(openId === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            aria-expanded={openId === i}
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-gray-400 transition-transform",
                openId === i && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              openId === i ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="border-t border-gray-100 px-5 py-4 text-sm text-gray-600">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
      <DemoNote>Örnek içeriktir; yanıtlar gerçek bir işletmenin çalışma koşullarını yansıtmaz.</DemoNote>
    </div>
  );
}
