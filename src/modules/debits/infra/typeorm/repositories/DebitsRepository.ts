import { getMongoRepository, MongoRepository } from 'typeorm';

import Debit from '@modules/debits/infra/typeorm/schemas/Debit';
import IDebitsRepository from '@modules/debits/repositories/IDebitRepository';
import ICreateDebitDTO from '@modules/debits/dtos/ICreateDebitDTO';
import IFindAllDebitsDTO from '@modules/debits/dtos/IFindAllDebitsDTO';

class DebitsRepository implements IDebitsRepository {
  private ormRepository: MongoRepository<Debit>;

  constructor() {
    this.ormRepository = getMongoRepository(Debit, 'mongo');
  }

  public async create({
    user_id,
    reason,
    value,
    date,
  }: ICreateDebitDTO): Promise<Debit> {
    const debit = this.ormRepository.create({
      user_id,
      reason,
      value,
      date,
    });

    await this.ormRepository.save(debit);

    return debit;
  }

  public async save(debit: Debit): Promise<Debit> {
    return this.ormRepository.save(debit);
  }

  public async findAllDebits({ user_id }: IFindAllDebitsDTO): Promise<Debit[]> {
    let debits: Debit[];

    if (user_id) {
      debits = await this.ormRepository.find({
        where: {
          user_id,
        },
      });
    } else {
      debits = await this.ormRepository.find();
    }

    return debits;
  }

  public async findById(id: string): Promise<Debit | undefined> {
    const debit = await this.ormRepository.findOne(id);

    return debit;
  }

  public async findByUser(user_id: number): Promise<Debit | undefined> {
    const debit = await this.ormRepository.findOne(user_id);

    return debit;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async deleteAll(id: number): Promise<void> {
    await this.ormRepository.deleteMany({ user_id: id });
  }
}

export default DebitsRepository;
