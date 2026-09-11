import { queryOptions } from "@tanstack/react-query"

import { apiRequest } from "@/lib/api/client"
import type {
  CategoryList,
  ProductResponse,
  UserResponse,
} from "@/features/examples/type"

const exampleKeys = {
  all: ["examples"] as const,
  products: () => [...exampleKeys.all, "products"] as const,
  categories: () => [...exampleKeys.all, "categories"] as const,
  users: () => [...exampleKeys.all, "users"] as const,
}

const productsQuery = () =>
  queryOptions({
    queryKey: exampleKeys.products(),
    queryFn: () => apiRequest<ProductResponse>("/api/backend/products"),
    staleTime: 60 * 1000,
  })

const categoriesQuery = () =>
  queryOptions({
    queryKey: exampleKeys.categories(),
    queryFn: () =>
      apiRequest<CategoryList>("/api/backend/products/category-list"),
    staleTime: 60 * 1000,
  })

const usersQuery = () =>
  queryOptions({
    queryKey: exampleKeys.users(),
    queryFn: () => apiRequest<UserResponse>("/api/backend/users"),
    staleTime: 5 * 60 * 1000,
  })

export { categoriesQuery, exampleKeys, productsQuery, usersQuery }
