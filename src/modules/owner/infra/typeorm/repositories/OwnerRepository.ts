import { getRepository, Repository } from "typeorm";

import { Owner } from "../entities/Owner";

import { IOwnerDTO } from "@modules/owner/dtos/IOwnerDTO";
import { IOwnerRepository } from "@modules/owner/repositories/IOwnerRepository";

class OwnerRepository implements IOwnerRepository {
  private repository: Repository<Owner>;

  constructor() {
    this.repository = getRepository(Owner);
  }

  async create({
    name,
    inativo,
    celular
  }: IOwnerDTO): Promise<Owner> {
    const owner = this.repository.create({
      name,
      inativo,
      celular
    });

    await this.repository.save(owner);

    return owner;
  }
}
export { OwnerRepository };