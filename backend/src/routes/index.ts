import { Router } from 'express'

import { userRoutes } from './user.routes'
import { categoryRoutes } from './category.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/categories', categoryRoutes)

export { routes }