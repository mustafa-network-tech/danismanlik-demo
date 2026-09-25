import { testimonials } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { DemoNote } from "@/components/DemoNote";

export function Testimonials() {
  return (
    <>
    <div className="grid gap-6 sm:grid-cols-3">
      {testimonials.map((t, i) => (
        <blockquote
          key={i}
          className={cn(
            "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm",
            "flex flex-col"
          )}
        >
          <p className="text-gray-700 flex-1">&ldquo;{t.quote}&rdquo;</p>
          <footer className="mt-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-mavi-100 flex items-center justify-center text-mavi-600 font-semibold text-sm">
              {t.author.charAt(0)}
            </div>
            <div>
              <cite className="not-italic font-medium text-gray-900">
                {t.author}
              </cite>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </footer>
        </blockquote>
      ))}
    </div>
    <DemoNote>Örnek yorumlardır; gerçek danışan yorumları değildir.</DemoNote>
    </>
  );
}
