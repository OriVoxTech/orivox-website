export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="relative isolate min-h-[100dvh] overflow-hidden bg-[#0B0B0D] text-[#FAFAF8]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 14%, rgba(250,250,248,0.08), transparent 34%), radial-gradient(circle at 88% 82%, rgba(0,184,148,0.14), transparent 36%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,250,248,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,248,0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden="true"
        className="motion-drift-slow pointer-events-none absolute -top-32 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full border border-[#FAFAF814]"
      />
      <div
        aria-hidden="true"
        className="motion-drift-alt pointer-events-none absolute -bottom-52 -left-24 h-[34rem] w-[34rem] rounded-full border border-[#FAFAF810]"
      />

      <section className="relative mx-auto grid min-h-[100dvh] w-[min(1160px,92vw)] grid-rows-[auto_1fr_auto] py-8 sm:py-10 lg:py-12">
        <header className="fade-up flex items-center gap-4">
          <div className="grid size-12 place-items-center rounded-2xl border border-[#FAFAF82B] bg-[#24262B]/70 sm:size-14">
            <svg viewBox="0 0 64 64" className="size-7 sm:size-8" aria-hidden="true">
              <circle cx="32" cy="32" r="24" fill="none" stroke="#FAFAF8" strokeWidth="3" />
              <path d="M24 22h10a10 10 0 0 1 0 20H24z" fill="#0B0B0D" />
              <path d="M35 22l8 20" fill="none" stroke="#FAFAF8" strokeWidth="3" />
            </svg>
          </div>
          <p className="font-[var(--font-display)] text-base tracking-[0.16em] uppercase sm:text-lg">
            Orivox
          </p>
        </header>

        <div className="grid items-center gap-10 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-0">
          <div className="fade-up-delayed">
            <p className="mb-5 inline-block rounded-full border border-[#00B89466] bg-[#00B89412] px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-[#00B894] uppercase sm:text-xs">
              Coming Soon
            </p>
            <h1 className="font-[var(--font-display)] text-4xl leading-[0.94] tracking-[-0.03em] sm:text-6xl lg:text-7xl xl:text-8xl">
              Building What&apos;s Next.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#FAFAF8CC] sm:text-lg">
              To help businesses build, launch, and scale through innovative technology,
              thoughtful design, and strategic branding.
            </p>
            <p className="mt-5 text-sm tracking-[0.08em] text-[#FAFAF89E] uppercase">
              From concept to impact.
            </p>
          </div>

          <aside className="fade-up-late grid gap-4 sm:grid-cols-2 lg:grid-cols-1" aria-label="Abstract studio visuals">
            <article className="rounded-3xl border border-[#FAFAF822] bg-[#24262B99] p-5">
              <div className="relative h-32 overflow-hidden rounded-2xl bg-[#0B0B0D]">
                <div className="motion-drift-slow absolute -left-8 top-4 h-20 w-20 rounded-full bg-[#FAFAF815]" />
                <div className="absolute right-4 top-6 h-16 w-28 rounded-[1.6rem] border border-[#FAFAF82A] bg-[#FAFAF807]" />
                <div className="absolute bottom-4 left-6 h-10 w-24 rounded-full border border-[#00B8945C]" />
              </div>
              <p className="mt-3 text-xs tracking-[0.12em] text-[#FAFAF8B2] uppercase">Product Strategy</p>
            </article>

            <article className="rounded-3xl border border-[#FAFAF822] bg-[#24262B99] p-5">
              <div className="relative h-32 overflow-hidden rounded-2xl bg-[#0B0B0D]">
                <div className="absolute left-4 top-5 h-20 w-20 rounded-[2rem] border border-[#FAFAF830]" />
                <div className="motion-drift-alt absolute bottom-2 right-8 h-24 w-24 rounded-full bg-[#00B89420]" />
                <div className="absolute bottom-5 left-16 h-7 w-28 rounded-full border border-[#FAFAF826]" />
              </div>
              <p className="mt-3 text-xs tracking-[0.12em] text-[#FAFAF8B2] uppercase">Software Development</p>
            </article>

            <article className="rounded-3xl border border-[#FAFAF822] bg-[#24262B99] p-5 sm:col-span-2 lg:col-span-1">
              <div className="relative h-24 overflow-hidden rounded-2xl bg-[#0B0B0D]">
                <div className="absolute left-4 top-4 h-4 w-4 rounded-full bg-[#00B894B0]" />
                <div className="absolute left-12 top-4 h-4 w-20 rounded-full bg-[#FAFAF81C]" />
                <div className="absolute left-4 top-12 h-4 w-28 rounded-full border border-[#FAFAF826]" />
                <div className="absolute right-4 top-4 h-16 w-16 rounded-[1.25rem] border border-[#FAFAF830]" />
              </div>
              <p className="mt-3 text-xs tracking-[0.12em] text-[#FAFAF8B2] uppercase">Product Launch</p>
            </article>
          </aside>
        </div>

        <div className="fade-up-late grid gap-4 py-6 sm:grid-cols-3">
          <div className="rounded-full border border-[#FAFAF826] bg-[#24262B80] px-4 py-3 text-center text-xs tracking-[0.2em] uppercase text-[#FAFAF8C8] sm:text-sm">
            Build
          </div>
          <div className="rounded-full border border-[#FAFAF826] bg-[#24262B80] px-4 py-3 text-center text-xs tracking-[0.2em] uppercase text-[#FAFAF8C8] sm:text-sm">
            Launch
          </div>
          <div className="rounded-full border border-[#FAFAF826] bg-[#24262B80] px-4 py-3 text-center text-xs tracking-[0.2em] uppercase text-[#FAFAF8C8] sm:text-sm">
            Scale
          </div>
        </div>

        <footer className="fade-up-late flex flex-col gap-3 border-t border-[#FAFAF826] pt-4 text-xs tracking-[0.04em] text-[#FAFAF8A8] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>Orivox</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:hello@orivox.online"
              className="transition-colors duration-500 hover:text-[#00B894]"
            >
              hello@orivox.online
            </a>
            <a
              href="mailto:info@orivox.online"
              className="transition-colors duration-500 hover:text-[#00B894]"
            >
              info@orivox.online
            </a>
          </div>
          <p>{year}</p>
        </footer>
      </section>
    </main>
  );
}
