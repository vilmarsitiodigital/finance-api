import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListDebitsService from '@modules/debits/services/ListDebitsService';

export default class DebitsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.query;
    const listDebits = container.resolve(ListDebitsService);

    const debits = await listDebits.execute({ user_id: Number(user_id) });

    return res.json(debits);
  }
}
