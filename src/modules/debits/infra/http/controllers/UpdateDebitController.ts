import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateDebitService from '@modules/debits/services/UpdateDebitService';

export default class DebitsController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { user_id, reason, value, date } = req.body;
    const updateDebit = container.resolve(UpdateDebitService);

    const debit = await updateDebit.execute({
      id,
      user_id,
      reason,
      value,
      date,
    });

    return res.json(debit);
  }
}
