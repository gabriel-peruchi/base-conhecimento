import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from '../../user/entities/User'

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

  @JoinColumn({ name: 'created_by_id' })
  @ManyToOne(type => User)
  createdBy: User

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
