import { Column, CreateDateColumn, Entity, ObjectIdColumn } from 'typeorm'
import { ObjectId } from 'mongodb'

@Entity('stats')
export class Stat {
  @ObjectIdColumn({ name: '_id' })
  readonly id: ObjectId

  @Column()
  users: number

  @Column()
  categories: number

  @Column()
  articles: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  constructor() {
    if (!this.id) {
      this.id = new ObjectId()
    }
  }
}
