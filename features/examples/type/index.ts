type ProductResponse = {
  products: unknown[]
  total: number
  skip: number
  limit: number
}

type CategoryList = string[]

type User = {
  id: number
  name: string
  email: string
  company: { name: string }
}

type UserResponse = {
  users: User[]
  total: number
  skip: number
  limit: number
}

export type { CategoryList, ProductResponse, UserResponse }
