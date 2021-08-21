import { Request, Response } from 'express'
import { FindLastStatService } from '../services/FindLastStatService'

export class FindLastStatController {
  async handle(request: Request, response: Response) {
    const findLastStatService = new FindLastStatService()
    
    const stat = await findLastStatService.execute()

    return response.json(stat)
  }
}
