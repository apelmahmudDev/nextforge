import Link from "next/link"

import { SignIn } from "@/features/auth/components/sign-in"

export default function LoginPage() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[#10100f] text-[#f4f0e7]">
      <div className="pointer-events-none absolute -top-48 right-[-10rem] size-[34rem] rounded-full bg-[#d86f3d]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 left-[-12rem] size-[30rem] rounded-full bg-[#1a5552]/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-svh w-full max-w-7xl flex-col px-6 py-6 lg:px-10">
        <header className="flex items-center justify-between">
          <Link
            className="font-heading text-xl font-bold tracking-tight"
            href="/"
          >
            next<span className="text-[#e9824b]">forge</span>
          </Link>
          <Link
            className="text-xs font-semibold text-[#aaa69d] transition-colors hover:text-[#f4f0e7]"
            href="/"
          >
            Back to home <span aria-hidden="true">-&gt;</span>
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:py-24">
          <div className="max-w-lg">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#e9824b] uppercase">
              <span className="h-px w-10 bg-[#e9824b]" /> Member access
            </p>
            <h2 className="font-heading text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl">
              A quieter way into your product.
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-[#aaa69d]">
              Sign in through the frontend boundary. Authentication stays on the
              server, while your interface gets a clean, typed session.
            </p>
            <div className="mt-10 grid max-w-sm grid-cols-2 gap-px border border-[#3e3c37] bg-[#3e3c37]">
              <div className="bg-[#171716] p-4">
                <p className="font-mono text-xs text-[#e9824b]">01</p>
                <p className="mt-3 text-sm text-[#d0ccc2]">
                  Server-side session
                </p>
              </div>
              <div className="bg-[#171716] p-4">
                <p className="font-mono text-xs text-[#e9824b]">02</p>
                <p className="mt-3 text-sm text-[#d0ccc2]">Cached user state</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <SignIn />
          </div>
        </div>

        <footer className="flex items-center justify-between border-t border-[#3e3c37] pt-5 text-[11px] text-[#77736b]">
          <span>NextForge authentication foundation</span>
          <span className="font-mono">BFF / SESSION</span>
        </footer>
      </div>
    </main>
  )
}
