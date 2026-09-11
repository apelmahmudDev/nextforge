import { NextResponse } from "next/server"

import { apiErrorResponse } from "@/lib/api/route-errors"
import { serverApiRequest } from "@/lib/api/server-client"
import { setAuthTokens } from "@/lib/auth/session"
import { loginSchema, type AuthResponse } from "@/lib/auth/types"

export async function POST(request: Request) {
  const input = loginSchema.safeParse(await request.json())

  if (!input.success) {
    return NextResponse.json(
      { message: "Invalid login request" },
      { status: 400 }
    )
  }

  try {
    const response = await serverApiRequest<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(input.data),
      skipAuth: true,
    })
    const {
      accessToken,
      refreshToken,
      expiresIn,
      refreshTokenExpiresIn,
      ...user
    } = response

    await setAuthTokens({
      accessToken,
      refreshToken,
      accessTokenExpiresIn: expiresIn,
      refreshTokenExpiresIn,
    })

    return NextResponse.json({ user })
  } catch (error) {
    return apiErrorResponse(error)
  }
}
