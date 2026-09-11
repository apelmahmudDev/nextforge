import "server-only"

import { getAccessToken } from "@/lib/auth/session"
import { ApiError } from "@/lib/api/errors"

type ServerApiRequestOptions = RequestInit

async function serverApiRequest<T>(
  path: string,
  options: ServerApiRequestOptions = {}
) {
  const apiBaseUrl = process.env.API_BASE_URL

  if (!apiBaseUrl) {
    throw new Error("API_BASE_URL is not configured")
  }

  const headers = new Headers(options.headers)
  const accessToken = await getAccessToken()

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`)
  }

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json")
  }

  headers.set("x-request-id", crypto.randomUUID())

  const response = await fetch(new URL(path, apiBaseUrl), {
    ...options,
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

export { serverApiRequest }
export type { ServerApiRequestOptions }
