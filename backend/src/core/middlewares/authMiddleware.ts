import { Request, Response, NextFunction } from 'express'

import { AuthPayload } from './../../modules/auth/services/SignInService'
import { passport } from '../lib/passport'

export function authMiddleware(request: Request, response: Response, next: NextFunction) {
  passport.authenticate('jwt', { session: false }, (err: any, payload: AuthPayload, info: any) => {
    if (err) {
      return next(err)
    }

    if (!payload) {
      return response.status(401).json({ error: 'Unauthorized' })
    }

    request.user = payload
    
    return next()
  })(request, response, next)
}
