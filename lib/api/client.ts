import { ApiError } from "@/lib/api/errors"
import { env } from "@/lib/env/client"

type ApiRequestOptions = RequestInit & {
  accessToken?: never
}

function apiUrl(path: string) {
  return new URL(path, env.NEXT_PUBLIC_API_BASE_URL).toString()
}

async function apiRequest<T>(path: string, options: ApiRequestOptions = {}) {
  const headers = new Headers(options.headers)

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json")
  }

  const response = await fetch(path, {
    ...options,
    credentials: "include",
    headers,
  })

  const contentType = response.headers.get("Content-Type")
  const body = contentType?.includes("application/json")
    ? await response.json()
    : await response.text()

  if (!response.ok) {
    throw new ApiError(response.status, body)
  }

  return body as T
}

export { apiRequest, apiUrl }
export type { ApiRequestOptions }
