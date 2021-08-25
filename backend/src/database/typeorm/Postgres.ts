import { createConnection } from 'typeorm'

export class Postgres {
  async connect() {
    return await createConnection()
  }
}
