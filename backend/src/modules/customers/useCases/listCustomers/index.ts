import { CustomersRepository } from '../../repositories/implementations/CustomersRepository';
import { ListCustomersController } from './ListCustomersController';
import { ListCustomersUseCase } from './ListCustomersUseCase';

export default (): ListCustomersController => {
  const customersRepository = new CustomersRepository();
  const listCustomerUseCase = new ListCustomersUseCase(customersRepository);
  const listCustomersController = new ListCustomersController(
    listCustomerUseCase,
  );

  return listCustomersController;
};
