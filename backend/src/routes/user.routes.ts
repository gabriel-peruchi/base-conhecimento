import { Router } from 'express'

import { CreateUserController } from '../modules/user/controllers/CreateUserController'
import { ListUsersController } from '../modules/user/controllers/ListUsersController'
import { FindUserByIdController } from './../modules/user/controllers/FindUserByIdController'
import { UpdateUserController } from '../modules/user/controllers/UpdateUserController'

const listUsersController = new ListUsersController()
const findUserByIdController = new FindUserByIdController()
const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()

const userRoutes = Router()

userRoutes.get('/', listUsersController.handle)
userRoutes.get('/:id', findUserByIdController.handle)
userRoutes.post('/', createUserController.handle)
userRoutes.put('/:id', updateUserController.handle)

export { userRoutes }