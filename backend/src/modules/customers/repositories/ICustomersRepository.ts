import { Customer } from '../entities/Customer';

interface ICreateCustomerDTO {
  name: string;
  email: string;
  password: string;
}

interface IUpdateCustomerDTO {
  customer: Customer;
  name: string;
  email: string;
  password: string;
}

interface ICustomersRepository {
  create({ name, email, password }: ICreateCustomerDTO): Promise<void>;
  update({
    customer,
    name,
    email,
    password,
  }: IUpdateCustomerDTO): Promise<Customer>;
  list(): Promise<Customer[]>;
  findByid(id: string): Promise<Customer>;
  findByEmail(email: string): Promise<Customer>;
}

export { ICreateCustomerDTO, IUpdateCustomerDTO, ICustomersRepository };
