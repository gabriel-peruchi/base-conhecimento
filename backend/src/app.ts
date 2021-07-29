import express from 'express'
import cors from 'cors'

import 'reflect-metadata'
import 'express-async-errors'

import './database/typeorm/connection'

import { routes } from './routes'
import { errorMiddleware } from './core/middlewares/ErrorMiddleware'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(errorMiddleware)

export { app }