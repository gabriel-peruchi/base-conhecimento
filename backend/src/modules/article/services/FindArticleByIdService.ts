import { getCustomRepository } from 'typeorm'

import { ArticleRepository } from '../repositories/ArticleRepository'

export class FindArticleByIdService {
  private articleRepository: ArticleRepository

  constructor() {
    this.articleRepository = getCustomRepository(ArticleRepository)
  }

  async execute(id: string) {
    const article = await this.articleRepository.findOne(id)
    article.content = article.content.toString()

    return article
  }
}
