import { HttpResponse } from "@shared/helpers/http";
import { IOwnerDTO } from "../dtos/IOwnerDTO";

interface IOwnerRepository {

  // create
  create(data: IOwnerDTO): Promise<HttpResponse>;

  //delete
  delete(id: string): Promise<HttpResponse>;

  // update
  update(data: IOwnerDTO): Promise<HttpResponse>

  // get
  get(id: string): Promise<HttpResponse>

  // list
  list(
    search: string,
    page: number,
    rowsPerPage: number,
    order: string
  ): Promise<HttpResponse>

  // count
  count(search: string): Promise<HttpResponse>
}

export { IOwnerRepository };
