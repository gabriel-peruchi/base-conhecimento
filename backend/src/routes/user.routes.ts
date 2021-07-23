import { Router } from 'express'

import { CreateUserController } from '../modules/user/controllers/CreateUserController'
import { ListUsersController } from '../modules/user/controllers/ListUsersController'

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()

const userRoutes = Router()

userRoutes.get('/', listUsersController.handle)
userRoutes.post('/', createUserController.handle)

export { userRoutes }