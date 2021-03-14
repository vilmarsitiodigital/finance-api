import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateDebitService from '@modules/debits/services/CreateDebitService';

export default class CreateDebitController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { user_id, reason, value, date } = req.body;
    const createDebit = container.resolve(CreateDebitService);

    const debit = await createDebit.execute({
      user_id,
      reason,
      value,
      date,
    });

    return res.json(debit);
  }
}
