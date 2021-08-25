import { createConnection } from 'typeorm'

export class Mongo {
  async connect() {
    return await createConnection('knowledge_stats')
  }
}
