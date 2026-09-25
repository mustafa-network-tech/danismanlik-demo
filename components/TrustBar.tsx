import { Shield, Clock, Target } from "lucide-react";
import { trustBar } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { demo } from "@/lib/site-config";
import { DemoNote } from "@/components/DemoNote";

const iconMap = {
  shield: Shield,
  clock: Clock,
  target: Target,
} as const;

export function TrustBar() {
  return (
    <>
    <div className="grid gap-6 sm:grid-cols-3">
      {trustBar.map((item) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Shield;
        return (
          <div
            key={item.title}
            className="flex flex-col items-center rounded-2xl border border-gray-200 bg-gray-50/50 p-6 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mavi-100 text-mavi-600">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
          </div>
        );
      })}
    </div>
    <DemoNote>{demo.sampleNote}</DemoNote>
    </>
  );
}
