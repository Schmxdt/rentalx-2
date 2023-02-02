import { IOwnerRepository } from '@modules/owner/repositories/IOwnerRepository'
import { HttpResponse } from '@shared/helpers/http'
import { inject, injectable } from 'tsyringe'


interface IRequest {
  search: string,
}

@injectable()
class CountOwnerUseCase {
  constructor(
    @inject('OwnerRepository')
    private ownerRepository: IOwnerRepository
  ) { }

  async execute({
    search
  }: IRequest): Promise<HttpResponse> {
    const ownersCount = await this.ownerRepository.count(
      search
    )

    return ownersCount
  }
}

export { CountOwnerUseCase }
