import { getRepository, Repository } from 'typeorm';

import { Customer } from '../../entities/Customer';
import {
  ICustomersRepository,
  ICreateCustomerDTO,
  IUpdateCustomerDTO,
} from '../ICustomersRepository';

class CustomersRepository implements ICustomersRepository {
  private repository: Repository<Customer>;

  constructor() {
    this.repository = getRepository(Customer);
  }

  async create({ name, email, password }: ICreateCustomerDTO): Promise<void> {
    const customer = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(customer);
  }

  async update({
    customer,
    name,
    email,
    password,
  }: IUpdateCustomerDTO): Promise<Customer> {
    Object.assign(customer, {
      name,
      email,
      password,
      updated_at: new Date(),
    });

    await this.repository.save(customer);

    return customer;
  }

  async list(): Promise<Customer[]> {
    const customers = await this.repository.find();

    return customers;
  }

  async findByid(id: string): Promise<Customer> {
    const customer = await this.repository.findOne({ id });

    return customer;
  }

  async findByEmail(email: string): Promise<Customer> {
    const customer = await this.repository.findOne({ email });

    return customer;
  }
}

export { CustomersRepository };
