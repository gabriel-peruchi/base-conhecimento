const { postgres, mongodb } = require('./.env')

module.exports = [
  {
    name: 'knowledge_stats',
    type: 'mongodb',
    host: mongodb.host,
    port: mongodb.port,
    database: mongodb.database,
    useUnifiedTopology: true,
    entities: [
      'src/modules/stat/entities/*.ts'
    ]
  },
  {
    name: 'default',
    type: 'postgres',
    host: postgres.host,
    port: postgres.port,
    username: postgres.user,
    password: postgres.password,
    database: postgres.database,
    entities: [
      'src/modules/article/entities/*.ts',
      'src/modules/category/entities/*.ts',
      'src/modules/user/entities/*.ts'
    ],
    migrations: [
      'src/database/typeorm/migrations/*.ts'
    ],
    cli: {
      'migrationsDir': 'src/database/typeorm/migrations'
    }
  }
]