"use client"

import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

import { postsQuery, todosQuery, usersQuery } from "@/lib/examples/queries"

function QueryState({
  isPending,
  isError,
}: {
  isPending: boolean
  isError: boolean
}) {
  if (isPending) {
    return <p className="text-sm text-muted-foreground">Loading...</p>
  }

  if (isError) {
    return (
      <p className="text-sm text-destructive">Could not load this resource.</p>
    )
  }

  return null
}

function SourcePath({ children }: { children: string }) {
  return (
    <p className="mt-5 border-t border-border pt-3 font-mono text-[11px] text-muted-foreground">
      {children}
    </p>
  )
}

export function ExamplesDashboard() {
  const posts = useQuery(postsQuery())
  const todos = useQuery(todosQuery())
  const users = useQuery(usersQuery())

  return (
    <main className="min-h-svh bg-muted/30 p-6 md:p-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="border-b border-border pb-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                API integration examples
              </p>
              <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">
                TanStack Query Lab
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                Three live resources, one consistent pattern: typed query
                options, a shared API client, and cache-aware UI states.
              </p>
            </div>
            <Link
              className="text-sm font-semibold text-primary hover:underline"
              href="/"
            >
              Back to NextForge -&gt;
            </Link>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="border border-t-2 border-border border-t-primary bg-background p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-medium">Posts</h2>
              <span className="font-mono text-xs text-muted-foreground">
                01
              </span>
            </div>
            <QueryState isPending={posts.isPending} isError={posts.isError} />
            {posts.data && (
              <p className="mt-4 text-3xl font-semibold">{posts.data.length}</p>
            )}
            <p className="mt-1 text-xs text-muted-foreground">
              Parallel collection query, cached for 1 minute
            </p>
            <SourcePath>lib/examples/queries.ts</SourcePath>
          </article>

          <article className="border border-t-2 border-border border-t-[#6c9a7b] bg-background p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-medium">Users</h2>
              <span className="font-mono text-xs text-muted-foreground">
                02
              </span>
            </div>
            <QueryState isPending={users.isPending} isError={users.isError} />
            {users.data && (
              <p className="mt-4 text-3xl font-semibold">{users.data.length}</p>
            )}
            <p className="mt-1 text-xs text-muted-foreground">
              Longer-lived reference data, cached for 5 minutes
            </p>
            <SourcePath>lib/examples/types.ts</SourcePath>
          </article>

          <article className="border border-t-2 border-border border-t-[#c27a50] bg-background p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-medium">Todos</h2>
              <span className="font-mono text-xs text-muted-foreground">
                03
              </span>
            </div>
            <QueryState isPending={todos.isPending} isError={todos.isError} />
            {todos.data && (
              <p className="mt-4 text-3xl font-semibold">
                {todos.data.filter((todo) => todo.completed).length}
              </p>
            )}
            <p className="mt-1 text-xs text-muted-foreground">
              Derived UI value from fetched server state
            </p>
            <SourcePath>components/examples-dashboard.tsx</SourcePath>
          </article>
        </section>

        <section className="grid gap-4 border border-border bg-background p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Request flow
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight">
              A clear place for every concern.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              Keep the page focused on composition. Query keys, cache policy,
              and API calls stay in the shared examples module.
            </p>
          </div>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
            {[
              ["01", "Query options", "lib/examples/queries.ts"],
              ["02", "Typed boundary", "lib/examples/types.ts"],
              ["03", "Route handler", "app/api/examples/[resource]/route.ts"],
            ].map(([number, title, path]) => (
              <div className="bg-muted/40 p-5" key={number}>
                <p className="font-mono text-xs text-primary">{number}</p>
                <h3 className="mt-6 font-medium">{title}</h3>
                <p className="mt-2 font-mono text-[11px] leading-5 break-words text-muted-foreground">
                  {path}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
