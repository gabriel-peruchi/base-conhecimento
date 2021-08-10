import { ListSubcategoriesByCategory } from '../../category/services/ListSubcategoriesByCategory';
import { getCustomRepository } from 'typeorm'

import { ArticleRepository } from '../repositories/ArticleRepository'

export class FindArticlesByCategoryService {
  private articleRepository: ArticleRepository

  constructor() {
    this.articleRepository = getCustomRepository(ArticleRepository)
  }

  async execute(categoryId: string, page: number = 1, rpp: number = 10) {
    const listSubcategoriesByCategory = new ListSubcategoriesByCategory()

    const categories = await listSubcategoriesByCategory.execute(categoryId)
    const categoriesId = categories.map(category => category.id)

    const articles = await this.articleRepository.createQueryBuilder('article')
      .select([
        'article.id',
        'article.name',
        'article.description',
        'article.imageUrl',
        'user.id',
        'user.name'
      ])
      .innerJoin('article.createdBy', 'user')
      .limit(rpp)
      .skip(page * rpp - rpp)
      .where('article.categoryId IN (:...categoriesId)', { categoriesId })
      .orderBy('article.createdAt', 'DESC')
      .getMany()

    return articles
  }
}
