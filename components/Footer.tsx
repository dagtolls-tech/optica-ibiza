import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <span className="font-elegant text-2xl font-extrabold tracking-tight text-bone">
            Cati <span className="text-aceroLight">Villaoslada</span>
          </span>
          <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone/45">
            Una marca de Óptica Ibiza
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-bone/55">
            Óptica especializada y centro auditivo en Benidorm desde {SITE.since}.
            La óptica que de verdad se preocupa por ti.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-bone/40">
            Dónde estamos
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-bone/75">
            {SITE.address}
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-bone/40">
            Contacto
          </h3>
          <a
            href={SITE.phoneHref}
            data-cursor="hover"
            className="mt-4 block text-sm text-bone/75 transition-colors hover:text-bone"
          >
            {SITE.phone}
          </a>
          <p className="mt-2 text-sm text-bone/55">Óptica · Audiología · Lentes de contacto</p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl justify-center px-6">
        <a
          href="https://www.opticaibiza.es/"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          className="group inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-7 py-2.5 text-white shadow-[0_12px_30px_-10px_rgba(37,99,235,0.8)] ring-1 ring-white/15 transition-all duration-300 hover:bg-[#1d4ed8] hover:scale-[1.03]"
        >
          <span className="font-elegant text-lg italic leading-none">
            Nuestra página informativa
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-bone/40 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </span>
          <span>Benidorm · desde {SITE.since}</span>
        </div>
      </div>
    </footer>
  );
}
