import { getCustomRepository } from 'typeorm'

import { Page } from '../../../core/models/Page'
import { Article } from '../entities/Article'
import { ArticleRepository } from '../repositories/ArticleRepository'

export class ListArticlesService {
  private articleRepository: ArticleRepository

  constructor() {
    this.articleRepository = getCustomRepository(ArticleRepository)
  }

  async execute(page: number, rpp: number) {
    page = page || 1
    rpp = rpp || 10

    const amountArticles = await this.articleRepository.count()

    const articles = await this.articleRepository.find({
      take: rpp,
      skip: page * rpp - rpp,
      select: ['id', 'name', 'description']
    })

    const pageArticles = new Page<Article>()

    pageArticles.page = page
    pageArticles.rpp = rpp
    pageArticles.count = amountArticles
    pageArticles.list = articles

    return pageArticles
  }
}