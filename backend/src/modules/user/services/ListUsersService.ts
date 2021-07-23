import { getCustomRepository, Repository } from 'typeorm'

import { User } from '../entities/User'
import { UserRepository } from '../repositories/UserRepository'

export class ListUsersService {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = getCustomRepository(UserRepository)
  }

  async execute() {
    const users = await this.userRepository.find({
      select: ['id', 'name', 'email', 'admin']
    })

    return users
  }
}