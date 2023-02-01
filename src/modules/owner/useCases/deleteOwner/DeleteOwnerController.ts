import { Request, Response } from 'express'
import { container } from 'tsyringe'


import { DeleteOwnerUseCase } from './DeleteOwnerUseCase'

class DeleteOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {

    // delete 

    const id = request.params.id
    const deleteOwnerUseCase = container.resolve(DeleteOwnerUseCase)
    const ownerEntity = await deleteOwnerUseCase.execute(id)

    return response.json({ message: "Owner Deleted", owner: ownerEntity })
  }
}

export { DeleteOwnerController }
