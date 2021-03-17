import ICreateDebitDTO from '@modules/debits/dtos/ICreateDebitDTO';
import IFindAllDebitsDTO from '@modules/debits/dtos/IFindAllDebitsDTO';
import Debit from '@modules/debits/infra/typeorm/schemas/Debit';

export default interface IDebitRepository {
  create(data: ICreateDebitDTO): Promise<Debit>;
  save(debit: Debit): Promise<Debit>;
  delete(id: string): Promise<void>;
  deleteAll(user_id: number): Promise<void>;
  findById(id: string): Promise<Debit | undefined>;
  findByUser(user_id: number): Promise<Debit | undefined>;
  findAllDebits(data: IFindAllDebitsDTO): Promise<Debit[]>;
}
