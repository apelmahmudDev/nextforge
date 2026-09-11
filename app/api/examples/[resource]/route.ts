import { NextResponse } from "next/server"

const API_BASE_URL = "https://dummyjson.com"

const resourcePaths = {
  products: "products",
  "category-list": "products/category-list",
  users: "users",
} as const

type Resource = keyof typeof resourcePaths

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ resource: string }> }
) {
  const { resource } = await params

  if (!Object.hasOwn(resourcePaths, resource)) {
    return NextResponse.json({ message: "Resource not found" }, { status: 404 })
  }

  const endpoint = resourcePaths[resource as Resource]
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    return NextResponse.json(
      { message: "Example API request failed" },
      { status: response.status }
    )
  }

  return NextResponse.json(await response.json())
}
