import { Router } from 'express'

import { authRoutes } from './auth.routes'
import { userRoutes } from './user.routes'
import { articleRoutes } from './article.routes'
import { categoryRoutes } from './category.routes'
import { statRoutes } from './stat.routes'

const routes = Router()

routes.use('/', authRoutes)
routes.use('/stats', statRoutes)
routes.use('/users', userRoutes)
routes.use('/articles', articleRoutes)
routes.use('/categories', categoryRoutes)

export { routes }
