import { Request, Response } from 'express';

import { CreateCustomerUseCase } from './CreateCustomerUseCase';

class CreateCustomerController {
  constructor(private createCustomerUseCase: CreateCustomerUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;

      await this.createCustomerUseCase.execute({ name, email, password });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateCustomerController };
