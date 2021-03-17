import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

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

interface IRequest {
  id: string;
}

@injectable()
class DeleteDebitService {
  constructor(
    @inject('DebitsRepository')
    private debitsRepository: IDebitsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    if (!id) {
      throw new AppError(
        'You not can delete a debit without the required parameters',
      );
    }

    const findDebit = await this.debitsRepository.findById(id);
    if (!findDebit) {
      throw new AppError('Id resource not found');
    }

    await this.debitsRepository.delete(id);

    await this.cacheProvider.invalidate(`debits-list`);
  }

  public async all(user_id: number): Promise<void> {
    if (!user_id) {
      throw new AppError(
        'You not can delete a debit without the required parameters',
      );
    }

    const findDebit = await this.debitsRepository.findByUser(user_id);
    if (!findDebit) {
      throw new AppError('Id resource not found');
    }

    await this.debitsRepository.deleteAll(user_id);

    await this.cacheProvider.invalidate(`debits-list`);
  }
}

export default DeleteDebitService;
