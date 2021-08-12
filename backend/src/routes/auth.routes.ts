import { Router } from 'express'


import { CreateUserController } from './../modules/user/controllers/CreateUserController'
import { SignInController } from './../modules/auth/controllers/SignInController'
import { ValidateTokenController } from './../modules/auth/controllers/ValidateTokenController'

const createUserController = new CreateUserController()
const signInController = new SignInController()
const validateTokenController = new ValidateTokenController()

const authRoutes = Router()

authRoutes.post('/register', createUserController.handle)
authRoutes.post('/login', signInController.handle)
authRoutes.post('/validate-token', validateTokenController.handle)

export { authRoutes }
