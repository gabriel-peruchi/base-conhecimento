import cors from 'cors'
import express from 'express'

import './database/typeorm/connection'

const app = express()

app.use(express.json())
app.use(cors())

export { app }