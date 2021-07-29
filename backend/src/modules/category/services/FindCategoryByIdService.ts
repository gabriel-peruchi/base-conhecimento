import { getCustomRepository, Repository } from 'typeorm'

import { CategoryRepository } from '../repositories/CategoryRepository'
import { Category } from '../entities/Category'

export class FindCategoryByIdService {
  private categoryRepository: Repository<Category>

  constructor() {
    this.categoryRepository = getCustomRepository(CategoryRepository)
  }

  async execute(id: string) {
    const category = this.categoryRepository.findOne(id)
    
    return category
  }
}
