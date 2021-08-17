import { Router } from 'express'

import { CreateArticleController } from '../modules/article/controllers/CreateArticleController'
import { UpdateArticleController } from '../modules/article/controllers/UpdateArticleController'
import { DeleteArticleByIdController } from '../modules/article/controllers/DeleteArticleByIdController'
import { ListArticlesController } from '../modules/article/controllers/ListArticlesController'
import { FindArticleByIdController } from '../modules/article/controllers/FindArticleByIdController'
import { authMiddleware } from '../core/middlewares/authMiddleware'
import { ensureAdminMiddleware } from '../core/middlewares/ensureAdminMiddleware'

const createArticleController = new CreateArticleController()
const updateArticleController = new UpdateArticleController()
const deleteArticleByIdController = new DeleteArticleByIdController()
const listArticlesController = new ListArticlesController()
const findArticleByIdController = new FindArticleByIdController()

const articleRoutes = Router()

articleRoutes.use(authMiddleware)

articleRoutes.get('/', ensureAdminMiddleware, listArticlesController.handle)
articleRoutes.get('/:id', findArticleByIdController.handle)
articleRoutes.post('/', ensureAdminMiddleware, createArticleController.handle)
articleRoutes.put('/:id', ensureAdminMiddleware, updateArticleController.handle)
articleRoutes.delete('/:id', ensureAdminMiddleware, deleteArticleByIdController.handle)

export { articleRoutes }
