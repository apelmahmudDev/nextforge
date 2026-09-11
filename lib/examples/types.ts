type Post = {
  id: number
  title: string
  body: string
}

type Todo = {
  id: number
  title: string
  completed: boolean
}

type User = {
  id: number
  name: string
  email: string
  company: { name: string }
}

export type { Post, Todo, User }