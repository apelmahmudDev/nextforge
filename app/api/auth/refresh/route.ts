import { NextResponse } from "next/server"

import { apiErrorResponse } from "@/lib/api/route-errors"
import { serverApiRequest } from "@/lib/api/server-client"
import { getRefreshToken, setAuthTokens } from "@/lib/auth/session"
import type { AuthResponse } from "@/lib/auth/types"

export async function POST() {
  const refreshToken = await getRefreshToken()

  if (!refreshToken) {
    return NextResponse.json(
      { message: "Refresh token is missing" },
      { status: 401 }
    )
  }

  try {
    const response = await serverApiRequest<AuthResponse>("/auth/refresh", {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
      skipAuth: true,
    })

    await setAuthTokens({
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
      accessTokenExpiresIn: response.expiresIn,
      refreshTokenExpiresIn: response.refreshTokenExpiresIn,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return apiErrorResponse(error)
  }
}
