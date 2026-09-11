import { z } from "zod"

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  expiresInMins: z.number().int().positive().optional(),
})

type AuthUser = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
}

type AuthResponse = AuthUser & {
  accessToken: string
  refreshToken: string
  expiresIn?: number
  refreshTokenExpiresIn?: number
}

export { loginSchema }
export type { AuthResponse, AuthUser }
