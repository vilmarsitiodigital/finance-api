import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CreateDebitController from '@modules/debits/infra/http/controllers/CreateDebitController';
import UpdateDebitController from '@modules/debits/infra/http/controllers/UpdateDebitController';
import DeleteDebitController from '@modules/debits/infra/http/controllers/DeleteDebitController';
import ListDebitsController from '@modules/debits/infra/http/controllers/ListDebitsController';
import ShowDebitController from '@modules/debits/infra/http/controllers/ShowDebitController';

const debitsRouter = Router();
const createDebitController = new CreateDebitController();
const updateDebitController = new UpdateDebitController();
const deleteDebitController = new DeleteDebitController();
const listDebitsController = new ListDebitsController();
const showDebitController = new ShowDebitController();

// salvar
debitsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.number().required(),
      reason: Joi.string().required(),
      value: Joi.number().required(),
      date: Joi.date().required(),
    },
  }),
  createDebitController.create,
);

// atualizar
debitsRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
    [Segments.BODY]: {
      user_id: Joi.number().required(),
      reason: Joi.string().required(),
      value: Joi.number().required(),
      date: Joi.date().required(),
    },
  }),
  updateDebitController.update,
);

// deletar
debitsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  deleteDebitController.delete,
);

// deletar todos débitos do usuário
debitsRouter.delete(
  '/all/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  deleteDebitController.all,
);

// listar todos débitos ou somente o relacionado ao user_id
debitsRouter.get('/', listDebitsController.index);

// listar um débito
debitsRouter.get(
  '/show/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  showDebitController.index,
);

export default debitsRouter;
