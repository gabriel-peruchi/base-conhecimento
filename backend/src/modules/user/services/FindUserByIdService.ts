import { getCustomRepository, Repository } from 'typeorm'

import { User } from '../entities/User'
import { UserRepository } from '../repositories/UserRepository'

export class FindUserByIdService {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = getCustomRepository(UserRepository)
  }

  async execute(id: string) {
    const user = await this.userRepository.findOne(id, {
      select: ['id', 'name', 'email', 'admin']
    })

    return user
  }
}