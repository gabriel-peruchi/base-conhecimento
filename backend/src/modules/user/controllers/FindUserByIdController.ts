import { Request, Response } from 'express'

import { FindUserByIdService } from './../services/FindUserByIdService'

export class FindUserByIdController {
  async handle(request: Request, response: Response) {
    const findUserByIdService = new FindUserByIdService()

    const usuarioId = request.params.id

    const usuario = await findUserByIdService.execute(usuarioId)

    return response.json(usuario)
  }
}