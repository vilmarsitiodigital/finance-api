import ICreateDebitDTO from '@modules/debits/dtos/ICreateDebitDTO';
import IUpdateDebitDTO from '@modules/debits/dtos/IUpdateDebitDTO';
import IFindAllDebitsDTO from '@modules/debits/dtos/IFindAllDebitsDTO';
import Debit from '@modules/debits/infra/typeorm/schemas/Debit';

export default interface IDebitRepository {
  create(data: ICreateDebitDTO): Promise<Debit>;
  update(data: IUpdateDebitDTO): Promise<Debit>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Debit | undefined>;
  findAllDebits(data: IFindAllDebitsDTO): Promise<Debit[]>;
}
