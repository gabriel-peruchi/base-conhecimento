import { Router } from 'express'

import { CreateCategoryController } from '../modules/category/controllers/CreateCategoryController'
import { UpdateCategoryController } from '../modules/category/controllers/UpdateCategoryController'
import { DeleteCategoryController } from './../modules/category/controllers/DeleteCategoryController'
import { FindCategoryByIdController } from './../modules/category/controllers/FindCategoryByIdController'

const createCategoryController = new CreateCategoryController()
const updateCategoryController = new UpdateCategoryController()
const deleteCategoryController = new DeleteCategoryController()
const findCategoryByIdController = new FindCategoryByIdController()

const categoryRoutes = Router()

categoryRoutes.post('/', createCategoryController.handle)
categoryRoutes.post('/:id', updateCategoryController.handle)
categoryRoutes.get('/:id', findCategoryByIdController.handle)
categoryRoutes.delete('/:id', deleteCategoryController.handle)

export { categoryRoutes }
