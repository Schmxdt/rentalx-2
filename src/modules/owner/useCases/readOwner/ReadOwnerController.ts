import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ReadOwnerUseCase } from './ReadOwnerUseCase'


class ReadOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const readOwnerUseCase = container.resolve(ReadOwnerUseCase)
    const owner = await readOwnerUseCase.execute(id)

    return response.status(owner.statusCode).json(owner.data)
  }
}

export { ReadOwnerController }