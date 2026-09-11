import "server-only"

import { ApiError } from "@/lib/api/errors"
import { getAccessToken } from "@/lib/auth/session"
import { env } from "@/lib/env/server"

type ServerApiRequestOptions = RequestInit

async function serverApiRequest<T>(
  path: string,
  options: ServerApiRequestOptions = {}
) {
  const headers = new Headers(options.headers)
  const accessToken = await getAccessToken()

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`)
  }

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json")
  }

  headers.set("x-request-id", crypto.randomUUID())

  const response = await fetch(new URL(path, env.API_BASE_URL), {
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
