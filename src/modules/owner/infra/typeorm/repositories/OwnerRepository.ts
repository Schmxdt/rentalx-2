import { ICreateOwnerDTO } from "@modules/owner/dtos/ICreateOwnerDTO";
import { getRepository, Repository } from "typeorm";
import { Owner } from "../entities/Owner";

class OwnerRepository implements ICreateOwnerDTO {
  private repository: Repository<Owner>;

  constructor() {
    this.repository = getRepository(Owner);
  }
  id: string;
  nome: string;
  celular: number;
  inativo: boolean;

}

export { OwnerRepository };