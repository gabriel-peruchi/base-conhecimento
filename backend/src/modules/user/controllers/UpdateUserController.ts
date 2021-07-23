import { Request, Response } from 'express'
import { SaveUserService } from '../services/SaveUserService'

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const saveUserService = new SaveUserService()

    const user = {
      id: request.params.id,
      ...request.body
    }

    const userSave = await saveUserService.execute(user)

    return response.json(userSave)
  }
}