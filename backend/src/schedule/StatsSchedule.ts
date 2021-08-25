import { FindLastStatService } from './../modules/stat/services/FindLastStatService';
import nodeSchedule from 'node-schedule'
import { getCustomRepository } from 'typeorm'

import { StatRepository } from './../modules/stat/repositories/StatRepository'
import { ArticleRepository } from './../modules/article/repositories/ArticleRepository'
import { UserRepository } from './../modules/user/repositories/UserRepository'
import { CategoryRepository } from '../modules/category/repositories/CategoryRepository'
import { Stat } from '../modules/stat/entities/Stat'

export class StatsSchedule {
  private userRepository: UserRepository
  private categoryRepository: CategoryRepository
  private articleRepository: ArticleRepository

  private statRepository: StatRepository

  private findLastStatService: FindLastStatService

  constructor() {
    this.userRepository = getCustomRepository(UserRepository)
    this.categoryRepository = getCustomRepository(CategoryRepository)
    this.articleRepository = getCustomRepository(ArticleRepository)

    this.statRepository = getCustomRepository(StatRepository, 'knowledge_stats')

    this.findLastStatService = new FindLastStatService()
  }

  execute() {
    nodeSchedule.scheduleJob('*/1 * * * *', async () => {
      const usersCount = await this.userRepository.count()
      const categoriesCount = await this.categoryRepository.count()
      const articlesCount = await this.articleRepository.count()

      const lastStat = await this.findLastStatService.execute()

      const stat = new Stat()
      stat.users = usersCount
      stat.categories = categoriesCount
      stat.articles = articlesCount

      const changeUsers = lastStat.users !== stat.users
      const changeCategories = lastStat.categories !== stat.categories
      const changeArticles = lastStat.articles !== stat.articles

      if (changeUsers || changeCategories || changeArticles) {
        await this.statRepository.save(stat)
        console.log('[Stats] Updated statistics')
      }
    })
  }
}
