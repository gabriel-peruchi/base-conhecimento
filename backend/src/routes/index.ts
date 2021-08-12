import { Router } from 'express'

import { authRoutes } from './auth.routes'
import { userRoutes } from './user.routes'
import { articleRoutes } from './article.routes'
import { categoryRoutes } from './category.routes'

const routes = Router()

routes.use('/', authRoutes)
routes.use('/users', userRoutes)
routes.use('/articles', articleRoutes)
routes.use('/categories', categoryRoutes)

export { routes }
