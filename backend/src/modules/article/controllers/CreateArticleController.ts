import { Request, Response } from 'express'

import { SaveArticleService } from '../services/SaveArticleService'

export class CreateArticleController {
  async handle(request: Request, response: Response) {
    const saveArticleService = new SaveArticleService()

    const article = await saveArticleService.execute(request.body)

    return response.json(article)
  }
}
