import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CountOwnerUseCase } from './CountOwnerUseCase'


class CountOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      search
    } = request.body

    const countOwnerUseCase = container.resolve(CountOwnerUseCase)

    const vendedoresCount = await countOwnerUseCase.execute({
      search: search as string
    })

    return response.status(vendedoresCount.statusCode).json(vendedoresCount)
  }
}

export { CountOwnerController }