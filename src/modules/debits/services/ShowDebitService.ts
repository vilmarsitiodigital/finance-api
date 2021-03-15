import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Debit from '@modules/debits/infra/typeorm/schemas/Debit';
import IDebitsRepository from '@modules/debits/repositories/IDebitRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

/**
 * [x] Recebimento das informações
 * [x] Tratativa de erros/excessões
 * [x] Acesso ao repositório
 */

/**
 * Dependency Inversion (SOLID)
 */

@injectable()
class ShowDebitService {
  constructor(
    @inject('DebitsRepository')
    private debitsRepository: IDebitsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(id: string): Promise<Debit> {
    if (!id) {
      throw new AppError(
        "You cant't show a debit without the required parameters",
      );
    }

    const debit = await this.debitsRepository.findById(id);
    if (!debit) {
      throw new AppError('Id resource not found');
    }

    return debit;
  }
}

export default ShowDebitService;
