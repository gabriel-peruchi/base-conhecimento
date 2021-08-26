import { getCustomRepository, Repository } from 'typeorm'

import { existsOrError, notExistsOrError } from '../../../core/validations'
import { Article } from '../../article/entities/Article'
import { User } from '../entities/User'
import { ArticleRepository } from '../../article/repositories/ArticleRepository'
import { UserRepository } from '../repositories/UserRepository'

export class DeleteUserByIdService {
  private userRepository: Repository<User>
  private articleRepository: Repository<Article>

  constructor() {
    this.userRepository = getCustomRepository(UserRepository)
    this.articleRepository = getCustomRepository(ArticleRepository)
  }

  async execute(id: string) {
    const user = await this.userRepository.findOne(id)
    existsOrError(user, 'Usuário não encontrado')

    const articles = await this.articleRepository.find({ createdById: user.id })
    notExistsOrError(articles, 'O usuário possui artigos')

    await this.userRepository.softDelete(user.id)
  }
}
