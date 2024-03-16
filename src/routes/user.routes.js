import { Router } from "express";
import * as UserController from '../modules/user/user.controller'

const UserRouter = Router();

UserRouter.post('/register', UserController.handleCreateUser)
UserRouter.post('/login', UserController.handleLoginUser)
UserRouter.get('/',UserController.handleFetchUsers)

export default UserRouter