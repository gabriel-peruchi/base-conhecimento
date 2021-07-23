import { createConnection } from 'typeorm'

createConnection()
  .then(() => console.log('Connection postgres: success'))
  .catch((error) => console.error('Connection postgress failed:', error.message))
  