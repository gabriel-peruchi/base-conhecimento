import { Request, Response } from 'express'

import { ListArticlesService } from '../services/ListArticlesService'

export class ListArticlesController {
  async handle(request: Request, response: Response) {
    const listArticlesService = new ListArticlesService()

    const page = Number(request.query.page)
    const rpp = Number(request.query.rpp)

    const pageArticles = await listArticlesService.execute(page, rpp)

    return response.json(pageArticles)
  }
}
