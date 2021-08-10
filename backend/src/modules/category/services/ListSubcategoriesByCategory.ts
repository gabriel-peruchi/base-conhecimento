import { getCustomRepository, Repository } from 'typeorm'

import { CategoryRepository } from '../repositories/CategoryRepository'
import { Category } from '../entities/Category'

interface Subcategory {
  id: string
}

export class ListSubcategoriesByCategory {
  private categoryRepository: Repository<Category>

  constructor() {
    this.categoryRepository = getCustomRepository(CategoryRepository)
  }

  async execute(categoryId: string) {
    const subcategories = await this.categoryRepository.query(`
      WITH RECURSIVE subcategories (id) AS (
        SELECT id FROM categories WHERE id = $1 
        UNION ALL 
        SELECT c.id FROM subcategories, categories c WHERE parent_id = subcategories.id
      )
      SELECT id FROM subcategories
    `, [categoryId])

    return subcategories as Subcategory[]
  }
}
