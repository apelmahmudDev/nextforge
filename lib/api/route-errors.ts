import { NextResponse } from "next/server"

import { ApiError } from "@/lib/api/errors"

function apiErrorResponse(error: unknown) {
  if (error instanceof ApiError) {
    return NextResponse.json(error.body, { status: error.status })
  }

  return NextResponse.json(
    { message: "An unexpected API error occurred" },
    { status: 500 }
  )
}

export { apiErrorResponse }
