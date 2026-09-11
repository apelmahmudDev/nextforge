export default function Page() {
  return (
    <main className="min-h-svh overflow-hidden bg-[#10100f] text-[#f4f0e7]">
      <div className="relative isolate">
        <div className="pointer-events-none absolute -top-32 right-[-12rem] -z-10 size-[34rem] rounded-full bg-[#d86f3d]/20 blur-3xl" />
        <div className="pointer-events-none absolute top-[38rem] left-[-14rem] -z-10 size-[30rem] rounded-full bg-[#7ca88a]/10 blur-3xl" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a
            href="#top"
            className="font-heading text-xl font-bold tracking-tight"
          >
            next<span className="text-[#e9824b]">forge</span>
          </a>
          <div className="hidden items-center gap-7 text-xs font-medium text-[#aaa69d] sm:flex">
            <a
              className="transition-colors hover:text-[#f4f0e7]"
              href="#architecture"
            >
              Architecture
            </a>
            <a className="transition-colors hover:text-[#f4f0e7]" href="#stack">
              Stack
            </a>
            <a
              className="transition-colors hover:text-[#f4f0e7]"
              href="#choose"
            >
              Choose a setup
            </a>
            <a className="transition-colors hover:text-[#f4f0e7]" href="#start">
              Get started
            </a>
            <a
              className="text-[#e9824b] transition-colors hover:text-[#f4f0e7]"
              href="/examples"
            >
              Query Lab -&gt;
            </a>
          </div>
          <a
            className="border border-[#4c4a43] px-3 py-2 text-xs font-semibold text-[#f4f0e7] transition-colors hover:border-[#e9824b] hover:text-[#e9824b]"
            href="https://github.com/apelmahmudDev/nextforge"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">-&gt;</span>
          </a>
        </nav>

        <section
          id="top"
          className="mx-auto max-w-7xl px-6 pt-20 pb-28 lg:px-10 lg:pt-28"
        >
          <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#e9824b] uppercase">
                <span className="h-px w-10 bg-[#e9824b]" />A frontend foundation
              </p>
              <h1 className="max-w-4xl font-heading text-[clamp(3.5rem,8vw,7.75rem)] leading-[0.88] font-bold tracking-[-0.05em]">
                Build the interface.
                <span className="block text-[#e9824b]">Own the product.</span>
              </h1>
              <p className="mt-9 max-w-xl text-lg leading-8 text-[#aaa69d]">
                NextForge is a production-minded starter for teams building a
                separate frontend around an existing or future backend. Start
                with structure, boundaries, and the tools you will keep.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  className="bg-[#e9824b] px-5 py-3 text-sm font-bold text-[#171311] transition-transform hover:-translate-y-0.5"
                  href="#start"
                >
                  Start a project <span aria-hidden="true">-&gt;</span>
                </a>
                <a
                  className="border border-[#4c4a43] px-5 py-3 text-sm font-semibold text-[#f4f0e7] transition-colors hover:border-[#e9824b]"
                  href="https://github.com/apelmahmudDev/nextforge"
                  target="_blank"
                  rel="noreferrer"
                >
                  View source
                </a>
              </div>
            </div>

            <div className="border-l border-[#3e3c37] pl-6 lg:mb-2">
              <p className="font-mono text-xs tracking-[0.2em] text-[#77736b] uppercase">
                The point of departure
              </p>
              <p className="mt-5 font-heading text-3xl leading-tight text-[#f4f0e7]">
                A calm, opinionated base for serious frontend work.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-px border border-[#3e3c37] bg-[#3e3c37]">
                {[
                  ["01", "Separate frontend"],
                  ["02", "Typed API boundary"],
                  ["03", "Domain-led structure"],
                  ["04", "Ready to scale"],
                ].map(([number, label]) => (
                  <div className="bg-[#171716] p-4" key={number}>
                    <p className="font-mono text-xs text-[#e9824b]">{number}</p>
                    <p className="mt-3 text-sm text-[#d0ccc2]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#3e3c37] bg-[#171716]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-10">
            <div>
              <p className="font-heading text-4xl text-[#e9824b]">01</p>
              <p className="mt-3 text-sm leading-6 text-[#aaa69d]">
                Connect to any backend through a clear, typed client boundary.
              </p>
            </div>
            <div>
              <p className="font-heading text-4xl text-[#e9824b]">02</p>
              <p className="mt-3 text-sm leading-6 text-[#aaa69d]">
                Keep product domains easy to find, own, test, and evolve.
              </p>
            </div>
            <div>
              <p className="font-heading text-4xl text-[#e9824b]">03</p>
              <p className="mt-3 text-sm leading-6 text-[#aaa69d]">
                Ship a real interface without spending the first week on
                plumbing.
              </p>
            </div>
          </div>
        </section>

        <section
          id="architecture"
          className="mx-auto max-w-7xl scroll-mt-8 px-6 py-28 lg:px-10"
        >
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-[#e9824b] uppercase">
                How it is shaped
              </p>
              <h2 className="mt-5 max-w-sm font-heading text-5xl leading-[0.95] font-bold tracking-[-0.04em]">
                Architecture with room to grow.
              </h2>
              <p className="mt-6 max-w-sm leading-7 text-[#aaa69d]">
                The foundation keeps framework concerns, shared infrastructure,
                and product code in their own lanes.
              </p>
            </div>
            <div className="grid gap-px border border-[#4c4a43] bg-[#4c4a43] sm:grid-cols-2">
              {[
                [
                  "app/",
                  "Routes & composition",
                  "Layouts, metadata, route handlers",
                ],
                [
                  "features/",
                  "Business domains",
                  "Components, hooks, data, types",
                ],
                [
                  "lib/",
                  "Shared infrastructure",
                  "API, auth, env, query utilities",
                ],
                [
                  "components/",
                  "Shared UI",
                  "Providers and reusable primitives",
                ],
              ].map(([path, title, detail]) => (
                <div className="bg-[#10100f] p-7" key={path}>
                  <p className="font-mono text-sm text-[#e9824b]">{path}</p>
                  <h3 className="mt-7 font-heading text-2xl font-bold">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#aaa69d]">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="stack"
          className="border-y border-[#3e3c37] bg-[#d9d2c4] text-[#171716]"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-[#b6532e] uppercase">
                The toolkit
              </p>
              <h2 className="mt-5 max-w-sm font-heading text-5xl leading-[0.95] font-bold tracking-[-0.04em]">
                Modern by default. Familiar by design.
              </h2>
            </div>
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Next.js 16", "App Router and server-first composition"],
                ["React 19", "Modern component model for the web"],
                ["TypeScript", "Strict types from request to screen"],
                ["Tailwind CSS 4", "Fast, expressive interface styling"],
                ["TanStack Query", "Cache-aware server state"],
                ["TanStack Form", "Type-safe, performant form state"],
                ["Zod", "Runtime validation at data boundaries"],
                ["shadcn/ui", "Composable, accessible primitives"],
                ["PWA-ready", "Installable app with service worker support"],
                ["ESLint + Prettier", "Consistent, reviewable code"],
                ["Husky", "Automated checks before commits"],
              ].map(([name, detail]) => (
                <div className="border-t border-[#a49d90] pt-4" key={name}>
                  <h3 className="font-heading text-xl font-bold">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#3e3c37] bg-[#171716]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-xs font-semibold tracking-[0.24em] text-[#e9824b] uppercase">
                  The working agreement
                </p>
                <h2 className="mt-5 max-w-sm font-heading text-5xl leading-[0.95] font-bold tracking-[-0.04em]">
                  A workflow that keeps quality close.
                </h2>
                <p className="mt-6 max-w-sm leading-7 text-[#aaa69d]">
                  The starter is set up for fast iteration without letting
                  boundaries, validation, or review discipline drift.
                </p>
              </div>
              <div className="grid gap-px border border-[#4c4a43] bg-[#4c4a43] sm:grid-cols-3">
                {[
                  [
                    "01 / Validate",
                    "Zod schemas validate external data while strict TypeScript keeps internal contracts explicit.",
                  ],
                  [
                    "02 / Protect",
                    "Husky, ESLint, and Prettier catch quality issues before changes reach the shared branch.",
                  ],
                  [
                    "03 / Collaborate",
                    "AI-assisted development follows AGENTS.md and repository instructions, with human approval for edits and commands.",
                  ],
                ].map(([eyebrow, detail]) => (
                  <div className="bg-[#10100f] p-6" key={eyebrow}>
                    <p className="font-mono text-xs text-[#e9824b]">
                      {eyebrow}
                    </p>
                    <p className="mt-6 text-sm leading-6 text-[#aaa69d]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="choose"
          className="mx-auto max-w-7xl scroll-mt-8 px-6 py-28 lg:px-10"
        >
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#e9824b] uppercase">
              Pick your starting point
            </p>
            <h2 className="mt-5 font-heading text-5xl leading-[0.95] font-bold tracking-[-0.04em]">
              One product idea. Three sensible paths.
            </h2>
            <p className="mt-6 leading-7 text-[#aaa69d]">
              NextForge is for a separate frontend. When your project needs a
              different shape, these established generators are good places to
              begin.
            </p>
          </div>
          <div className="grid gap-px border border-[#4c4a43] bg-[#4c4a43] md:grid-cols-3">
            {[
              {
                eyebrow: "01 / Separate frontend",
                title: "NextForge",
                detail:
                  "Keep your frontend independent from an existing backend with typed API and domain boundaries.",
                href: "https://github.com/apelmahmudDev/nextforge",
                cta: "Use NextForge",
                featured: true,
              },
              {
                eyebrow: "02 / Full-stack app",
                title: "create.t3.gg",
                detail:
                  "Generate a type-safe full-stack application with the T3 Stack when frontend and backend belong together.",
                href: "https://create.t3.gg/",
                cta: "Generate full-stack app",
                featured: false,
              },
              {
                eyebrow: "03 / Monorepo",
                title: "Better-T-Stack",
                detail:
                  "Use a modern CLI to scaffold an end-to-end type-safe TypeScript monorepo with apps/web, apps/server, and apps/mobile.",
                href: "https://www.better-t-stack.dev/",
                cta: "Generate a monorepo",
                featured: false,
              },
            ].map(({ eyebrow, title, detail, href, cta, featured }) => (
              <article
                className={`flex min-h-80 flex-col bg-[#171716] p-7 ${featured ? "border-t-2 border-[#e9824b]" : ""}`}
                key={title}
              >
                <p className="font-mono text-xs text-[#e9824b]">{eyebrow}</p>
                <h3 className="mt-10 font-heading text-3xl font-bold text-[#f4f0e7]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#aaa69d]">
                  {detail}
                </p>
                <a
                  className="mt-auto pt-8 text-sm font-semibold text-[#e9824b] hover:underline"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cta} <span aria-hidden="true">-&gt;</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="start"
          className="mx-auto max-w-7xl scroll-mt-8 px-6 py-28 lg:px-10"
        >
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-[#e9824b] uppercase">
                Start here
              </p>
              <h2 className="mt-5 font-heading text-5xl leading-[0.95] font-bold tracking-[-0.04em]">
                Your next frontend starts in minutes.
              </h2>
              <p className="mt-6 max-w-md leading-7 text-[#aaa69d]">
                Clone the foundation, connect your API, then make the product
                yours. No monorepo overhead required.
              </p>
            </div>
            <div className="border border-[#4c4a43] bg-[#171716] p-6 sm:p-8">
              <p className="mb-4 font-mono text-xs tracking-[0.18em] text-[#77736b] uppercase">
                PowerShell
              </p>
              <pre className="overflow-x-auto font-mono text-sm leading-8 text-[#d8d2c6]">
                <code>
                  <span className="text-[#77736b]"># Clone the starter</span>
                  {"\n"}
                  <span className="text-[#e9824b]">git clone</span>{" "}
                  https://github.com/apelmahmudDev/nextforge my-frontend{"\n"}
                  <span className="text-[#e9824b]">cd</span> my-frontend{"\n"}
                  <span className="text-[#e9824b]">pnpm install</span>
                  {"\n"}
                  <span className="text-[#e9824b]">Copy-Item</span> .env.example
                  .env.local{"\n"}
                  <span className="text-[#e9824b]">pnpm dev</span>
                </code>
              </pre>
              <div className="mt-7 border-t border-[#3e3c37] pt-5 text-xs leading-5 text-[#aaa69d]">
                Requires Node.js 20+, pnpm, and a running backend API. Set{" "}
                <span className="font-mono text-[#f4f0e7]">API_BASE_URL</span>{" "}
                in <span className="font-mono text-[#f4f0e7]">.env.local</span>.
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#3e3c37] px-6 py-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-[#77736b] sm:flex-row">
            <p className="font-heading text-sm font-bold text-[#f4f0e7]">
              next<span className="text-[#e9824b]">forge</span>
            </p>
            <p>
              Separate frontend foundation for products that need room to grow.
            </p>
            <a
              className="text-[#e9824b] hover:underline"
              href="https://github.com/apelmahmudDev/nextforge"
              target="_blank"
              rel="noreferrer"
            >
              github.com/apelmahmudDev/nextforge
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}
