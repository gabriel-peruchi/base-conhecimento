import { createConnection } from 'typeorm'
import PostgresConfig from '../../config/postgres'

createConnection({
  type: 'postgres',
  host: PostgresConfig.host,
  port: PostgresConfig.port,
  username: PostgresConfig.username,
  password: PostgresConfig.password,
  database: PostgresConfig.database
})
