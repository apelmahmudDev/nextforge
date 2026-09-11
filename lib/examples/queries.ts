import { queryOptions } from "@tanstack/react-query"

import { apiRequest } from "@/lib/api/client"
import type { Post, Todo, User } from "@/lib/examples/types"

const exampleKeys = {
  all: ["examples"] as const,
  posts: () => [...exampleKeys.all, "posts"] as const,
  todos: () => [...exampleKeys.all, "todos"] as const,
  users: () => [...exampleKeys.all, "users"] as const,
}

const postsQuery = () =>
  queryOptions({
    queryKey: exampleKeys.posts(),
    queryFn: () => apiRequest<Post[]>("/api/examples/posts"),
    staleTime: 60 * 1000,
  })

const todosQuery = () =>
  queryOptions({
    queryKey: exampleKeys.todos(),
    queryFn: () => apiRequest<Todo[]>("/api/examples/todos"),
    staleTime: 60 * 1000,
  })

const usersQuery = () =>
  queryOptions({
    queryKey: exampleKeys.users(),
    queryFn: () => apiRequest<User[]>("/api/examples/users"),
    staleTime: 5 * 60 * 1000,
  })

export { exampleKeys, postsQuery, todosQuery, usersQuery }
