import { ICustomersRepository } from '../../repositories/ICustomersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}
class CreateCustomerUseCase {
  constructor(private customersRepository: ICustomersRepository) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const customerAlreadyExists = await this.customersRepository.findByEmail(
      email,
    );

    if (customerAlreadyExists) {
      throw new Error('E-mail Already Exists!');
    }

    this.customersRepository.create({ name, email, password });
  }
}

export { CreateCustomerUseCase };
