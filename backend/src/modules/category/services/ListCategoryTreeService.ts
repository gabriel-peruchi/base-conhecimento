import { getCustomRepository, Repository } from 'typeorm'
import { CategoryRepository } from '../repositories/CategoryRepository'
import { Category } from './../entities/Category'

interface CategoryTree extends Category {
  children: CategoryTree[]
}

export class ListCategoryTreeService {
  private categoryRepository: Repository<Category>

  constructor() {
    this.categoryRepository = getCustomRepository(CategoryRepository)
  }

  async execute() {
    const mapToTreeCategory = (category: Category) => ({ ...category, children: [] })

    const toTreeCategory = (categories: Category[], tree?: CategoryTree[]) => {
      if (!tree) {
        tree = categories
          .filter(category => !category.parentId)
          .map(mapToTreeCategory)
      }

      tree = tree.map(treeNode => {
        const isChild = (node: Category) => node.parentId === treeNode.id

        treeNode.children = toTreeCategory(
          categories,
          categories.filter(isChild).map(mapToTreeCategory)
        )

        return treeNode
      })

      return tree
    }

    const categories = await this.categoryRepository.find()

    return toTreeCategory(categories)
  }
}
