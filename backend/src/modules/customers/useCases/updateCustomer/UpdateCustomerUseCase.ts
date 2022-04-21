import { ICustomersRepository } from '../../repositories/ICustomersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UpdateCustomerUseCase {
  constructor(private customersRepository: ICustomersRepository) {}

  async execute({ id, name, email, password }: IRequest): Promise<void> {
    const customer = await this.customersRepository.findByid(id);

    if (!customer) {
      throw new Error('Customer not found!');
    }

    await this.customersRepository.update({ customer, name, email, password });
  }
}

export { UpdateCustomerUseCase };
