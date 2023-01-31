import { IOwnerDTO } from "../dtos/IOwnerDTO";
import { Owner } from "../infra/typeorm/entities/Owner";


interface IOwnerRepository {

  // create
  create(data: IOwnerDTO): Promise<Owner>;

  //delete
  delete(user: IOwnerDTO, id: string): Promise<Owner>;
}

export { IOwnerRepository };
