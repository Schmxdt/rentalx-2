import { getRepository, Repository } from "typeorm";

import { Owner } from "../entities/Owner";

import { IOwnerDTO } from "@modules/owner/dtos/IOwnerDTO";
import { IOwnerRepository } from "@modules/owner/repositories/IOwnerRepository";


import { HttpResponse, notFound, ok, serverError } from "@shared/helpers/http";


class OwnerRepository implements IOwnerRepository {
  private repository: Repository<Owner>;

  constructor() {
    this.repository = getRepository(Owner);
  }

  // update
  async update({
    id,
    name,
    celular,
    inativo
  }: IOwnerDTO): Promise<HttpResponse> {
    const owner = await this.repository.findOne(id)

    if (!owner) {
      return notFound()
    }

    const newowner = this.repository.create({
      id,
      name,
      celular,
      inativo
    })

    try {
      await this.repository.save(newowner)

      return ok(newowner)
    } catch (err) {
      return serverError(err)
    }
  }

  // delete 

  async delete(id: string): Promise<any> {

    return await this.repository.delete(id);
  }

  //create

  async create({
    name,
    inativo,
    celular
  }: IOwnerDTO): Promise<HttpResponse> {
    const newowner = this.repository.create({
      name,
      inativo,
      celular
    });

    try {
      await this.repository.save(newowner)

      return ok(newowner)
    } catch (err) {
      return serverError(err)
    }
  }
}
export { OwnerRepository };
