import { Router } from 'express'

import { userRoutes } from './user.routes'
import { articleRoutes } from './article.routes'
import { categoryRoutes } from './category.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/articles', articleRoutes)
routes.use('/categories', categoryRoutes)

export { routes }
