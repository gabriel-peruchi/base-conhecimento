import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('stats')
export class Stat {
  @ObjectIdColumn()
  readonly id: ObjectID

  @Column()
  users: number

  @Column()
  categories: number

  @Column()
  articles: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}
