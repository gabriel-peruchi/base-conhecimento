declare namespace Express {
  export interface Request {
    user?: {
      id: string
      name: string
      email: string
      admin: boolean
      iat: number
      exp: number
    }
  }
}
