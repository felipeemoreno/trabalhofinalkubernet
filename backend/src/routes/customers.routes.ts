import { Router } from 'express';

import createCustomerController from '../modules/customers/useCases/createCustomer';
import listCustomersController from '../modules/customers/useCases/listCustomers';
import updateCustomerController from '../modules/customers/useCases/updateCustomer';

const customersRoutes = Router();

customersRoutes.post('/', (request, response) => {
  return createCustomerController().handle(request, response);
});

customersRoutes.put('/', (request, response) => {
  return updateCustomerController().handle(request, response);
});

customersRoutes.get('/', (request, response) => {
  return listCustomersController().handle(request, response);
});

export { customersRoutes };
