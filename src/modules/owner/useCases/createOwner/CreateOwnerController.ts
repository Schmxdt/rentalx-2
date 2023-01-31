import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOwnerUseCase } from "./CreateOwnerUseCase";

class CreateOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, celular, inativo } = request.body;

    const createOwnerUseCase = container.resolve(CreateOwnerUseCase);

    const owner = await createOwnerUseCase.execute({
      id,
      name,
      celular,
      inativo
    });

    return response.status(201).json(owner);
  }
}

export { CreateOwnerController };