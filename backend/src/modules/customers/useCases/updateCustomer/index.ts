import { CustomersRepository } from '../../repositories/implementations/CustomersRepository';
import { UpdateCustomerController } from './UpdateCustomerController';
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

export default () => {
  const customersRepository = new CustomersRepository();
  const updateCustomerUseCase = new UpdateCustomerUseCase(customersRepository);
  const updateCustomerController = new UpdateCustomerController(
    updateCustomerUseCase,
  );

  return updateCustomerController;
};
