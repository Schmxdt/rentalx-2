import { inject, injectable } from 'tsyringe'


import { IOwnerDTO } from '@modules/owner/dtos/IOwnerDTO'
import { IOwnerRepository } from '@modules/owner/repositories/IOwnerRepository'

@injectable()
class DeleteOwnerUseCase {
  constructor(
    @inject('ClienteRepository')
    private ownerRepository: IOwnerRepository
  ) { }

  async execute(user: IOwnerDTO, id: string): Promise<owner> {
    const owner = await this.clienteRepository.delete(name, id)

    return owner
  }
}

export { DeleteOwnerUseCase }
