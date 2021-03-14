import { container } from 'tsyringe';

import './providers';

import IDebitsRepository from '@modules/debits/repositories/IDebitRepository';
import DebitsRepository from '@modules/debits/infra/typeorm/repositories/DebitsRepository';

container.registerSingleton<IDebitsRepository>(
  'DebitsRepository',
  DebitsRepository,
);
