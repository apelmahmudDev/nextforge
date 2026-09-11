import { queryOptions } from "@tanstack/react-query"

import { apiRequest } from "@/lib/api/client"
import type { AuthUser } from "@/lib/auth/types"

type LoginResponse = {
  user: AuthUser
}

const authKeys = {
  all: ["auth"] as const,
  me: () => [...authKeys.all, "me"] as const,
}

const currentUserQuery = () =>
  queryOptions({
    queryKey: authKeys.me(),
    queryFn: () => apiRequest<AuthUser>("/api/auth/me"),
    retry: false,
    staleTime: 5 * 60 * 1000,
  })

const login = (input: {
  username: string
  password: string
  expiresInMins?: number
}) =>
  apiRequest<LoginResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(input),
  })

const logout = () =>
  apiRequest<{ success: true }>("/api/auth/logout", { method: "POST" })

export { authKeys, currentUserQuery, login, logout }
export type { LoginResponse }
