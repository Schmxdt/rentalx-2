import { HttpResponse } from "@shared/helpers/http";
import { IOwnerDTO } from "../dtos/IOwnerDTO";



interface IOwnerRepository {

  // create
  create(data: IOwnerDTO): Promise<HttpResponse>;

  //delete
  delete(id: string): Promise<HttpResponse>;

  // update
  update(data: IOwnerDTO): Promise<HttpResponse>
}

export { IOwnerRepository };
