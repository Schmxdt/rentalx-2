import { CreateOwnerController } from "@modules/owner/useCases/createOwner/CreateOwnerController";
import { DeleteOwnerController } from "@modules/owner/useCases/deleteOwner/DeleteOwnerController";
import { Router } from "express";

const ownerRoutes = Router()

ownerRoutes.post('/', new CreateOwnerController().handle)

ownerRoutes.delete('/:id', new DeleteOwnerController().handle)

export { ownerRoutes }