import { Request, Response, NextFunction } from 'express'

import { AuthPayload } from './../../modules/auth/services/SignInService'
import { passport } from '../lib/passport'

export function authMiddleware(request: Request, response: Response, next: NextFunction) {
  passport.authenticate('jwt', (err: any, payload: AuthPayload, info: any) => {
    if (err) {
      return next(err)
    }

    if (!payload) {
      return response.status(401).json({ error: 'Unauthorized' })
    }

    return next()
  })(request, response, next)
}
