import { Router } from "express";
import * as ProductController from '../modules/product/product.controller'

const ProductRouter = Router();

ProductRouter.get('/', ProductController.handleFetchProducts)
ProductRouter.post('/', ProductController.handleInsertProduct)
ProductRouter.put('/:id', ProductController.handleUpdateProduct)
ProductRouter.delete('/:id', ProductController.handleDeleteProduct)
ProductRouter.get('/:id', ProductController.handleFetchProduct)
export default ProductRouter