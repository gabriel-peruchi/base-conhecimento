import { Request, Response } from 'express'

import { ListArticlesService } from '../services/ListArticlesService'

export class ListArticlesController {
  async handle(request: Request, response: Response) {
    const listArticlesService = new ListArticlesService()

    const page = request.query.page ? Number(request.query.page) : null
    const rpp = request.query.rpp ? Number(request.query.rpp) : null

    const pageArticles = await listArticlesService.execute(page, rpp)

    return response.json(pageArticles)
  }
}
