"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, headerLinks, demoWhatsappUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-mavi-700 hover:text-mavi-600 transition-colors"
        >
          {brand.name}
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-mavi-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-xl bg-mavi-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-mavi-700 transition-colors"
          >
            Randevu Al
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={demoWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#25D366] px-3 py-2 text-sm font-medium text-white"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
            aria-label="Menü"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium text-white bg-mavi-600"
              )}
            >
              Randevu Al
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
