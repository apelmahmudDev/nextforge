import "server-only"

import { cookies } from "next/headers"

const cookiePrefix = process.env.NODE_ENV === "production" ? "__Host-" : ""
const accessTokenCookie = `${cookiePrefix}access-token`
const refreshTokenCookie = `${cookiePrefix}refresh-token`

type AuthTokens = {
  accessToken: string
  refreshToken: string
  accessTokenExpiresIn?: number
  refreshTokenExpiresIn?: number
}

const cookieOptions = {
  httpOnly: true,
  path: "/",
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
}

async function getAccessToken() {
  return (await cookies()).get(accessTokenCookie)?.value
}

async function getRefreshToken() {
  return (await cookies()).get(refreshTokenCookie)?.value
}

async function setAuthTokens(tokens: AuthTokens) {
  const cookieStore = await cookies()

  cookieStore.set(accessTokenCookie, tokens.accessToken, {
    ...cookieOptions,
    maxAge: tokens.accessTokenExpiresIn ?? 15 * 60,
  })
  cookieStore.set(refreshTokenCookie, tokens.refreshToken, {
    ...cookieOptions,
    maxAge: tokens.refreshTokenExpiresIn ?? 30 * 24 * 60 * 60,
  })
}

async function clearAuthTokens() {
  const cookieStore = await cookies()

  cookieStore.delete(accessTokenCookie)
  cookieStore.delete(refreshTokenCookie)
}

export {
  accessTokenCookie,
  clearAuthTokens,
  getAccessToken,
  getRefreshToken,
  refreshTokenCookie,
  setAuthTokens,
}
export type { AuthTokens }
