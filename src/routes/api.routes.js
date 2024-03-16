import { Router } from "express";
import UserRouter from "./user.routes";
import ProductRouter from "./product.routes";
// import PostRouter from "./post.routes";

const ApiRoute = Router()

ApiRoute.use('/user', UserRouter)
ApiRoute.use('/product', ProductRouter)

export default ApiRoute