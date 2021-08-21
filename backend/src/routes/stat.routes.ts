import { Router } from 'express'

import { FindLastStatController } from '../modules/stat/controllers/FindLastStatController'
import { authMiddleware } from '../core/middlewares/authMiddleware'

const findLastStatController = new FindLastStatController()

const statRoutes = Router()

statRoutes.use(authMiddleware)

statRoutes.get('/', findLastStatController.handle)

export { statRoutes }
