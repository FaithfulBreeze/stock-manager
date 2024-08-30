import express from 'express'
import dbConnect from './model/connection'
import cors from 'cors'
import rootRoutes from './routes/root'
import apiRoutes from './routes/api'
export const app = express()

dbConnect()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(express.static(`${__dirname}/public`))

app.use('/', rootRoutes)
app.use('/api/', apiRoutes)
