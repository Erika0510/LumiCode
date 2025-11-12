"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function AboutPage() {
  const [idea, setIdea] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // 👇 estado para el campo y error
  const [contact, setContact] = useState("");
  const [contactError, setContactError] = useState("");
  const contactInputRef = useRef<HTMLInputElement | null>(null);

  const maxChars = 400;

  // --- VALIDADORES ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{10,15}$/; // + opcional, 10 a 15 dígitos

  const isValidContact = (value: string) => {
    const v = value.trim();
    return emailRegex.test(v) || phoneRegex.test(v);
  };

  const handleContactChange = (val: string) => {
    setContact(val);
    setContactError(""); // limpia el error mientras escribe
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Validar contacto antes de enviar
    if (!isValidContact(contact)) {
      setContactError(
        "Ingresa un correo válido (con @ y dominio) o un número de WhatsApp/telefono completo (+57… o 10–15 dígitos)."
      );
      // pequeño “shake” y focus
      requestAnimationFrame(() => {
        contactInputRef.current?.focus();
      });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_53ouyr7", // tu Service ID
        "template_7jm4k8w", // tu Template ID
        form,
        "Z6iBFOv-zT2KW7lLd" // tu Public Key
      )
      .then(() => {
        setSent(true);
        setIdea("");
        setContact("");
        form.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
        alert("Ocurrió un error al enviar el formulario. Intenta de nuevo.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="/" className="text-xl font-semibold tracking-tight">
            <span className="text-indigo-400">Lumi</span>Code
          </a>

          <div className="hidden gap-6 text-sm md:flex">
            <a href="/" className="transition-colors hover:text-indigo-400">
              Inicio
            </a>
            <a href="/about" className="transition-colors hover:text-indigo-400">
              Sobre nosotros
            </a>
            <a href="/#proyectos" className="transition-colors hover:text-indigo-400">
              Proyectos
            </a>
            <a href="/#servicios" className="transition-colors hover:text-indigo-400">
              Servicios
            </a>
            
          </div>

          <a
            href="/contacto"
            className="hidden rounded-full bg-indigo-500 px-4 py-1.5 text-sm font-medium text-white shadow-md shadow-indigo-500/30 hover:bg-indigo-400 md:inline-block"
          >
            Cotizar
          </a>
        </nav>
      </header>

      {/* CONTACTO */}
      <section id="contacto" className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold md:text-3xl">Contacto</h2>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            ¿Te gustaría cotizar una página web o aplicación para tu negocio? Cuéntame un
            poco sobre tu proyecto y te responderé lo antes posible.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Datos directos + qué incluye */}
            <div className="space-y-4 text-sm text-slate-200 md:text-base">
              
              <p className="text-xs text-slate-400 md:text-sm">
                También puedes escribirme directamente por WhatsApp con una descripción
                breve de tu negocio y lo que te gustaría lograr con tu página o
                aplicación.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs md:text-sm">
                <p className="font-semibold text-slate-100">
                  ¿Qué incluye una cotización?
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-slate-300">
                  <li>Revisión de tu idea y necesidades.</li>
                  <li>Propuesta de solución (web / app) adaptada a tu negocio.</li>
                  <li>Tiempo estimado de desarrollo.</li>
                  <li>Rango de precios según alcance.</li>
                </ul>
              </div>

              {/* Botones de contacto directo */}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/573138210700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] px-5 py-2 text-sm font-medium text-white shadow-md shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-400/60"
                >
                  💬 Contactar por WhatsApp
                </a>

                <a
                  href="mailto:etbr510@gmail.com"
                  className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900 px-5 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-indigo-400 hover:bg-slate-800"
                >
                  ✉️ Escribir al correo
                </a>
              </div>
            </div>

            {/* Formulario con EmailJS */}
            <form
              className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-slate-200">
                    Nombre / negocio <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="from_name"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="Ej: LumiCode / Juan Pérez"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-slate-200">
                    Correo o WhatsApp <span className="text-red-400">*</span>
                  </label>
                  <input
                    ref={contactInputRef}
                    name="from_email"
                    required
                    value={contact}
                    onChange={(e) => handleContactChange(e.target.value)}
                    aria-invalid={!!contactError}
                    aria-describedby={contactError ? "contact-error" : undefined}
                    className={`w-full rounded-lg border bg-slate-950/70 px-3 py-2 text-sm outline-none transition-all ${
                      contactError
                        ? "border-red-500 ring-1 ring-red-500 animate-shake"
                        : "border-slate-700 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    }`}
                    placeholder="Ej: lumicode@ejemplo.com / +57..."
                  />
                  {contactError && (
                    <p id="contact-error" className="mt-1 text-xs text-red-400">
                      {contactError}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-slate-200">
                  Tipo de proyecto <span className="text-red-400">*</span>
                </label>
                <select
                  name="project_type"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="Página web">Página web</option>
                  <option value="Aplicación web">Aplicación web</option>
                  <option value="Mantenimiento / mejoras">Mantenimiento / mejoras</option>
                  <option value="Otro">Otro (lo explico en el mensaje)</option>
                </select>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-slate-200">Presupuesto aproximado</label>
                  <select
                    name="budget"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Opcional
                    </option>
                    <option value="Bajo / prueba de concepto">Bajo / prueba de concepto</option>
                    <option value="Medio">Medio</option>
                    <option value="Alto">Proyecto más robusto</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-slate-200">Urgencia del proyecto</label>
                  <select
                    name="urgency"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    defaultValue="Sin fecha exacta / Flexible"
                  >
                    <option value="Urgente (menos de 1 mes)">Urgente (menos de 1 mes)</option>
                    <option value="Próximos 2–3 meses">Próximos 2–3 meses</option>
                    <option value="Sin fecha exacta / Flexible">Sin fecha exacta / Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label className="block text-slate-200">
                    Cuéntame tu idea <span className="text-red-400">*</span>
                  </label>
                  <span className="text-xs text-slate-400">
                    {idea.length}/{maxChars}
                  </span>
                </div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  maxLength={maxChars}
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  placeholder="Ej: Tengo un restaurante y necesito una web para mostrar el menú y recibir pedidos por WhatsApp…"
                />
              </div>

              <div className="flex items-start gap-2 text-xs text-slate-400">
                <input
                  type="checkbox"
                  className="mt-1 h-3.5 w-3.5 rounded border border-slate-600 bg-slate-900 text-indigo-500"
                  required
                />
                <p>
                  Acepto que LumiCode use estos datos para contactarme sobre mi proyecto. No se
                  compartirán con terceros.
                </p>
              </div>

              <button
                type="submit"
                disabled={!idea.length || !!contactError || !contact || loading}
                className="w-full rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/30 hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Enviar solicitud de cotización"}
              </button>

              {sent && (
                <p className="mt-3 text-xs text-emerald-400">
                  ✅ ¡Gracias! Tu mensaje ha sido enviado. Te contactaré pronto para revisar tu
                  idea.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Pequeña animación para el “shake” en errores */}
      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-4px);
          }
          40% {
            transform: translateX(4px);
          }
          60% {
            transform: translateX(-3px);
          }
          80% {
            transform: translateX(3px);
          }
        }
        .animate-shake {
          animation: shake 0.25s linear 1;
        }
      `}</style>
    </main>
  );
}
