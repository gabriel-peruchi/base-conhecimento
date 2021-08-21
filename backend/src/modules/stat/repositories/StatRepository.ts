import { EntityRepository, MongoRepository } from 'typeorm'
import { Stat } from '../entities/Stat'

@EntityRepository(Stat)
export class StatRepository extends MongoRepository<Stat> { }
