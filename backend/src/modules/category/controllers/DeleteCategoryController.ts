import { Request, Response } from 'express'

import { DeleteCategoryService } from './../services/DeleteCategoryService'

export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const deleteCategoryService = new DeleteCategoryService()
    
    await deleteCategoryService.execute(request.params.id)

    return response.send()
  }
}
