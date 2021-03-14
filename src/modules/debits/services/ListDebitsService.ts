import { injectable, inject } from 'tsyringe';

import IDebitsRepository from '@modules/debits/repositories/IDebitRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import Debit from '@modules/debits/infra/typeorm/schemas/Debit';

interface IRequest {
  user_id: number;
}

@injectable()
class ListDebitsService {
  constructor(
    @inject('DebitsRepository')
    private debitsRepository: IDebitsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Debit[]> {
    let debits = await this.cacheProvider.recover<Debit[]>(`debits-list`);

    if (!debits) {
      debits = await this.debitsRepository.findAllDebits({
        user_id,
      });

      await this.cacheProvider.save(`debits-list`, debits);
    }

    return debits;
  }
}

export default ListDebitsService;
