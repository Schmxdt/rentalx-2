import { getRepository, Repository } from "typeorm";

import { Owner } from "../entities/Owner";

import { IOwnerDTO } from "@modules/owner/dtos/IOwnerDTO";
import { IOwnerRepository } from "@modules/owner/repositories/IOwnerRepository";


import { HttpResponse, noContent, notFound, ok, serverError } from "@shared/helpers/http";


class OwnerRepository implements IOwnerRepository {
  private repository: Repository<Owner>;

  constructor() {
    this.repository = getRepository(Owner);
  }

  // read

  async get(id: string): Promise<HttpResponse> {

    try {
      const owner = await this.repository.createQueryBuilder('owner')
        .select([
          'owner.id as "id"',
          'owner.name as "name"',
          'owner.celular as "celular"',
          'owner.inativo as "inativo"',
        ])
        .where('owner.id = :id', { id })
        .getRawOne()

      if (typeof owner === 'undefined') {
        return noContent()
      }

      console.log(owner)

      return ok(owner)
    } catch (err) {
      return serverError(err)
    }
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
