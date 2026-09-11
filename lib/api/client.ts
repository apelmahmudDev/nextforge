import { ApiError } from "@/lib/api/errors"

type ApiRequestOptions = RequestInit & {
  accessToken?: never
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

export { apiRequest }
export type { ApiRequestOptions }
