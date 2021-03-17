import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteDebitService from '@modules/debits/services/DeleteDebitService';

export default class DeleteDebitController {
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteDebit = container.resolve(DeleteDebitService);

    await deleteDebit.execute({
      id,
    });

    return res.json({ status: 200 });
  }

  public async all(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteDebit = container.resolve(DeleteDebitService);

    await deleteDebit.all(Number(id));

    return res.json({ status: 200 });
  }
}
