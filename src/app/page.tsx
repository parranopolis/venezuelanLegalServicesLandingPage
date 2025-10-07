"use client";

// File: app/page.tsx (Next.js 15.5 + Tailwind CSS)
// Landing page for "Venezuelan Legal Services"
// - Semantic HTML + accessible components
// - Metadata for SEO (title, description, openGraph, twitter, robots, canonical)
// - JSON‑LD structured data for LegalService + FAQ
// - Mobile‑first layout, clean typography, and clear CTAs

import Link from "next/link";



function JsonLd() {
  const faq = [
    {
      q: "¿Qué documento necesito para aplicar al asilo?",
      a: "Los requisitos pueden variar. Generalmente, necesitarás tu identificación, pruebas o relatos creíbles de persecución, dirección actual y cualquier documento que respalde tu caso. Te guiamos paso a paso para organizar todo.",
    },
    {
      q: "¿Puedo trabajar mientras espero mi caso?",
      a: "Puedes solicitar el permiso de trabajo (EAD) si cumples con los tiempos y requisitos establecidos. Te ayudamos a preparar y enviar tu solicitud correctamente.",
    },
    {
      q: "¿Es seguro cargar mis documentos?",
      a: "Sí. Usamos almacenamiento cifrado y accesos autenticados. Solo tú y el equipo autorizado pueden ver tus archivos.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Venezuelan Legal Services",
    url: "https://www.venezuelanlegalservices.com/",
    slogan: "Tu proceso legal, más claro que nunca",
    areaServed: { "@type": "Country", name: "United States" },
    availableLanguage: ["es", "en"],
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
    ],
    
    // Add a FAQPage node to boost rich results
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  } as const;

  return (
    <script
      type="application/ld+json"
      // Prevent hydration mismatch
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Page() {
  const services: { title: string; desc: string }[] = [
    { title: "Solicitud de Asilo Político", desc: "Organizamos evidencias y formularios para presentar tu caso con claridad." },
    { title: "Permiso de Trabajo (EAD)", desc: "Validamos tu elegibilidad y preparamos tu solicitud para evitar retrasos." },
    { title: "Visas Estudiantiles", desc: "Asesoría sobre requisitos, formularios y tiempos de respuesta." },
    { title: "Visas Humanitarias", desc: "Orientación en opciones humanitarias según tu situación." },
  ];

  const reasons = [
    { title: "Fácil desde el celular", body: "Carga documentos, revisa avances y firma de forma segura desde tu móvil." },
    { title: "Soporte por WhatsApp", body: "Acompañamiento cercano e ilimitado. Respuestas claras cuando las necesites." },
    { title: "Seguridad real", body: "Datos cifrados y accesos autenticados para proteger tu información." },
    { title: "Acceso 24/7", body: "Consulta tus documentos y estado en cualquier momento." },
  ];

  return (
    <main className="min-h-dvh bg-white text-neutral-900">
      {/* JSON‑LD for rich results */}
      <JsonLd />
      <header>

      </header>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[url('/vzla_flag.jpg')] bg-center bg-cover text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">¿Listo para empezar tu camino legal?</h1>
            <p className="mt-4 text-lg">
              Te guiamos paso a paso en asilo, TPS, permisos de trabajo y más. Documentos organizados, soporte humano, y un panel seguro para ti.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="#contacto" className="inline-block rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-md transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700">
                Agenda una consulta
              </Link>
              <Link href="#servicios" className="inline-block rounded-2xl border border-neutral-300 px-6 py-3transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700">
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section aria-labelledby="por-que" className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="por-que" className="text-2xl font-semibold">¿Por qué Venezuelan Legal Services?</h2>
            <p className="mt-3 text-neutral-700">Beneficios que simplifican tu proceso desde el día uno.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <article key={r.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                <h3 className="text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" aria-labelledby="servicios-title" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="servicios-title" className="text-2xl font-semibold">Servicios legales</h2>
          <p className="mt-3 text-neutral-700">Elige el trámite que necesitas. Te acompañamos de principio a fin.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
              <div className="mt-4">
                <Link href="#contacto" className="inline-block rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800">Empezar</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section aria-labelledby="pasos" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 id="pasos" className="text-2xl font-semibold text-center">Tu proceso legal, más claro que nunca</h2>
          <ol className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2">
            <li className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
              <p className="text-sm font-semibold">Paso 1</p>
              <p className="mt-1 text-sm text-neutral-700">Agenda una consulta y cuéntanos tu caso. Te explicaremos opciones y requisitos.</p>
            </li>
            <li className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
              <p className="text-sm font-semibold">Paso 2</p>
              <p className="mt-1 text-sm text-neutral-700">Preparamos tu documentación y te damos acceso a tu carpeta segura 24/7.</p>
            </li>
            <li className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
              <p className="text-sm font-semibold">Paso 3</p>
              <p className="mt-1 text-sm text-neutral-700">Revisión final y envío del trámite. Seguimiento por WhatsApp.</p>
            </li>
            <li className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
              <p className="text-sm font-semibold">Paso 4</p>
              <p className="mt-1 text-sm text-neutral-700">Acompañamiento continuo: notificaciones de plazos y próximos pasos.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ ACCORDION (semantic <details>) */}
      <section aria-labelledby="faq" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="faq" className="text-2xl font-semibold">¿Tienes dudas?</h2>
          <p className="mt-3 text-neutral-700">Respuestas rápidas para preguntas frecuentes.</p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
          <details className="group p-6" role="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left font-medium">
              <span>¿Qué documento necesito para aplicar al asilo?</span>
              <span aria-hidden className="transition group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-3 text-sm text-neutral-700">
              Depende de tu situación. Te ayudamos a identificar evidencias y a preparar un paquete claro y ordenado.
            </p>
          </details>
          <details className="group p-6" role="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left font-medium">
              <span>¿Puedo trabajar mientras espero mi caso?</span>
              <span aria-hidden className="transition group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-3 text-sm text-neutral-700">
              Si cumples con tiempos y requisitos, puedes solicitar el EAD (permiso de trabajo). Te guiamos paso a paso.
            </p>
          </details>
          <details className="group p-6" role="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left font-medium">
              <span>¿Es seguro cargar mis documentos?</span>
              <span aria-hidden className="transition group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-3 text-sm text-neutral-700">
              Sí. Implementamos controles de acceso y cifrado. Solo personal autorizado puede verlos.
            </p>
          </details>
        </div>
      </section>

      {/* ABOUT */}
      <section aria-labelledby="about" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 id="about" className="text-2xl font-semibold">¿Quiénes somos?</h2>
            <p className="mt-4 text-neutral-700">
              Somos un equipo bilingüe dedicado a que entiendas cada paso de tu proceso migratorio. Nuestro enfoque es práctico: explicar, organizar y acompañar. Te damos
              un panel seguro para tus archivos y te mantenemos al tanto por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contacto" aria-labelledby="cta" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl bg-neutral-900 px-6 py-12 text-white sm:px-10">
          <h2 id="cta" className="text-2xl font-semibold">¿Listo para empezar?</h2>
          <p className="mt-2 text-neutral-200">Agenda una consulta y recibe una checklist personalizada de tu caso.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-xl bg-white px-5 py-3 text-center text-neutral-900 hover:bg-neutral-100">
              Escríbenos por WhatsApp
            </a>
            <a href="mailto:contacto@venezuelanlegalservices.com" className="inline-block rounded-xl border border-white/20 px-5 py-3 text-center hover:bg-white/10">
              contacto@venezuelanlegalservices.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">Venezuelan Legal Services</p>
            <p className="mt-2 text-sm text-neutral-700">El camino para ordenar tu futuro.</p>
          </div>
          <nav aria-label="Navegación secundaria" className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold">Servicios</p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {services.map((s) => (
                  <li key={s.title}><Link href="#servicios" className="hover:underline">{s.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Recursos</p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li><Link href="#faq" className="hover:underline">Preguntas frecuentes</Link></li>
                <li><Link href="#pasos" className="hover:underline">Cómo funciona</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Contacto</p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li><a href="mailto:contacto@venezuelanlegalservices.com" className="hover:underline">Email</a></li>
                <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a></li>
              </ul>
            </div>
          </nav>
          <p className="sm:col-span-3 text-xs text-neutral-500">© {new Date().getFullYear()} Venezuelan Legal Services. Todos los derechos reservados. *No ofrecemos asesoría legal; brindamos orientación y apoyo documental.*</p>
        </div>
      </footer>
    </main>
  );
}
