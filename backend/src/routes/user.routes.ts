import { Router } from 'express'

import { CreateUserController } from '../modules/user/controllers/CreateUserController'
import { ListUsersController } from '../modules/user/controllers/ListUsersController'
import { FindUserByIdController } from '../modules/user/controllers/FindUserByIdController'
import { UpdateUserController } from '../modules/user/controllers/UpdateUserController'
import { DeleteUserByIdController } from '../modules/user/controllers/DeleteUserByIdController'
import { authMiddleware } from '../core/middlewares/authMiddleware'
import { ensureAdminMiddleware } from '../core/middlewares/ensureAdminMiddleware'


const listUsersController = new ListUsersController()
const findUserByIdController = new FindUserByIdController()
const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()
const deleteUserByIdController = new DeleteUserByIdController()

const userRoutes = Router()

userRoutes.use(authMiddleware)
userRoutes.use(ensureAdminMiddleware)

userRoutes.get('/', listUsersController.handle)
userRoutes.get('/:id', findUserByIdController.handle)
userRoutes.post('/', createUserController.handle)
userRoutes.put('/:id', updateUserController.handle)
userRoutes.delete('/:id', deleteUserByIdController.handle)

export { userRoutes }
