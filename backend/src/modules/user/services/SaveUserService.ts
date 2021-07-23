import bcrypt from 'bcryptjs'
import { getCustomRepository, Repository } from 'typeorm'

import { User } from '../entities/User'
import { UserRepository } from '../repositories/UserRepository'
import { existsOrError, equalsOrError, notExistsOrError } from '../../../core/validations'

class IUser {
  id: string
  name: string
  email: string
  password: string
  confirmPassword: string
  admin: boolean
}

class SaveUserService {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = getCustomRepository(UserRepository)
  }

  async execute({ name, email, password, confirmPassword, admin, id }: IUser) {
    existsOrError(name, 'Nome não informado')
    existsOrError(email, 'Email não informado')
    existsOrError(password, 'Senha não informada')
    existsOrError(confirmPassword, 'Confirmação de senha inválida')
    equalsOrError(password, confirmPassword, 'Senhas não conferem')

    const userEmailExists = await this.userRepository.findOne({ email })

    if (!id) {
      notExistsOrError(userEmailExists, 'Usuário já cadastrado')
    }

    password = await bcrypt.hash(password, 8)

    if (id) {
      await this.userRepository.update(
        { id },
        { name, email, password, admin }
      )

      return await this.userRepository.findOne({ id })
    }

    const user = this.userRepository.create({ name, email, password, admin })
    return await this.userRepository.save(user)
  }
}

export { SaveUserService }