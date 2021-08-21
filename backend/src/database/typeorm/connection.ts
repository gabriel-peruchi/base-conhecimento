import { createConnection } from 'typeorm'

createConnection()
  .then(() => console.log('Connection postgres success'))
  .catch((error) => console.error('Connection postgres failed:', error.message))

createConnection('knowledge_stats')
  .then(() => console.log('Connection mongodb success'))
  .catch((error) => console.error('Connection mongodb failed:', error.message))
  