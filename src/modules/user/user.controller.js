
import { tryCatch } from '../../utils/trycatch'
import * as UserService from './user.service'

const _handleFetchUsers = async (req,res) => {
    // const user = await UserService.fetchUsers()
    res.status(200).json('user')
}

const _handleCreateUser = async(req, res) => {
    const user = await UserService.createUser(req.body)
    res.status(201).json(user)
}
const _handleLoginUser = async(req, res) => {
    const user = await UserService.loginUser(req.body)
    res.status(201).json(user)
}

export const handleFetchUsers = [
    tryCatch(_handleFetchUsers) 
]

export const handleCreateUser = [
    tryCatch(_handleCreateUser)
]

export const handleLoginUser = [
    tryCatch(_handleLoginUser)
]
