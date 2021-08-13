import passport from 'passport'
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import { getCustomRepository, Repository } from 'typeorm'

import { AuthPayload } from '../../modules/auth/services/SignInService'
import { User } from '../../modules/user/entities/User'
import { UserRepository } from '../../modules/user/repositories/UserRepository'

const { authSecret } = require('../../../.env')

const optionsStrategy: StrategyOptions = {
  secretOrKey: authSecret, // secret to decode the token
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() // function to extract the auth token from the request 
}

const strategy = new Strategy(optionsStrategy, async (payload: AuthPayload, done) => {
  try {
    const userRepository: Repository<User> = getCustomRepository(UserRepository)

    const user = await userRepository.findOne(payload.id)

    user
      ? done(null, { ...payload })
      : done(null, false)
  } catch (error) {
    done(error, false)
  }
})

passport.use(strategy)

export { passport }
