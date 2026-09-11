import { QueryClient } from "@tanstack/react-query"

const queryClientConfig = {
  defaultOptions: {
    queries: {
      gcTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 2,
      staleTime: 30 * 1000,
    },
    mutations: {
      retry: 0,
    },
  },
}

export function makeQueryClient() {
  return new QueryClient(queryClientConfig)
}

let browserQueryClient: QueryClient | undefined

export function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient()
  }

  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient()
  }

  return browserQueryClient
}