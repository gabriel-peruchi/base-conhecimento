import { Router } from 'express'

import { CreateCategoryController } from '../modules/category/controllers/CreateCategoryController' 
import { DeleteCategoryController } from './../modules/category/controllers/DeleteCategoryController'

const createCategoryController = new CreateCategoryController()
const deleteCategoryController = new DeleteCategoryController()

const categoryRoutes = Router()

categoryRoutes.post('/', createCategoryController.handle)
categoryRoutes.delete('/:id', deleteCategoryController.handle)

export { categoryRoutes }
