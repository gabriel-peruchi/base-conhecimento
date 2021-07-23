import { Router } from 'express'

import { CreateUserController } from '../modules/user/controllers/CreateUserController'
import { ListUsersController } from '../modules/user/controllers/ListUsersController'
import { UpdateUserController } from '../modules/user/controllers/UpdateUserController'

const listUsersController = new ListUsersController()
const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()

const userRoutes = Router()

userRoutes.get('/', listUsersController.handle)
userRoutes.post('/', createUserController.handle)
userRoutes.put('/:id', updateUserController.handle)

export { userRoutes }