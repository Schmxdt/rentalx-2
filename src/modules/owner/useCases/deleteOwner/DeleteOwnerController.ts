import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListClienteUseCase } from '../list-cliente/list-cliente-use-case'

class DeleteOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    // delete record

    const id = request.params.id
    const name = request.user
    const deleteOwnerUseCase = container.resolve(DeleteOwnerUseCase)
    await deleteClienteUseCase.execute(user, id)


    // restore list with updated records

    const listClienteUseCase = container.resolve(ListClienteUseCase)
    const clientes = await listClienteUseCase.execute({
      search: '',
      page: 0,
      rowsPerPage: 100,
      order: ''
    })

    return response.json(clientes)
  }
}

export { DeleteOwnerController }
