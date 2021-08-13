import jwt from 'jsonwebtoken'
import { existsOrError } from '../../../core/validations'

import { AuthPayload } from './SignInService'

const { authSecret } = require('../../../../.env')

export class ValidateTokenService {
  async execute(token: string) {
    existsOrError(token, 'Token não informado')

    const tokenVerified = jwt.verify(token, authSecret) as AuthPayload

    if (new Date(tokenVerified.exp * 1000) > new Date()) {
      return { isValid: true }
    }

    return { isValid: false }
  }
}
