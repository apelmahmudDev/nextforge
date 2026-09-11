import { NextResponse } from "next/server"

import { apiErrorResponse } from "@/lib/api/route-errors"
import { serverApiRequest } from "@/lib/api/server-client"

const allowedResourceRoots = new Set([
  "carts",
  "posts",
  "products",
  "todos",
  "users",
])

type RouteContext = {
  params: Promise<{ path: string[] }>
}

async function proxyRequest(request: Request, { params }: RouteContext) {
  const { path } = await params
  const [resourceRoot] = path

  if (!resourceRoot || !allowedResourceRoots.has(resourceRoot)) {
    return NextResponse.json({ message: "Resource not found" }, { status: 404 })
  }

  const backendPath = `/${path.map((segment) => encodeURIComponent(segment)).join("/")}`
  const search = new URL(request.url).search
  const contentType = request.headers.get("Content-Type")
  const body = ["GET", "HEAD"].includes(request.method)
    ? undefined
    : await request.text()

  try {
    const response = await serverApiRequest<unknown>(
      `${backendPath}${search}`,
      {
        method: request.method,
        body: body || undefined,
        headers: contentType ? { "Content-Type": contentType } : undefined,
      }
    )

    return NextResponse.json(response)
  } catch (error) {
    return apiErrorResponse(error)
  }
}

export const GET = proxyRequest
export const POST = proxyRequest
export const PUT = proxyRequest
export const PATCH = proxyRequest
export const DELETE = proxyRequest
