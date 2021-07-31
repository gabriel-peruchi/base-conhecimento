import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('articles')
export class Article {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column({ name: 'image_url' })
  imageUrl: string

  @Column()
  content: string

  @Column({ name: 'category_id' })
  categoryId: string

  @Column({ name: 'created_by_id' })
  createdById: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
