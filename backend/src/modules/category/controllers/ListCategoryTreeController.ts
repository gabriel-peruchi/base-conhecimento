import { Request, Response } from 'express'

import { ListCategoryTreeService } from '../services/ListCategoryTreeService'

export class ListCategoryTreeController {
  async handle(request: Request, response: Response) {
    const listCategoryTreeService = new ListCategoryTreeService()

    const categoryTree = await listCategoryTreeService.execute()

    return response.json(categoryTree)
  }
}
