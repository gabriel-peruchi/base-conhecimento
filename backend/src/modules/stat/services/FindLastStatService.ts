import { getCustomRepository } from 'typeorm'

import { StatRepository } from '../repositories/StatRepository'

export class FindLastStatService {
  private statRepositority: StatRepository

  constructor() {
    this.statRepositority = getCustomRepository<StatRepository>(StatRepository, 'knowledge_stats')
  }

  async execute() {
    const lastStat = await this.statRepositority.findOne({ order: { 'created_at': -1 } })

    const defaultStat = {
      users: 0,
      articles: 0,
      categories: 0
    }

    return lastStat || defaultStat
  }
}
