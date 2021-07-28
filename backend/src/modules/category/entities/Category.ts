import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('categories')
export class Category {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column({ name: 'parent_id' })
  parentId: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  // @JoinColumn()
  // @ManyToOne(type => Category, category => category.parentId)
  // parent: Category

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}