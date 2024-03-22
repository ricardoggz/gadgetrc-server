import { Router } from "express"
import { getAllProductsByCategory } from "../../controllers/index.js"

export const productRouter = Router()
productRouter.get('/all-products/:id', getAllProductsByCategory)