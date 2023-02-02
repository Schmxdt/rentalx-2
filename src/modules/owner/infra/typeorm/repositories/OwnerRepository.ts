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

  // list
  async list(
    search: string,
    page: number,
    rowsPerPage: number,
    order: string
  ): Promise<HttpResponse> {
    let columnName: string
    let columnDirection: 'ASC' | 'DESC'

    if ((typeof (order) === 'undefined') || (order === "")) {
      columnName = 'name'
      columnDirection = 'ASC'
    } else {
      columnName = order.substring(0, 1) === '-' ? order.substring(1) : order
      columnDirection = order.substring(0, 1) === '-' ? 'DESC' : 'ASC'
    }

    const referenceArray = [
      "id",
      "name",
    ]
    const columnOrder = new Array<'ASC' | 'DESC'>(2).fill('ASC')
    const index = referenceArray.indexOf(columnName)

    columnOrder[index] = columnDirection

    const offset = rowsPerPage * page

    try {
      let owners = await this.repository.createQueryBuilder('own')
        .select([
          'own.id as "id"',
          'own.name as "name"',
          'own.celular as "celular"'
        ])
        .where('CAST(own.name AS VARCHAR) ilike :search', { search: `%${search}%` })
        .orWhere('CAST(own.celular AS VARCHAR) ilike :search', { search: `%${search}%` })
        .addOrderBy('own.name', columnOrder[0])
        .addOrderBy('own.celular', columnOrder[1])
        .take(rowsPerPage)
        .skip(offset)
        .getRawMany()

      // below statements are to solve typeorm bug related to use of leftjoins, filters, .take and .skip together

      if (owners.length > rowsPerPage) {
        owners = owners.slice(offset, offset + rowsPerPage)
      }

      //

      return ok(owners)
    } catch (err) {
      return serverError(err)
    }
  }

  //  count
  async count(
    search: string,
  ): Promise<HttpResponse> {
    try {
      const owners = await this.repository.createQueryBuilder('own')
        .select([
          'own.id as "id"',
          'own.name as "nome"',
        ])
        .where('own.name ilike :search', { search: `%${search}%` })
        .getRawMany()

      return ok({ count: owners.length })
    } catch (err) {
      return serverError(err)
    }
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
