import { Customer } from '../../entities/Customer';
import { ICustomersRepository } from '../../repositories/ICustomersRepository';

class ListCustomersUseCase {
  constructor(private iCustomersRepository: ICustomersRepository) {}

  async execute(): Promise<Customer[]> {
    const customers = await this.iCustomersRepository.list();

    return customers;
  }
}
export { ListCustomersUseCase };
