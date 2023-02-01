import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateOwnerUseCase } from "./UpdateOwnerUseCase";


class UpdateOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { name, celular, inativo } = request.body;

    const { id } = request.params

    const updateOwnerUseCase = container.resolve(UpdateOwnerUseCase);

    const result = await updateOwnerUseCase.execute({
      id,
      name,
      celular,
      inativo
    }).then(OwnerResult => {
      return OwnerResult
    })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}

export { UpdateOwnerController }