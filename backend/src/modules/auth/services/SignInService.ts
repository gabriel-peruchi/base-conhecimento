import { getCustomRepository, Repository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { existsOrError } from '../../../core/validations'
import { User } from '../../user/entities/User'
import { UserRepository } from './../../user/repositories/UserRepository'

const { authSecret } = require('../../../../.env')

export interface AuthPayload {
  id: string,
  name: string,
  email: string,
  admin: boolean,
  iat: number,
  exp: number
}

export class SignInService {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = getCustomRepository(UserRepository)
  }

  async execute(email: string, password: string) {
    existsOrError(email, 'Informe o email')
    existsOrError(password, 'Informe a senha')

    const user = await this.userRepository.findOne(
      { email }, 
      { select: ['id', 'name', 'email', 'password'] }
    )

    existsOrError(user, 'Usuário não existe')

    const passwordsMatch = await bcrypt.compare(password, user.password)

    if (!passwordsMatch) {
      throw new Error('Email/senha incorretos')
    }

    const dateNow = Math.floor(Date.now() / 1000)
    
    const payload: AuthPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
      iat: dateNow,
      exp: dateNow + (60 * 60 * 24)
    }

    const token = jwt.sign(payload, authSecret)

    return { ...payload, token }
  }
}
