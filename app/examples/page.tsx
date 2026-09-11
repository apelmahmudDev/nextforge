import type { Metadata } from "next"

import { ExamplesDashboard } from "@/components/examples-dashboard"

export const metadata: Metadata = {
  title: "TanStack Query Lab | NextForge",
  description: "Working TanStack Query data-fetching examples in NextForge.",
}

export default function ExamplesPage() {
  return <ExamplesDashboard />
}
