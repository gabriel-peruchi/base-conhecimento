import { getCustomRepository } from 'typeorm'

import { existsOrError } from '../../../core/validations'
import { Article } from '../entities/Article'
import { ArticleRepository } from '../repositories/ArticleRepository'

export class SaveArticleService {
  private articleRepository: ArticleRepository

  constructor() {
    this.articleRepository = getCustomRepository(ArticleRepository)
  }

  async execute(article: Article) {
    existsOrError(article.name, 'Nome não informado.')
    existsOrError(article.description, 'Descrição não informada.')
    existsOrError(article.categoryId, 'Categoria não informada.')
    existsOrError(article.createdById, 'Autor não informado.')
    existsOrError(article.content, 'Conteúdo não informado.')

    if (article.id) {
      await this.articleRepository.update(article.id, article)

      const articleUpdated = await this.articleRepository.findOne(article.id)
      articleUpdated.content = articleUpdated.content.toString()

      return articleUpdated
    }

    const articleCreated = this.articleRepository.create(article)

    return await this.articleRepository.save(articleCreated)
  }
}
