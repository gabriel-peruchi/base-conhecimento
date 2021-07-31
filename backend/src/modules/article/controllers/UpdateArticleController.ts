import { Request, Response } from 'express'

import { SaveArticleService } from '../services/SaveArticleService'

export class UpdateArticleController {
  async handle(request: Request, response: Response) {
    const saveArticleService = new SaveArticleService()

    const article = {
      id: request.params.id,
      ...request.body
    }

    const articleSave = await saveArticleService.execute(article)

    return response.json(articleSave)
  }
}
