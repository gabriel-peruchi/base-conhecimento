import { Request, Response } from 'express'

import { FindArticleByIdService } from '../services/FindArticleByIdService'

export class FindArticleByIdController {
  async handle(request: Request, response: Response) {
    const findArticleByIdService = new FindArticleByIdService()

    const article = await findArticleByIdService.execute(request.params.id)

    return response.json(article)
  }
}
