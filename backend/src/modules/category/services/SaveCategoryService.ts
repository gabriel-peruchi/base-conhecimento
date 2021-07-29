import { getCustomRepository, Repository } from 'typeorm'

import { existsOrError } from '../../../core/validations'
import { CategoryRepository } from '../repositories/CategoryRepository'
import { Category } from '../entities/Category'

class IRequestCategory {
  id: string
  name: string
  parentId: string
}

export class SaveCategoryService {
  private categoryRepository: Repository<Category>

  constructor() {
    this.categoryRepository = getCustomRepository(CategoryRepository)
  }

  async execute({ id, name, parentId }: IRequestCategory) {
    existsOrError(name, 'Nome não informado.')

    if (id) {
      await this.categoryRepository.update(id, { name, parentId })

      return await this.categoryRepository.findOne(id)
    }

    const category = this.categoryRepository.create({ name, parentId })
    
    return await this.categoryRepository.save(category)
  }
}
