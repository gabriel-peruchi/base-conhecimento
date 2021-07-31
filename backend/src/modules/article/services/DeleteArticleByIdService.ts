import { getCustomRepository } from 'typeorm'
import { existsOrError } from '../../../core/validations'

import { ArticleRepository } from '../repositories/ArticleRepository'

export class DeleteArticleByIdService {
  private articleRepository: ArticleRepository

  constructor() {
    this.articleRepository = getCustomRepository(ArticleRepository)
  }

  async execute(id: string) {
    const article = await this.articleRepository.findOne(id)
    existsOrError(article, 'Artigo não encontrado.')

    await this.articleRepository.delete(article.id)
  }
}
 