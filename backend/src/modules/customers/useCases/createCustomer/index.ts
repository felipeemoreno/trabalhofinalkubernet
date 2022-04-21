import { CustomersRepository } from '../../repositories/implementations/CustomersRepository';
import { CreateCustomerController } from './CreateCustomerController';
import { CreateCustomerUseCase } from './CreateCustomerUseCase';

export default (): CreateCustomerController => {
  const customersRepository = new CustomersRepository();
  const createCustomerUseCase = new CreateCustomerUseCase(customersRepository);
  const createCustomerController = new CreateCustomerController(
    createCustomerUseCase,
  );

  return createCustomerController;
};
