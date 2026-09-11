"use client"

import { useQuery } from "@tanstack/react-query"

import { postsQuery, todosQuery, usersQuery } from "@/lib/examples/queries"

function QueryState({ isPending, isError }: { isPending: boolean; isError: boolean }) {
  if (isPending) {
    return <p className="text-sm text-muted-foreground">Loading...</p>
  }

  if (isError) {
    return <p className="text-sm text-destructive">Could not load this resource.</p>
  }

  return null
}

export function ExamplesDashboard() {
  const posts = useQuery(postsQuery())
  const todos = useQuery(todosQuery())
  const users = useQuery(usersQuery())

  return (
    <main className="min-h-svh bg-muted/30 p-6 md:p-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            API integration examples
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            TanStack Query resource dashboard
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Typed query functions, stable query keys, shared API handling, and
            cached requests through one consistent pattern.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border bg-background p-5 shadow-sm">
            <h2 className="font-medium">Posts</h2>
            <QueryState isPending={posts.isPending} isError={posts.isError} />
            {posts.data && (
              <p className="mt-4 text-3xl font-semibold">{posts.data.length}</p>
            )}
            <p className="mt-1 text-xs text-muted-foreground">Cached for 1 minute</p>
          </article>

          <article className="rounded-lg border bg-background p-5 shadow-sm">
            <h2 className="font-medium">Users</h2>
            <QueryState isPending={users.isPending} isError={users.isError} />
            {users.data && (
              <p className="mt-4 text-3xl font-semibold">{users.data.length}</p>
            )}
            <p className="mt-1 text-xs text-muted-foreground">Cached for 5 minutes</p>
          </article>

          <article className="rounded-lg border bg-background p-5 shadow-sm">
            <h2 className="font-medium">Todos</h2>
            <QueryState isPending={todos.isPending} isError={todos.isError} />
            {todos.data && (
              <p className="mt-4 text-3xl font-semibold">
                {todos.data.filter((todo) => todo.completed).length}
              </p>
            )}
            <p className="mt-1 text-xs text-muted-foreground">Completed items</p>
          </article>
        </section>
      </div>
    </main>
  )
}