import { Request, Response } from 'express'

import { FindCategoryByIdService } from '../services/FindCategoryByIdService'

export class FindCategoryByIdController {
  async handle(request: Request, response: Response) {
    const findCategoryByIdService = new FindCategoryByIdService()

    const category = await findCategoryByIdService.execute(request.params.id)

    return response.json(category)
  }
}
