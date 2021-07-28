import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTableCategories1624927318109 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'parent_id',
            type: 'uuid',
            isNullable: true
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
            name: 'FKParentIdCategories',
            referencedTableName: 'categories',
            referencedColumnNames: ['id'],
            columnNames: ['parent_id']
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories')
  }
}
