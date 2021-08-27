import { Request, Response } from 'express'

import { SaveUserService } from '../../user/services/SaveUserService'

export class RegisterController {
  async handle(request: Request, response: Response) {
    const saveUserService = new SaveUserService()

    const userReq = {
      ...request.body,
      admin: false
    }

    const user = await saveUserService.execute(userReq)

    return response.json(user)
  }
}
