import { CreateOwnerController } from "@modules/owner/useCases/createOwner/CreateOwnerController";
import { DeleteOwnerController } from "@modules/owner/useCases/deleteOwner/DeleteOwnerController";
import { UpdateOwnerController } from "@modules/owner/useCases/updateOwner/UpdateOwnerController";
import { ReadOwnerController } from "@modules/owner/useCases/readOwner/ReadOwnerController";
import { ListOwnerController } from "@modules/owner/useCases/listOwner/ListOwnerController";

import { Router } from "express";

const ownersRoutes = Router()

ownersRoutes.post('/', new CreateOwnerController().handle)
ownersRoutes.delete('/:id', new DeleteOwnerController().handle)
ownersRoutes.put('/:id', new UpdateOwnerController().handle)
ownersRoutes.get('/:id', new ReadOwnerController().handle)
ownersRoutes.get('/', new ListOwnerController().handle)

export { ownersRoutes }
