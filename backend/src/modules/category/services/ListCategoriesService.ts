import { getCustomRepository, Repository } from 'typeorm'

import { CategoryRepository } from '../repositories/CategoryRepository'
import { Category } from '../entities/Category'

export class ListCategoriesService {
  private categoryRepository: Repository<Category>

  constructor() {
    this.categoryRepository = getCustomRepository(CategoryRepository)
  }

  async execute() {
    const getParent = (categories: Category[], parentId: string) => {
      const parent = categories.find(category => category.id === parentId)

      return parent || null
    }

    const categories = await this.categoryRepository.find()

    const categoriesWithPath = categories.map(category => {
      let path = category.name
      let parent = getParent(categories, category.parentId)

      while (parent) {
        path = `${parent.name} > ${path}`

        parent = getParent(categories, parent.parentId)
      }

      return { ...category, path }
    })

    categoriesWithPath.sort((categoryA, categoryB) => {
      if (categoryA.path < categoryB.path) return -1
      if (categoryA.path > categoryB.path) return 1
      return 0
    })

    return categoriesWithPath
  }
}
