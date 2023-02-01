import { inject, injectable } from "tsyringe";

import { IOwnerDTO } from "@modules/owner/dtos/IOwnerDTO";
import { Owner } from "@modules/owner/infra/typeorm/entities/Owner";
import { IOwnerRepository } from "@modules/owner/repositories/IOwnerRepository";


interface IRequest {
  id: string,
  name: string,
  celular: string,
  inativo: boolean,
}

@injectable()
class CreateOwnerUseCase {
  constructor(
    @inject("OwnerRepository")
    private ownerRepository: IOwnerRepository,
  ) { }

  async execute({
    id,
    name,
    celular,
    inativo
  }: IRequest): Promise<Owner> {
    const owner = await this.ownerRepository.create({
      id,
      name,
      celular,
      inativo
    })
      .then(ownerResult => {
        return ownerResult
      })
      .catch(error => {
        return error
      })
    return owner
  }
}

export { CreateOwnerUseCase };