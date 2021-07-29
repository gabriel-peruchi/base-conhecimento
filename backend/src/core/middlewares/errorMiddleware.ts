import { Request, Response, NextFunction } from 'express'

export function errorMiddleware(error: Error, request: Request, response: Response, next: NextFunction) {
  console.error(error)

  if (error instanceof Error) {
    return response.status(400).json({ error: error.message })
  }

  return response.status(500).json({ error: 'Internal error' })
}
