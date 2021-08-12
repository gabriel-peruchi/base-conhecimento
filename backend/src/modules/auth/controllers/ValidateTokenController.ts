import { Request, Response } from 'express'

import { ValidateTokenService } from '../services/ValidateTokenService'

export class ValidateTokenController {
  async handle(request: Request, response: Response) {
    const validateTokenService = new ValidateTokenService()
    
    const token = request.body.token

    const tokenValidation = await validateTokenService.execute(token)

    return response.send(tokenValidation)
  }
}
