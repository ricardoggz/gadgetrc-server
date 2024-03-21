import { Router } from "express"
import { getAllCategories } from "../../controllers/index.js"

export const categoryRouter = Router()
categoryRouter.get('/all-categories', getAllCategories)
