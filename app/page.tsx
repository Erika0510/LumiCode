"use client";

import { useEffect, useState } from "react";

type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    image: "/images/B-MK_02_2121x.progressive.webp",
    title: "Impulsa tu negocio al mundo digital",
    subtitle:
      "Diseñamos sitios web modernos para que tus clientes confíen y te encuentren más fácil.",
  },
  {
    id: 2,
    image: "/images/technology-4256272_1920.jpg",
    title: "Webs y aplicaciones a la medida",
    subtitle:
      "Transformamos procesos manuales en soluciones tecnológicas simples y efectivas.",
  },
  {
    id: 3,
    image: "/images/tecnologia-na-educação-1920x1000-c-default.png",
    title: "Pensando en el futuro: IA y automatización",
    subtitle:
      "Preparamos tu negocio para integrar chatbots, análisis inteligente y más.",
  },
];

const CAROUSEL_INTERVAL = 3000;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const goNext = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  const goTo = (index: number) => setCurrent(index);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ✅ NAVBAR RESPONSIVO */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="/" className="text-xl font-semibold tracking-tight">
            <span className="text-indigo-400">Lumi</span>Code
          </a>

          {/* Desktop */}
          <div className="hidden md:flex gap-6 text-sm">
            <a href="/" className="hover:text-indigo-400 transition-colors">
              Inicio
            </a>
            <a href="/about" className="hover:text-indigo-400 transition-colors">
              Sobre nosotros
            </a>
            <a
              href="#proyectos"
              className="hover:text-indigo-400 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#servicios"
              className="hover:text-indigo-400 transition-colors"
            >
              Servicios
            </a>
            <a
              href="/contacto"
              className="hover:text-indigo-400 transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* CTA Desktop */}
          <a
            href="/contacto"
            className="hidden md:inline-block rounded-full bg-indigo-500 px-4 py-1.5 text-sm font-medium text-white shadow-md shadow-indigo-500/30 hover:bg-indigo-400"
          >
            Cotizar
          </a>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-200 ring-1 ring-slate-700 rounded-md p-2"
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Panel móvil */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 text-sm">
            <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
              <a href="/" onClick={() => setMenuOpen(false)}>
                Inicio
              </a>
              <a href="/about" onClick={() => setMenuOpen(false)}>
                Sobre nosotros
              </a>
              <a href="#proyectos" onClick={() => setMenuOpen(false)}>
                Proyectos
              </a>
              <a href="#servicios" onClick={() => setMenuOpen(false)}>
                Servicios
              </a>
              <a href="/contacto" onClick={() => setMenuOpen(false)}>
                Contacto
              </a>
              <a
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-indigo-500 px-4 py-2 text-center font-medium text-white hover:bg-indigo-400"
              >
                Cotizar
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO CON CARRUSEL DE FONDO */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Capas del carrusel de fondo */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.4), rgba(15,23,42,0.96)), url(${slide.image})`
            }}
          />
        ))}

        {/* Controles carrusel */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
          <button
            type="button"
            onClick={goPrev}
            className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 text-slate-100 ring-1 ring-slate-700 hover:bg-slate-800"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 text-slate-100 ring-1 ring-slate-700 hover:bg-slate-800"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current ? "w-5 bg-indigo-400" : "bg-slate-500"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Contenido encima del fondo */}
        <div className="relative mx-auto flex max-w-6xl items-center px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-200/80">
              Estudio digital
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              <span className="block text-indigo-300">LumiCode</span>
              <span className="block">
                te acompaña en todo el proceso de tu proyecto digital.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm text-slate-100 md:text-base">
              Desde la primera reunión hasta la entrega final, trabajamos contigo para
              definir qué necesitas, cómo lo vamos a construir, en cuánto tiempo y con qué
              presupuesto. Páginas web y aplicaciones claras, ordenadas y pensadas para tu negocio.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/about#contacto"
                className="rounded-full bg-indigo-500 px-6 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400"
              >
                Agendar primera reunión
              </a>
              <a
                href="#proceso"
                className="rounded-full border border-slate-300/60 px-6 py-2 text-sm font-medium text-slate-100 hover:border-indigo-300 hover:text-indigo-200"
              >
                Ver cómo trabajamos
              </a>
            </div>
          </div>
        </div>
      </section>

     {/* 🔹 PROCESO DE TRABAJO */}
<section id="proceso" className="border-t border-slate-800 bg-slate-950/95">
  <div className="mx-auto max-w-6xl px-4 py-14">
    <h2 className="text-2xl font-semibold md:text-3xl">¿Cómo trabajamos tu proyecto?</h2>
    <p className="mt-3 text-sm text-slate-300 md:text-base max-w-3xl">
      Queremos que sepas exactamente qué va a pasar desde que nos contactas
      hasta que tu página o aplicación está lista. Trabajamos en etapas claras,
      para que siempre tengas visibilidad del avance.
    </p>

    {/* 👉 DATA de pasos (ícono, título, descripción) */}
    {(() => {
      const STEPS = [
        {
          step: 1,
          icon: "📝",
          title: "Reunión y análisis",
          desc:
            "Conversamos sobre tu negocio, qué necesitas mostrar o automatizar, qué te gustaría lograr y qué problemas quieres resolver."
        },
        {
          step: 2,
          icon: "📄",
          title: "Propuesta + tiempo + precio",
          desc:
            "Te presento una propuesta sencilla: qué se hará, tiempos estimados y rango de precios según el alcance acordado."
        },
        {
          step: 3,
          icon: "🎨",
          title: "Diseño y organización",
          desc:
            "Definimos estructura, navegación y estilo visual para que el proyecto se vea profesional, claro y ordenado."
        },
        {
          step: 4,
          icon: "⚙️",
          title: "Desarrollo del proyecto",
          desc:
            "Construyo tu sitio o app con buenas prácticas y tecnologías modernas, compartiendo avances durante el proceso."
        },
        {
          step: 5,
          icon: "🔍",
          title: "Revisión y ajustes",
          desc:
            "Probamos el flujo, validamos contenido y realizamos los cambios necesarios para dejarlo a tu medida."
        },
        {
          step: 6,
          icon: "🚀",
          title: "Entrega y acompañamiento",
          desc:
            "Publicamos y te explico cómo usarlo. Si luego quieres mejoras o nuevas funciones, seguimos trabajando juntas."
        }
      ];

      return (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.step} className="group relative rounded-3xl p-[2px]">
              {/* Borde degradado */}
              <div className="absolute inset-0 -z-10 rounded-3xl opacity-70 transition duration-300"
                   style={{background: "linear-gradient(135deg,#A855F7,#6366F1)"}} />
              {/* Glow externo al hover */}
              <div className="pointer-events-none absolute inset-0 -z-20 rounded-3xl blur-[18px] opacity-0 transition duration-300 group-hover:opacity-80"
                   style={{background: "linear-gradient(135deg,rgba(168,85,247,.6),rgba(99,102,241,.6))"}} />
              
              {/* Contenido */}
              <div className="h-full rounded-3xl bg-slate-900/80 p-5 shadow-[0_10px_30px_rgba(0,0,0,.35)] ring-1 ring-white/5
                              transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_50px_rgba(124,58,237,.35)]">
                <div className="flex items-start gap-4">
                  {/* Icono circular con gradiente */}
                  <div className="grid h-12 w-12 place-items-center rounded-full text-2xl text-white shadow-[0_0_30px_rgba(168,85,247,.45)]
                                  bg-gradient-to-br from-[#A855F7] to-[#6366F1]">
                    {s.icon}
                  </div>

                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-violet-200">
                        Paso {s.step}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-50">{s.title}</h3>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">{s.desc}</p>

                    {/* CTA mini al pasar el mouse */}
                    <div className="mt-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href="/about#contacto"
                        className="inline-flex items-center gap-1 rounded-full bg-violet-500/15 px-3 py-1.5 text-xs font-medium
                                   text-violet-200 ring-1 ring-violet-400/30 hover:bg-violet-500/25"
                      >
                        Quiero este paso <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    })()}
  </div>
</section>

      {/* PROYECTOS */}
      <section id="proyectos" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold md:text-3xl">Proyectos</h2>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            Algunos proyectos que muestran lo que podemos construir:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* MatchLearn */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-lg font-semibold text-slate-50">
                MatchLearn – Intercambio de habilidades
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Plataforma web donde las personas pueden ofrecer y aprender
                habilidades mediante intercambio. Incluye registro, inicio de
                sesión y visualización de cursos.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Tecnologías: React / Next.js, TypeScript, CSS, base de datos.
              </p>
            </article>

            {/* Hackathon */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-lg font-semibold text-slate-50">
                Proyecto Hackathon – Solución para reto real
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Desarrollo en equipo de una solución tecnológica para un reto
                específico, integrando diseño de interfaz, lógica de negocio y
                presentación del valor para los usuarios finales.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Rol: desarrollo frontend, diseño de pantallas y UX.
              </p>
            </article>

            {/* Joyería */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:col-span-2">
              <h3 className="text-lg font-semibold text-slate-50">
                Catálogo digital – Compra y venta de oro, plata y relojes
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Página web pensada para un negocio de compra y venta de oro y
                plata, con catálogo visual, información clara y contacto directo
                para cotizaciones por WhatsApp.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Enfocado en mejorar la confianza, presencia en línea y facilidad
                de contacto.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="border-t border-slate-800 bg-slate-950/90"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold md:text-3xl">Servicios</h2>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            Lo que LumiCode puede hacer por tu negocio:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-indigo-300">
                Páginas web
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Sitios modernos, responsivos y pensados para mostrar tus
                productos, servicios y generar confianza en tus clientes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-indigo-300">
                Aplicaciones web
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Sistemas a la medida para gestionar información, procesos
                internos o interacción con usuarios.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-indigo-300">
                Mantenimiento y mejoras
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Actualización de contenido, optimización visual, corrección de
                errores y mejoras continuas de tu sitio actual.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
