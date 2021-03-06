import { Router } from 'express'

import { CreateCategoryController } from '../modules/category/controllers/CreateCategoryController'
import { UpdateCategoryController } from '../modules/category/controllers/UpdateCategoryController'
import { DeleteCategoryController } from './../modules/category/controllers/DeleteCategoryController'
import { ListCategoriesController } from './../modules/category/controllers/ListCategoriesController';
import { FindCategoryByIdController } from './../modules/category/controllers/FindCategoryByIdController'
import { ListCategoryTreeController } from '../modules/category/controllers/ListCategoryTreeController'
import { FindArticlesByCategoryController } from '../modules/article/controllers/FindArticlesByCategoryController'
import { authMiddleware } from '../core/middlewares/authMiddleware'
import { ensureAdminMiddleware } from '../core/middlewares/ensureAdminMiddleware'

const createCategoryController = new CreateCategoryController()
const updateCategoryController = new UpdateCategoryController()
const deleteCategoryController = new DeleteCategoryController()
const listCategoriesController = new ListCategoriesController()
const listCategoryTreeController = new ListCategoryTreeController()
const findCategoryByIdController = new FindCategoryByIdController()
const findArticlesByCategoryController = new FindArticlesByCategoryController()

const categoryRoutes = Router()

categoryRoutes.use(authMiddleware)

categoryRoutes.post('/', ensureAdminMiddleware, createCategoryController.handle)
categoryRoutes.put('/:id', ensureAdminMiddleware, updateCategoryController.handle)
categoryRoutes.get('/', ensureAdminMiddleware, listCategoriesController.handle)
categoryRoutes.get('/tree', listCategoryTreeController.handle)
categoryRoutes.get('/:id', findCategoryByIdController.handle)
categoryRoutes.delete('/:id', ensureAdminMiddleware, deleteCategoryController.handle)
categoryRoutes.get('/:id/articles', findArticlesByCategoryController.handle)

export { categoryRoutes }
