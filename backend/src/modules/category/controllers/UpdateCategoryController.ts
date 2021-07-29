import { Request, Response } from 'express'

import { SaveCategoryService } from '../services/SaveCategoryService'

export class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const saveCategoryService = new SaveCategoryService()

    const category = {
      id: request.params.id,
      ...request.body
    }

    const categorySave = await saveCategoryService.execute(category)

    return response.json(categorySave)
  }
}
