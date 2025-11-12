"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export default function AboutPage() {
  const [idea, setIdea] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const maxChars = 400;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setLoading(true);
    console.log("➡️ Enviando formulario...");

    try {
      const res = await emailjs.sendForm(
        "service_53ouyr7",
        "template_7jm4k8w",
        form,
        "Z6iBFOv-zT2KW7lLd"
      );

      console.log("✅ EmailJS OK:", res);
      setSent(true);
      setIdea("");
      form.reset();
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("❌ EmailJS ERROR:", error);
      alert("Ocurrió un error al enviar el formulario. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
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
            <a href="/" className="hover:text-indigo-400 transition-colors">
              Inicio
            </a>
            <a href="/about" className="hover:text-indigo-400 transition-colors">
              Sobre nosotros
            </a>
            <a href="/#proyectos" className="hover:text-indigo-400 transition-colors">
              Proyectos
            </a>
            <a href="/#servicios" className="hover:text-indigo-400 transition-colors">
              Servicios
            </a>
            
          </div>

          <a
            href="#contacto"
            className="hidden rounded-full bg-indigo-500 px-4 py-1.5 text-sm font-medium text-white shadow-md shadow-indigo-500/30 hover:bg-indigo-400 md:inline-block"
          >
            Cotizar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(15,23,42,0.55), rgba(15,23,42,0.85)), url(/images/about-bg.jpg)",
          }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-20 text-center md:py-65">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-200">
            Sobre
          </p>
          <h1 className="mt-1 text-5xl font-extrabold md:text-6xl">Nosotros</h1>
          <p className="mt-6 max-w-3xl text-base text-slate-100/90 leading-relaxed">
          En LumiCode convertimos ideas en productos digitales que inspiran confianza y generan impacto.
          Desarrollamos software, sitios web y soluciones tecnológicas hechas a la medida, combinando diseño, 
          estrategia y tecnología para hacer más fácil el futuro digital de tu negocio.
          </p>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.85)), url(/images/about-team.jpg)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-[#8C7388] to-[#E3B9FB]
                p-6 md:p-8 text-white shadow-lg shadow-purple-500/30
                hover:scale-[1.05] hover:shadow-purple-400/60
                hover:brightness-110 transition-all duration-300 ease-out">
              <h2 className="text-2xl font-bold md:text-3xl"> Misión</h2>
              <p className="mt-4 text-sm text-slate-100 md:text-base leading-relaxed">
                En LumiCode, nuestra misión es impulsar el crecimiento empresarial 
                mediante el desarrollo de tecnologías de información y soluciones digitales inteligentes.
                Diseñamos herramientas que optimizan procesos, mejoran la experiencia del usuario y 
                fortalecen la propuesta de valor de cada organización, convirtiendo la innovación en un 
                motor real de transformación.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#8C7388] to-[#E3B9FB]
                p-6 md:p-8 text-white shadow-lg shadow-purple-500/30
                hover:scale-[1.05] hover:shadow-purple-400/60
                hover:brightness-110 transition-all duration-300 ease-out">
              <h2 className="text-2xl font-bold md:text-3xl"> Visión</h2>
              <p className="mt-4 text-sm text-slate-100 md:text-base leading-relaxed">
               Ser reconocidos como el aliado estratégico más confiable en transformación digital 
               en la región, destacándonos por la calidad, la cercanía y el compromiso genuino con 
               el éxito de nuestros clientes y aliados.
                En LumiCode, aspiramos a construir un ecosistema donde la tecnología inspire, 
                conecte y potencie nuevas oportunidades. </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(10,10,25,0.85), rgba(15,23,42,0.9)), url(/images/about-city.jpg)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <div className="text-center md:text-left md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
              Los valores fundamentales de LumiCode
            </h2>
            <p className="mt-5 text-slate-200/90 text-sm md:text-base leading-relaxed">
              Trabajamos con integridad, colaboración e innovación constante para construir el futuro digital de nuestros clientes con excelencia y compromiso.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="group relative rounded-3xl bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] p-[1px] 
            hover:scale-[1.02] transition-all duration-300">
              <div className="h-full w-full rounded-3xl bg-slate-900 p-6 flex gap-4 items-start shadow-lg shadow-purple-600/30 transition-all duration-300 group-hover:shadow-purple-500/60">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full 
                bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] text-white text-2xl shadow-lg">
                  🧩
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Integridad</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Honestidad, ética y transparencia en cada interacción, construyendo relaciones de confianza duraderas.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] p-[1px] hover:scale-[1.02] transition-all duration-300">
              <div className="h-full w-full rounded-3xl bg-slate-900 p-6 flex gap-4 items-start shadow-lg shadow-purple-600/30 transition-all duration-300 group-hover:shadow-purple-500/60">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] text-white text-2xl shadow-lg">
                  🤝
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Colaboración</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Creemos en el trabajo conjunto con nuestros clientes, fomentando la co-creación de soluciones efectivas y personalizadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                También puedes escribirme directamente por WhatsApp con una
                descripción breve de tu negocio y lo que te gustaría lograr
                con tu página o aplicación.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs md:text-sm">
                <p className="font-semibold text-slate-100">
                  ¿Qué incluye una cotización?
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-slate-300">
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
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] px-5 py-2 text-sm font-medium text-white shadow-md shadow-purple-500/30 hover:scale-105 hover:shadow-purple-400/60 transition-all duration-300"
                >
                  💬 Contactar por WhatsApp
                </a>

                <a
                  href="etbr510@gmail.com"
                  className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900 px-5 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:border-indigo-400 transition-all duration-300"
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
                    placeholder="Ej: LimiCode/Juan Pérez"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-slate-200">
                    Correo o WhatsApp <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="from_email"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="Ej: lumicode@ejemplo.com / +57..."
                  />
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
                  <option value="Mantenimiento / mejoras">
                    Mantenimiento / mejoras
                  </option>
                  <option value="Otro">
                    Otro (lo explico en el mensaje)
                  </option>
                </select>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-slate-200">
                    Presupuesto aproximado
                  </label>
                  <select
                    name="budget"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Opcional
                    </option>
                    <option value="Bajo / prueba de concepto">
                      Bajo / prueba de concepto
                    </option>
                    <option value="Medio">Medio</option>
                    <option value="Alto">Proyecto más robusto</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-slate-200">
                    Urgencia del proyecto
                  </label>
                  <select
                    name="urgency"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    defaultValue="Sin fecha exacta / Flexible"
                  >
                    <option value="Urgente (menos de 1 mes)">
                      Urgente (menos de 1 mes)
                    </option>
                    <option value="Próximos 2–3 meses">
                      Próximos 2–3 meses
                    </option>
                    <option value="Sin fecha exacta / Flexible">
                      Sin fecha exacta / Flexible
                    </option>
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
                  placeholder="Ej: Tengo un restaurante de comida rápida y necesito una página para mostrar el menú y recibir pedidos por WhatsApp..."
                />
              </div>

              <div className="flex items-start gap-2 text-xs text-slate-400">
                <input
                  type="checkbox"
                  className="mt-1 h-3.5 w-3.5 rounded border border-slate-600 bg-slate-900 text-indigo-500"
                  required
                />
                <p>
                  Acepto que LumiCode use estos datos para contactarme sobre mi
                  proyecto. No se compartirán con terceros.
                </p>
              </div>

              <button
                type="submit"
                disabled={!idea.length || loading}
                className="w-full rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/30 hover:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Enviar solicitud de cotización"}
              </button>

              {sent && (
                <p className="mt-3 text-xs text-emerald-400">
                  ✅ ¡Gracias! Tu mensaje ha sido enviado. Te contactaré pronto
                  para revisar tu idea.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
