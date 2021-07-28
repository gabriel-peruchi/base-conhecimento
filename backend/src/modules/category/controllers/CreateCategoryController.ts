import { Request, Response } from 'express'

import { SaveCategoryService } from '../services/SaveCategoryService'

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const saveCategoryService = new SaveCategoryService()
    
    const category = await saveCategoryService.execute(request.body)

    return response.json(category)
  }
}