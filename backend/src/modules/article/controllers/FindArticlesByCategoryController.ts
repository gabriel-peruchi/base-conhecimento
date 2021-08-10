import { Request, Response } from 'express'

import { FindArticlesByCategoryService } from '../services/FindArticlesByCategoryService'

export class FindArticlesByCategoryController {
  async handle(request: Request, response: Response) {
    const findArticlesByCategoryService = new FindArticlesByCategoryService()

    const categoryId = request.params.id
    const page = request.query.page ? Number(request.query.page) : null
    const rpp = request.query.rpp ? Number(request.query.rpp) : null

    const articles = await findArticlesByCategoryService.execute(categoryId, page, rpp)

    return response.json(articles)
  }
}
