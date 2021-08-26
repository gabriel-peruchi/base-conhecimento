import { Request, Response } from 'express'

import { DeleteUserByIdService } from './../services/DeleteUserByIdService'

export class DeleteUserByIdController {
  async handle(request: Request, response: Response) {
    const deleteUserByIdService = new DeleteUserByIdService()

    const usuarioId = request.params.id

    await deleteUserByIdService.execute(usuarioId)

    return response.send()
  }
}
