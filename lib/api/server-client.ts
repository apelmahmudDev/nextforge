import "server-only"

import { ApiError } from "@/lib/api/errors"
import { getAccessToken } from "@/lib/auth/session"
import { env } from "@/lib/env/server"

type ServerApiRequestOptions = RequestInit & {
  accessToken?: string | null
  skipAuth?: boolean
}

async function serverApiRequest<T>(
  path: string,
  options: ServerApiRequestOptions = {}
) {
  const {
    accessToken: providedAccessToken,
    skipAuth,
    ...requestOptions
  } = options
  const headers = new Headers(requestOptions.headers)
  const accessToken = skipAuth
    ? providedAccessToken
    : (providedAccessToken ?? (await getAccessToken()))

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`)
  }

  if (requestOptions.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json")
  }

  headers.set("x-request-id", crypto.randomUUID())

  const response = await fetch(new URL(path, env.API_BASE_URL), {
    ...requestOptions,
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
