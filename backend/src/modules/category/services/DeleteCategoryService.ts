import { getCustomRepository, Repository } from 'typeorm'

import { existsOrError, notExistsOrError } from '../../../core/validations'
import { Article } from '../../article/entities/Article'
import { ArticleRepository } from '../../article/repositories/ArticleRepository'
import { CategoryRepository } from '../repositories/CategoryRepository'
import { Category } from './../entities/Category'


export class DeleteCategoryService {
  private categoryRepository: Repository<Category>
  private articleRepository: Repository<Article>

  constructor() {
    this.categoryRepository = getCustomRepository(CategoryRepository)
    this.articleRepository = getCustomRepository(ArticleRepository)
  }

  async execute(id: string) {
    const category = await this.categoryRepository.findOne(id)
    existsOrError(category, 'Categoria não encontrada.')

    const subcategory = await this.categoryRepository.find({ parentId: category.id })
    notExistsOrError(subcategory, 'Categoria possui subcategorias.')

    const articles = await this.articleRepository.find({ categoryId: category.id })
    notExistsOrError(articles, 'Categoria possui artigos.')

    await this.categoryRepository.delete({ id })
  }
}
