import { Request, Response } from 'express';

import { ListCustomersUseCase } from './ListCustomersUseCase';

class ListCustomersController {
  constructor(private listCustomersUseCase: ListCustomersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const customers = await this.listCustomersUseCase.execute();

    return response.json(customers);
  }
}

export { ListCustomersController };
