import { inject, injectable } from 'tsyringe'

import { IOwnerDTO } from '@modules/owner/dtos/IOwnerDTO'
import { IOwnerRepository } from '@modules/owner/repositories/IOwnerRepository'


interface IRequest {
  search: string,
  page: number,
  rowsPerPage: number,
  order: string
}

interface ResponseProps {
  items: IOwnerDTO[],
  hasNext: boolean
}

@injectable()
class ListOwnerUseCase {
  constructor(
    @inject('OwnerRepository')
    private ownerRepository: IOwnerRepository
  ) { }

  async execute({
    search = '',
    page = 0,
    rowsPerPage = 50,
    order = ''
  }: IRequest): Promise<ResponseProps> {
    const newPage = page !== 0 ? page - 1 : 0

    const owners = await this.ownerRepository.list(
      search,
      newPage,
      rowsPerPage,
      order
    )

    const countOwners = await this.ownerRepository.count(
      search
    )

    const numeroOwner = page * rowsPerPage

    console.log(numeroOwner, countOwners)

    const ownersResponse = {
      items: owners.data,
      hasNext: numeroOwner < countOwners.data.count
    }

    return ownersResponse
  }
}

export { ListOwnerUseCase }