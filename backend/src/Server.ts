import 'reflect-metadata'
import 'express-async-errors'

import express, { Express } from 'express'
import cors from 'cors'

import { Postgres } from './database/typeorm/Postgres';
import { Mongo } from './database/typeorm/Mongo';

import { routes } from './routes'
import { errorMiddleware } from './core/middlewares/errorMiddleware'
import { StatsSchedule } from './schedule/StatsSchedule'

export class Server {
  private app: Express

  constructor() {
    this.app = express()
  }

  async listen(port: number) {
    const postgres = new Postgres()
    const mongo = new Mongo()

    await postgres.connect()
    await mongo.connect()

    new StatsSchedule().execute()

    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(routes)
    this.app.use(errorMiddleware)

    return await new Promise(
      (resolve, reject) => this.app.listen(port, resolve as any)
    )
  }
}
