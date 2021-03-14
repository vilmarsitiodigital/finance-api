import { startOfHour } from 'date-fns';
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

interface IRequest {
  user_id: number;
  reason: string;
  value: number;
  date: Date;
}

@injectable()
class CreateDebitService {
  constructor(
    @inject('DebitsRepository')
    private debitsRepository: IDebitsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    user_id,
    reason,
    value,
    date,
  }: IRequest): Promise<Debit> {
    if (!user_id || !reason || !value || !date) {
      throw new AppError(
        "You cant't create a debit without the required parameters",
      );
    }
    const debitDate = startOfHour(date);
    const debit = await this.debitsRepository.create({
      user_id,
      reason,
      date: debitDate,
      value,
    });

    await this.cacheProvider.invalidate(`debits-list`);

    return debit;
  }
}

export default CreateDebitService;
