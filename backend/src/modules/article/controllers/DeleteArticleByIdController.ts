import { Request, Response } from 'express'

import { DeleteArticleByIdService } from '../services/DeleteArticleByIdService'

export class DeleteArticleByIdController {
  async handle(request: Request, response: Response) {
    const deleteArticleByIdService = new DeleteArticleByIdService()

    await deleteArticleByIdService.execute(request.params.id)

    return response.send()
  }
}
