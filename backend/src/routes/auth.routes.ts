import { Router } from 'express'


import { RegisterController } from './../modules/auth/controllers/RegisterController'
import { SignInController } from './../modules/auth/controllers/SignInController'
import { ValidateTokenController } from './../modules/auth/controllers/ValidateTokenController'

const registerController = new RegisterController()
const signInController = new SignInController()
const validateTokenController = new ValidateTokenController()

const authRoutes = Router()

authRoutes.post('/register', registerController.handle)
authRoutes.post('/login', signInController.handle)
authRoutes.post('/validate-token', validateTokenController.handle)

export { authRoutes }
