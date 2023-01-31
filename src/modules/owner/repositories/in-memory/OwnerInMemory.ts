import { ICreateOwnerDTO } from "@modules/owner/dtos/ICreateOwnerDTO";


class OwnerInMemory implements ICreateOwnerDTO {
  id: string;
  nome: string;
  celular: number;
  inativo: boolean;

}

export { OwnerInMemory };