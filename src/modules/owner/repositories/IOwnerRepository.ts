import { ICreateOwnerDTO } from "../dtos/ICreateOwnerDTO";


interface IOwnerRepository {
  create(data: ICreateOwnerDTO): Promise<void>;
}

export { IOwnerRepository };
