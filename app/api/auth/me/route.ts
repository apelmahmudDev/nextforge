import { NextResponse } from "next/server"

import { apiErrorResponse } from "@/lib/api/route-errors"
import { serverApiRequest } from "@/lib/api/server-client"
import type { AuthUser } from "@/lib/auth/types"

export async function GET() {
  try {
    const user = await serverApiRequest<AuthUser>("/auth/me")

    return NextResponse.json(user)
  } catch (error) {
    return apiErrorResponse(error)
  }
}
