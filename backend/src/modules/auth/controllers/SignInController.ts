import { Request, Response } from 'express'

import { SignInService } from './../services/SignInService'

export class SignInController {
  async handle(request: Request, response: Response) {
    const signInService = new SignInService()
    
    const email = request.body.email
    const password = request.body.password

    const authUser = await signInService.execute(email, password)

    return response.json(authUser)
  }
}
