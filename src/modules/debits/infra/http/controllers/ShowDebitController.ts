import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowDebitService from '@modules/debits/services/ShowDebitService';

export default class ShowDebitController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const listDebit = container.resolve(ShowDebitService);

    const debit = await listDebit.execute(id);

    return res.json(debit);
  }
}
