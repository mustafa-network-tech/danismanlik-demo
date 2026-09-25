import Link from "next/link";
import { brand, footerConfig, demo } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-teal-700/50 bg-gradient-to-b from-teal-800 to-teal-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold text-teal-100 hover:text-white"
            >
              {brand.name}
            </Link>
            <p className="mt-1 text-sm text-teal-200/90">{brand.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-8">
            <div>
              <h3 className="text-sm font-semibold text-teal-100">Sayfalar</h3>
              <ul className="mt-2 flex flex-col gap-2">
                {footerConfig.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-teal-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-teal-100">Yasal</h3>
              <ul className="mt-2 flex flex-col gap-2">
                {footerConfig.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-teal-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-teal-600/50 pt-6">
          <p className="text-center text-sm text-teal-200/90">
            Gerçek bir işletme değildir · Tasarım ve geliştirme:{" "}
            <a href={demo.mkHome} className="underline hover:text-white">
              MK Digital Systems
            </a>
          </p>
          <p className="mt-1 text-center text-sm font-medium text-teal-100">
            © 2026. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
