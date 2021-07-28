import { Request, Response } from 'express'

import { SaveUserService } from '../services/SaveUserService'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const saveUserService = new SaveUserService()

    const user = await saveUserService.execute(request.body)

    return response.json(user)
  }
}