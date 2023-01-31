import { IOwnerDTO } from "@modules/owner/dtos/IOwnerDTO";


class OwnerInMemory implements IOwnerDTO {
  id: string;
  name: string;
  celular: string;
  inativo: boolean;
}

export { OwnerInMemory };