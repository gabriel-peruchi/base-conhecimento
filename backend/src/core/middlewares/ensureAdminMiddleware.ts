import { Request, Response, NextFunction } from 'express'

export function ensureAdminMiddleware(request: Request, respose: Response, next: NextFunction) {
  if (request.user?.admin) {
    return next()
  }

  return respose.json({ error: 'Unauthorized: non-admin user' })
}
