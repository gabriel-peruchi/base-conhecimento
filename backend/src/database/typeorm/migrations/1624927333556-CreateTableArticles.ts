import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTableArticles1624927333556 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'articles',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            length: '1000',
            isNullable: false,
          },
          {
            name: 'image_url',
            type: 'varchar',
            length: '1000'
          },
          {
            name: 'content',
            type: ' bytea',
            isNullable: false
          },
          {
            name: 'category_id',
            type: 'uuid',
            isNullable: false
          },
          {
            name: 'created_by_id',
            type: 'uuid',
            isNullable: false
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'FKCategoryIdArticles',
            referencedTableName: 'categories',
            referencedColumnNames: ['id'],
            columnNames: ['category_id']
          },
          {
            name: 'FKCreatedByArticles',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['created_by_id']
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('articles')
  }
}
