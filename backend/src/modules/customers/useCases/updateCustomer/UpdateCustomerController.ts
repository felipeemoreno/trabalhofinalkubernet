import { Request, Response } from 'express';

import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

class UpdateCustomerController {
  constructor(private updateCustomerUseCase: UpdateCustomerUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.headers;

    const { name, email, password } = request.body;
    const customer = await this.updateCustomerUseCase.execute({
      id: String(id),
      name,
      email,
      password,
    });

    return response.json(customer);
  }
}

export { UpdateCustomerController };
