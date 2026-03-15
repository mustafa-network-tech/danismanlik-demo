"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  leadFormFields,
  contact,
  servicesConfig,
} from "@/lib/site-config";
import { buildLeadMessage, getWhatsAppUrl, getMailtoUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

// Build zod schema from config
const serviceIds = servicesConfig.items.map((s) => s.id);
const leadFormSchema = z.object({
  adSoyad: z.string().min(1, "Ad soyad gereklidir"),
  telefon: z.string().min(1, "Telefon gereklidir"),
  eposta: z.string().email().optional().or(z.literal("")),
  hizmet: z.enum(serviceIds as [string, ...string[]], {
    required_error: "Bir hizmet seçiniz",
  }),
  iletisimTercihi: z.enum(["whatsapp", "telefon", "eposta"], {
    required_error: "İletişim tercihi seçiniz",
  }),
  mesaj: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export function LeadForm({ className }: { className?: string }) {
  const [success, setSuccess] = useState(false);
  const [fallbackMailto, setFallbackMailto] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      eposta: "",
      mesaj: "",
    },
  });

  const onSubmit = (data: LeadFormValues) => {
    const message = buildLeadMessage(data as unknown as Record<string, unknown>);
    const whatsappNumber = contact.whatsappNumber.replace(/\D/g, "");
    const url = getWhatsAppUrl(whatsappNumber, message);

    setSuccess(false);
    setFallbackMailto(null);

    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win || win.closed) {
      const subject = "Randevu Talebi - Mavi Danışmanlık";
      setFallbackMailto(
        getMailtoUrl(contact.email, subject, message)
      );
    }
    setSuccess(true);
  };

  if (success) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-green-200 bg-green-50 p-6 text-center animate-fade-in",
          className
        )}
      >
        <p className="font-medium text-green-800">
          Talebiniz alındı. En kısa sürede size dönüş yapacağız.
        </p>
        {fallbackMailto && (
          <p className="mt-2 text-sm text-green-700">
            WhatsApp açılmadıysa{" "}
            <a
              href={fallbackMailto}
              className="underline font-medium"
            >
              e-posta ile gönderin
            </a>
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-4", className)}
    >
      {leadFormFields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {field.label}
            {field.required && <span className="text-red-500"> *</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              {...register(field.name as keyof LeadFormValues)}
              placeholder={field.placeholder}
              rows={4}
              className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-mavi-500 focus:ring-1 focus:ring-mavi-500"
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              {...register(field.name as keyof LeadFormValues)}
              className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-mavi-500 focus:ring-1 focus:ring-mavi-500"
            >
              <option value="">{field.placeholder ?? "Seçiniz"}</option>
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : field.type === "radio" ? (
            <div className="flex flex-wrap gap-4 pt-1">
              {field.options?.map((opt) => (
                <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value={opt.value}
                    {...register(field.name as keyof LeadFormValues)}
                    className="text-mavi-600 focus:ring-mavi-500"
                  />
                  <span className="text-sm text-gray-700">{opt.label}</span>
                </label>
              ))}
            </div>
          ) : (
            <input
              id={field.name}
              type={field.type}
              {...register(field.name as keyof LeadFormValues)}
              placeholder={field.placeholder}
              className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-mavi-500 focus:ring-1 focus:ring-mavi-500"
            />
          )}
          {errors[field.name as keyof LeadFormValues] && (
            <p className="mt-1 text-sm text-red-600">
              {errors[field.name as keyof LeadFormValues]?.message as string}
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-mavi-600 px-4 py-3 text-sm font-medium text-white hover:bg-mavi-700 focus:ring-2 focus:ring-mavi-500 focus:ring-offset-2 disabled:opacity-70 transition-colors"
      >
        {isSubmitting ? "Gönderiliyor…" : "WhatsApp ile Gönder"}
      </button>
    </form>
  );
}
