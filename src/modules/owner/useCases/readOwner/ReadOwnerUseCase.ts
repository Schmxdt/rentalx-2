import { IOwnerRepository } from '@modules/owner/repositories/IOwnerRepository'
import { HttpResponse } from '@shared/helpers/http'
import { inject, injectable } from 'tsyringe'


@injectable()
class ReadOwnerUseCase {
  constructor(
    @inject('OwnerRepository')
    private ownerRepository: IOwnerRepository
  ) { }

  async execute(id: string): Promise<HttpResponse> {
    const owner = await this.ownerRepository.get(id)

    return owner
  }
}

export { ReadOwnerUseCase }