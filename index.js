import express from 'express'
import ApiRoute from './src/routes/api.routes.js'
import connectDB from './src/utils/database.js';
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

const PORT = 5000

const errorHandler = (err, req, res, next) => { 
    console.error(err.stack); 
    console.log(err)
    const status = err.statusCode || 500
    const message = err.message? err.message : 'Something Wrong Please try again!'
    res.status(status).send(message); 
}; 
connectDB()

const app = express()
app.use(cors())
app.use('/uploads', express.static('uploads'))
app.use(express.json())
app.use('/api', ApiRoute)
app.use(errorHandler)


app.listen(PORT, () => console.log(`server running on ${PORT}`))