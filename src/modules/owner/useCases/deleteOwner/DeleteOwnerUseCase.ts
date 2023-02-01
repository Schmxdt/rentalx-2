import { inject, injectable } from 'tsyringe'

import { IOwnerRepository } from '@modules/owner/repositories/IOwnerRepository'
import { Owner } from '@modules/owner/infra/typeorm/entities/Owner'

@injectable()
class DeleteOwnerUseCase {
  constructor(
    @inject('OwnerRepository')
    private ownerRepository: IOwnerRepository
  ) { }

  async execute(id: string): Promise<Owner> {
    const owner = await this.ownerRepository.delete(id)

    return owner
  }
}

export { DeleteOwnerUseCase }
