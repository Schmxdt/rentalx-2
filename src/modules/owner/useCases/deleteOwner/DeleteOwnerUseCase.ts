import { inject, injectable } from 'tsyringe'

import { IOwnerRepository } from '@modules/owner/repositories/IOwnerRepository'
import { HttpResponse } from '@shared/helpers/http'

@injectable()
class DeleteOwnerUseCase {
  constructor(
    @inject('OwnerRepository')
    private ownerRepository: IOwnerRepository
  ) { }

  async execute(id: string): Promise<HttpResponse> {
    const owner = await this.ownerRepository.delete(id)

    return owner
  }
}

export { DeleteOwnerUseCase }
