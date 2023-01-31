import { IOwnerDTO } from "@modules/owner/dtos/IOwnerDTO";
import { Owner } from "@modules/owner/infra/typeorm/entities/Owner";
import { IOwnerRepository } from "@modules/owner/repositories/IOwnerRepository";




import { inject, injectable } from "tsyringe";


interface IRequest {
  id: IOwnerDTO
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
    name,
    celular,
    inativo
  }: IRequest): Promise<Owner> {
    const owner = await this.ownerRepository.create({
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